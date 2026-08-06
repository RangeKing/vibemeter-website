import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { releaseAssetKeys, releaseDataCacheKey } from './release-sync-lib.mjs';

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
assert.equal(releaseData.schemaVersion, 2, 'release-data.js must use schema version 2.');
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
  assert.ok(['localized', 'fallback', 'default'].includes(note.source), `Invalid ${locale} release-note source.`);
  assert.equal(typeof note.markdown, 'string');
}

assert.ok(Array.isArray(releaseData.releases) && releaseData.releases.length, 'Release history must not be empty.');
const releaseVersions = new Set();
let previousPublishedAt = Infinity;
for (const entry of releaseData.releases) {
  assert.match(entry.version, /^v\d+\.\d+\.\d+/, 'Release history version must be semantic.');
  assert.ok(!releaseVersions.has(entry.version), `Duplicate release history entry: ${entry.version}`);
  releaseVersions.add(entry.version);
  assert.equal(new URL(entry.releaseUrl).hostname, 'github.com');
  assert.ok(entry.releaseUrl.endsWith(`/tag/${entry.version}`), 'Release history URL and version must match.');
  const publishedAt = Date.parse(entry.publishedAt);
  assert.ok(Number.isFinite(publishedAt), `Invalid release history date: ${entry.version}`);
  assert.ok(publishedAt <= previousPublishedAt, 'Release history must be ordered newest first.');
  previousPublishedAt = publishedAt;
  for (const locale of ['en', 'zh-CN']) {
    const note = entry.notes?.[locale];
    assert.ok(note, `Missing ${locale} notes for ${entry.version}.`);
    assert.ok(['localized', 'fallback', 'default'].includes(note.source), `Invalid ${locale} source for ${entry.version}.`);
    assert.equal(typeof note.markdown, 'string');
  }
  if (entry.version !== 'v0.1.0') {
    assert.ok(
      ['en', 'zh-CN'].some((locale) => entry.notes[locale].source === 'localized'),
      `${entry.version} must contain release notes before it can be published.`,
    );
  }
}
const betaRelease = releaseData.releases.find((entry) => entry.version === 'v0.1.0');
assert.ok(betaRelease, 'Release history must include v0.1.0.');
assert.equal(betaRelease.notes['zh-CN'].markdown, '测试版正式发布');

assert.ok(indexHtml.includes('release-data.js'), 'index.html must load release-data.js.');
const releaseScriptVersion = indexHtml.match(/<script\s+defer\s+src=["']\.\/release-data\.js\?v=([^"']+)["']/)?.[1];
assert.ok(releaseScriptVersion, 'release-data.js must include a version query parameter.');
assert.equal(
  decodeURIComponent(releaseScriptVersion),
  releaseDataCacheKey(releaseData),
  'release-data.js cache key must match the current release data revision.',
);
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
