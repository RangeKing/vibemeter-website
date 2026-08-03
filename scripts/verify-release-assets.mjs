import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile('release-data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { filename: 'release-data.js' });

const assets = Object.entries(sandbox.window.VibeMeterReleaseData?.assets || {});
assert.equal(assets.length, 4, 'release-data.js must contain four download assets.');

const results = await Promise.all(assets.map(async ([key, url]) => {
  const response = await fetch(url, {
    method: 'HEAD',
    redirect: 'follow',
    signal: AbortSignal.timeout(30_000),
  });
  return { key, status: response.status, ok: response.ok };
}));

for (const result of results) {
  console.log(`${result.key}: HTTP ${result.status}`);
  assert.ok(result.ok, `${result.key} is not downloadable (HTTP ${result.status}).`);
}
