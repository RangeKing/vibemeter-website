const ASSET_RULES = {
  'arm64.dmg': /_macOS_aarch64\.dmg$/i,
  'arm64.zip': /_macOS_arm64\.zip$/i,
  'x64.dmg': /_macOS_x64\.dmg$/i,
  'x64.zip': /_macOS_x64\.zip$/i,
};

export const releaseAssetKeys = Object.freeze(Object.keys(ASSET_RULES));

function normalizedLines(markdown = '') {
  return String(markdown).replace(/\r\n?/g, '\n').split('\n');
}

export function extractReleaseSection(markdown, heading) {
  const lines = normalizedLines(markdown);
  const expected = heading.trim().toLocaleLowerCase('en-US');
  let start = -1;

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^##\s+(.+?)\s*#*\s*$/);
    if (match?.[1].trim().toLocaleLowerCase('en-US') === expected) {
      start = index + 1;
      break;
    }
  }

  if (start < 0) return '';
  let end = lines.length;
  for (let index = start; index < lines.length; index += 1) {
    if (/^##\s+/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join('\n').trim();
}

export function parseLocalizedNotes(body = '') {
  const original = String(body).trim();
  const localized = {
    'zh-CN': extractReleaseSection(original, '简体中文'),
    en: extractReleaseSection(original, 'English'),
  };

  return Object.fromEntries(Object.entries(localized).map(([locale, markdown]) => [
    locale,
    {
      source: markdown ? 'localized' : 'fallback',
      markdown: markdown || original,
    },
  ]));
}

export function selectReleaseAssets(assets = []) {
  const selected = {};

  for (const [key, pattern] of Object.entries(ASSET_RULES)) {
    const matches = assets.filter((asset) => pattern.test(asset.name || ''));
    if (matches.length !== 1) {
      const names = matches.map((asset) => asset.name).join(', ') || 'none';
      throw new Error(`Expected exactly one ${key} asset, found ${matches.length}: ${names}`);
    }
    const url = matches[0].browser_download_url;
    if (!url) throw new Error(`Release asset ${matches[0].name} has no browser_download_url.`);
    selected[key] = url;
  }

  return selected;
}

export function buildReleaseData(release, sourceRepo = 'RangeKing/vibemeter') {
  if (!release?.tag_name) throw new Error('Release is missing tag_name.');
  if (!/^v\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(release.tag_name)) {
    throw new Error(`Unsupported release tag: ${release.tag_name}`);
  }
  if (release.draft) throw new Error(`Release ${release.tag_name} is still a draft.`);
  if (!release.published_at) throw new Error(`Release ${release.tag_name} has not been published.`);

  return {
    schemaVersion: 1,
    sourceRepo,
    version: release.tag_name,
    releaseUrl: release.html_url,
    publishedAt: release.published_at,
    releaseUpdatedAt: release.updated_at || release.published_at,
    assets: selectReleaseAssets(release.assets),
    notes: parseLocalizedNotes(release.body),
  };
}

export function serializeReleaseData(data) {
  return `// Generated from ${data.sourceRepo}. Do not edit by hand.\nwindow.VibeMeterReleaseData = ${JSON.stringify(data, null, 2)};\n`;
}
