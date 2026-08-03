import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { releaseAssetKeys } from './release-sync-lib.mjs';

function evaluateClassicScript(source, filename) {
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox, { filename });
  return sandbox.window;
}

const [indexHtml, releaseSource, localeSource] = await Promise.all([
  readFile('index.html', 'utf8'),
  readFile('release-data.js', 'utf8'),
  readFile('site-locales.js', 'utf8'),
]);

const releaseData = evaluateClassicScript(releaseSource, 'release-data.js').VibeMeterReleaseData;
assert.equal(releaseData.schemaVersion, 1, 'release-data.js must use schema version 1.');
assert.match(releaseData.version, /^v\d+\.\d+\.\d+/, 'Release version must be a v-prefixed semantic version.');
assert.equal(new URL(releaseData.releaseUrl).hostname, 'github.com');
assert.ok(releaseData.releaseUrl.endsWith(`/tag/${releaseData.version}`), 'Release URL and version must match.');
assert.ok(Number.isFinite(Date.parse(releaseData.publishedAt)), 'Release date must be an ISO date.');

assert.deepEqual(Object.keys(releaseData.assets).sort(), [...releaseAssetKeys].sort());
for (const [key, url] of Object.entries(releaseData.assets)) {
  assert.equal(new URL(url).protocol, 'https:', `${key} must use HTTPS.`);
  assert.ok(url.includes(`/releases/download/${releaseData.version}/`), `${key} must point at the current release tag.`);
}

for (const locale of ['en', 'zh-CN']) {
  const note = releaseData.notes[locale];
  assert.ok(note, `Missing ${locale} release notes.`);
  assert.ok(['localized', 'fallback'].includes(note.source), `Invalid ${locale} release-note source.`);
  assert.equal(typeof note.markdown, 'string');
}

assert.ok(indexHtml.includes('release-data.js'), 'index.html must load release-data.js.');
assert.doesNotMatch(indexHtml, /releases\/download\//, 'Download URLs must not be hardcoded in index.html.');
assert.doesNotMatch(indexHtml, /releases\/tag\/v\d+\.\d+\.\d+/, 'Versioned release URLs must not be hardcoded in index.html.');

const assetReferences = [...indexHtml.matchAll(/data-release-asset="([^"]+)"/g)].map((match) => match[1]);
for (const key of releaseAssetKeys) {
  assert.equal(assetReferences.filter((reference) => reference === key).length, 2, `${key} must be bound in both download areas.`);
}
assert.ok(assetReferences.every((reference) => releaseAssetKeys.includes(reference)), 'index.html contains an unknown release asset key.');

const locales = evaluateClassicScript(localeSource, 'site-locales.js').VibeMeterLocales.localeMessages;
const englishKeys = Object.keys(locales.en).sort();
for (const [locale, messages] of Object.entries(locales)) {
  assert.deepEqual(Object.keys(messages).sort(), englishKeys, `${locale} locale keys must match English.`);
}

const localizedKeys = [...indexHtml.matchAll(/data-i18n(?:-rich|-aria-label|-title|-alt)?="([^"]+)"/g)].map((match) => match[1]);
for (const key of new Set(localizedKeys)) {
  assert.ok(Object.hasOwn(locales.en, key), `Missing locale key used by index.html: ${key}`);
}

console.log(`Site validation passed for ${releaseData.version}.`);
