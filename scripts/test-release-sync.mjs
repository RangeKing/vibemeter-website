import assert from 'node:assert/strict';
import {
  buildReleaseData,
  extractReleaseSection,
  parseLocalizedNotes,
  selectReleaseAssets,
  updateReleaseScriptVersion,
} from './release-sync-lib.mjs';

const assets = [
  ['VibeMeter_0.2.0_macOS_aarch64.dmg', 'aarch64.dmg'],
  ['VibeMeter_v0.2.0_macOS_arm64.zip', 'arm64.zip'],
  ['VibeMeter_0.2.0_macOS_x64.dmg', 'x64.dmg'],
  ['VibeMeter_v0.2.0_macOS_x64.zip', 'x64.zip'],
].map(([name, suffix]) => ({ name, browser_download_url: `https://example.com/${suffix}` }));

const bilingualBody = `## 简体中文
- 新增版本更新区域。
- 修复下载链接。

## English
- Added a release notes section.
- Fixed download links.`;

assert.equal(extractReleaseSection(bilingualBody, '简体中文'), '- 新增版本更新区域。\n- 修复下载链接。');
assert.equal(extractReleaseSection(bilingualBody, 'English'), '- Added a release notes section.\n- Fixed download links.');
assert.deepEqual(parseLocalizedNotes(bilingualBody), {
  'zh-CN': { source: 'localized', markdown: '- 新增版本更新区域。\n- 修复下载链接。' },
  en: { source: 'localized', markdown: '- Added a release notes section.\n- Fixed download links.' },
});

assert.deepEqual(selectReleaseAssets(assets), {
  'arm64.dmg': 'https://example.com/aarch64.dmg',
  'arm64.zip': 'https://example.com/arm64.zip',
  'x64.dmg': 'https://example.com/x64.dmg',
  'x64.zip': 'https://example.com/x64.zip',
});

const release = buildReleaseData({
  tag_name: 'v0.2.0',
  html_url: 'https://github.com/RangeKing/vibemeter/releases/tag/v0.2.0',
  published_at: '2026-08-02T00:00:00Z',
  updated_at: '2026-08-02T00:05:00Z',
  draft: false,
  body: bilingualBody,
  assets,
});
assert.equal(release.version, 'v0.2.0');
assert.equal(release.notes['zh-CN'].source, 'localized');

const originalOnly = 'A release body without localized headings.';
assert.deepEqual(parseLocalizedNotes(originalOnly), {
  'zh-CN': { source: 'fallback', markdown: originalOnly },
  en: { source: 'fallback', markdown: originalOnly },
});

assert.throws(() => selectReleaseAssets(assets.slice(1)), /exactly one arm64\.dmg/);
assert.throws(() => selectReleaseAssets([...assets, assets[0]]), /found 2/);

assert.equal(
  updateReleaseScriptVersion('<script defer src="./release-data.js?v=1"></script>', 'v0.2.0'),
  '<script defer src="./release-data.js?v=v0.2.0"></script>',
);
assert.throws(
  () => updateReleaseScriptVersion('<script defer src="./site.js?v=1"></script>', 'v0.2.0'),
  /must load release-data\.js/,
);

console.log('Release sync tests passed.');
