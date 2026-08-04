import assert from 'node:assert/strict';
import {
  buildReleaseCollection,
  buildReleaseData,
  buildReleaseHistory,
  extractReleaseSection,
  parseLocalizedNotes,
  releaseDataCacheKey,
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

const releaseBodyHeadingVariant = `## 中文
中文版本更新。

## English:
English release notes.`;
assert.deepEqual(parseLocalizedNotes(releaseBodyHeadingVariant), {
  'zh-CN': { source: 'localized', markdown: '中文版本更新。' },
  en: { source: 'localized', markdown: 'English release notes.' },
});

const releaseBodyFormatVariant = `### 🇨🇳 中文（简体）
- 修复中文说明识别。

### 🇺🇸 English
- Detect localized release notes reliably.`;
assert.deepEqual(parseLocalizedNotes(releaseBodyFormatVariant), {
  'zh-CN': { source: 'localized', markdown: '- 修复中文说明识别。' },
  en: { source: 'localized', markdown: '- Detect localized release notes reliably.' },
});

const unheadedBilingualBody = `版本更新说明：修复数据页空会话噪声。
- 保留原始会话台账。

Version notes: remove empty work-event noise from Data.
- Keep the raw session ledger available.
- Frontend: 55 tests passed.`;
assert.deepEqual(parseLocalizedNotes(unheadedBilingualBody), {
  'zh-CN': { source: 'localized', markdown: '版本更新说明：修复数据页空会话噪声。\n- 保留原始会话台账。' },
  en: { source: 'localized', markdown: 'Version notes: remove empty work-event noise from Data.\n- Keep the raw session ledger available.\n- Frontend: 55 tests passed.' },
});

assert.deepEqual(selectReleaseAssets(assets), {
  'arm64.dmg': 'https://example.com/aarch64.dmg',
  'arm64.zip': 'https://example.com/arm64.zip',
  'x64.dmg': 'https://example.com/x64.dmg',
  'x64.zip': 'https://example.com/x64.zip',
});

const releasePayload = {
  tag_name: 'v0.2.0',
  html_url: 'https://github.com/RangeKing/vibemeter/releases/tag/v0.2.0',
  published_at: '2026-08-02T00:00:00Z',
  updated_at: '2026-08-02T00:05:00Z',
  draft: false,
  body: bilingualBody,
  assets,
};
const release = buildReleaseData(releasePayload);
assert.equal(release.version, 'v0.2.0');
assert.equal(release.notes['zh-CN'].source, 'localized');

const betaRelease = {
  tag_name: 'v0.1.0',
  html_url: 'https://github.com/RangeKing/vibemeter/releases/tag/v0.1.0',
  published_at: '2026-07-01T00:00:00Z',
  updated_at: '2026-07-01T00:05:00Z',
  draft: false,
  body: '',
  assets,
};
const betaData = buildReleaseData(betaRelease);
assert.deepEqual(betaData.notes, {
  'zh-CN': { source: 'default', markdown: '测试版正式发布' },
  en: { source: 'default', markdown: 'First public beta release.' },
});

const history = buildReleaseHistory([betaRelease, {
  ...releasePayload,
  tag_name: 'v0.2.0',
  published_at: '2026-08-02T00:00:00Z',
}]);
assert.deepEqual(history.map((entry) => entry.version), ['v0.2.0', 'v0.1.0']);
assert.ok(!('assets' in history[0]));

const collection = buildReleaseCollection(releasePayload, [betaRelease], 'RangeKing/vibemeter');
assert.deepEqual(collection.releases.map((entry) => entry.version), ['v0.2.0', 'v0.1.0']);
assert.equal(collection.schemaVersion, 2);

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
assert.equal(
  releaseDataCacheKey({ version: 'v0.2.0', releaseUpdatedAt: '2026-08-02T00:05:00Z' }),
  'v0.2.0-20260802000500',
);
assert.equal(
  releaseDataCacheKey({ version: 'v0.2.0', releaseUpdatedAt: '2026-08-02T00:05:00Z', schemaVersion: 2 }),
  'v0.2.0-20260802000500-s2',
);
assert.equal(
  updateReleaseScriptVersion(
    '<script defer src="./release-data.js?v=old"></script>',
    'v0.2.0',
    'v0.2.0-20260802000500',
  ),
  '<script defer src="./release-data.js?v=v0.2.0-20260802000500"></script>',
);
assert.throws(
  () => updateReleaseScriptVersion('<script defer src="./site.js?v=1"></script>', 'v0.2.0'),
  /must load release-data\.js/,
);

console.log('Release sync tests passed.');
