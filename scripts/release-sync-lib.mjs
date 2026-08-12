const ASSET_RULES = {
  'arm64.dmg': /_macOS_aarch64\.dmg$/i,
  'arm64.zip': /_macOS_arm64\.zip$/i,
  'x64.dmg': /_macOS_x64\.dmg$/i,
  'x64.zip': /_macOS_x64\.zip$/i,
};

export const releaseAssetKeys = Object.freeze(Object.keys(ASSET_RULES));

const LOCALIZED_HEADING_ALIASES = {
  'zh-CN': new Set([
    '中文',
    '中文说明',
    '中文更新',
    '简体中文',
    '简体中文说明',
    '中文（简体）',
    '中文(简体)',
    '简体中文（中国大陆）',
    '简体中文(中国大陆)',
    'zh-cn',
    'zh_cn',
    'chinese',
    'simplified chinese',
    'chinese (simplified)',
  ]),
  en: new Set([
    'english',
    '英文',
    'english notes',
    'release notes',
    'release notes (english)',
    'en',
    'en-us',
    'us english',
  ]),
};

function normalizedLines(markdown = '') {
  return String(markdown).replace(/\r\n?/g, '\n').split('\n');
}

function normalizeHeading(heading) {
  return String(heading)
    .trim()
    .replace(/[：:]+$/, '')
    .replace(/\s+/g, ' ')
    .replace(/^[^A-Za-z0-9\u3400-\u9fff]+/u, '')
    .toLocaleLowerCase('en-US');
}

function headingMatchesLocale(candidate, locale) {
  const normalized = normalizeHeading(candidate);
  const aliases = LOCALIZED_HEADING_ALIASES[locale];
  if (aliases.has(normalized)) return true;

  const pieces = normalized.split(/\s*(?:\/|\||·|—|–|-)\s*/u).filter(Boolean);
  if (pieces.some((piece) => aliases.has(piece))) return true;

  if (locale === 'zh-CN') {
    return /(?:^|\s)(?:中文|简体中文|chinese|zh[-_ ]?cn)(?:$|\s)/iu.test(normalized);
  }
  return /(?:^|\s)(?:english|英文|en[-_ ]?us?)(?:$|\s)/iu.test(normalized);
}

function extractSection(markdown, matchesHeading) {
  const lines = normalizedLines(markdown);
  let start = -1;
  let headingLevel = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (match && matchesHeading(match[2])) {
      start = index + 1;
      headingLevel = match[1].length;
      break;
    }
  }

  if (start < 0) return '';
  let end = lines.length;
  for (let index = start; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{1,6})\s+/);
    if (match && match[1].length <= headingLevel) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join('\n').trim();
}

export function extractReleaseSection(markdown, heading) {
  const expected = normalizeHeading(heading);
  return extractSection(markdown, (candidate) => normalizeHeading(candidate) === expected);
}

function extractLocalizedSection(markdown, locale) {
  return extractSection(markdown, (candidate) => headingMatchesLocale(candidate, locale));
}

function classifyLanguageLine(line) {
  const hanCount = (String(line).match(/[\u3400-\u9fff]/g) || []).length;
  const latinCount = (String(line).match(/[A-Za-z]/g) || []).length;
  if (hanCount >= 2 || (hanCount > 0 && hanCount >= latinCount / 3)) return 'zh-CN';
  if (latinCount > 0) return 'en';
  return null;
}

function splitBilingualNotes(markdown) {
  const lines = normalizedLines(markdown);
  const blocks = [];
  let locale = null;
  let block = [];
  let neutralLines = [];

  const commitBlock = () => {
    const content = block.join('\n').trim();
    if (locale && content) blocks.push({ locale, markdown: content });
    block = [];
  };

  for (const line of lines) {
    const lineLocale = classifyLanguageLine(line);
    if (!lineLocale) {
      neutralLines.push(line);
      continue;
    }

    if (!locale) {
      locale = lineLocale;
      block.push(...neutralLines, line);
      neutralLines = [];
      continue;
    }

    if (lineLocale !== locale) {
      commitBlock();
      locale = lineLocale;
      block.push(...neutralLines, line);
    } else {
      block.push(...neutralLines, line);
    }
    neutralLines = [];
  }

  block.push(...neutralLines);
  commitBlock();

  const localized = Object.fromEntries(
    blocks.map(({ locale: blockLocale, markdown: blockMarkdown }) => [blockLocale, blockMarkdown]),
  );
  if (!localized['zh-CN'] || !localized.en) return null;
  return localized;
}

export function parseLocalizedNotes(body = '') {
  const original = String(body).trim();
  const localized = {
    'zh-CN': extractLocalizedSection(original, 'zh-CN'),
    en: extractLocalizedSection(original, 'en'),
  };

  if (!localized['zh-CN'] && !localized.en) {
    const detected = splitBilingualNotes(original);
    if (detected) {
      localized['zh-CN'] = detected['zh-CN'];
      localized.en = detected.en;
    }
  }

  return Object.fromEntries(Object.entries(localized).map(([locale, markdown]) => [
    locale,
    {
      source: markdown ? 'localized' : 'fallback',
      markdown: markdown || original,
    },
  ]));
}

function defaultNotesForRelease(version) {
  if (version === 'v0.1.0') {
    return {
      'zh-CN': { source: 'default', markdown: '测试版正式发布' },
      en: { source: 'default', markdown: 'First public beta release.' },
    };
  }
  return null;
}

export function isEmptyOrGenericReleaseBody(body) {
  const original = String(body || '').trim();
  if (!original) return true;
  if (!/download the dmg or zip matching your mac/i.test(original)) return false;
  return !Object.values(parseLocalizedNotes(original)).some((note) => note.source === 'localized');
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

export function buildReleaseNoteEntry(release, sourceRepo = 'RangeKing/vibemeter') {
  if (!release?.tag_name) throw new Error('Release is missing tag_name.');
  if (!/^v\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(release.tag_name)) {
    throw new Error(`Unsupported release tag: ${release.tag_name}`);
  }
  if (release.draft) throw new Error(`Release ${release.tag_name} is still a draft.`);
  if (!release.published_at) throw new Error(`Release ${release.tag_name} has not been published.`);

  const parsedNotes = parseLocalizedNotes(release.body);
  const notes = isEmptyOrGenericReleaseBody(release.body)
    ? (defaultNotesForRelease(release.tag_name) || parsedNotes)
    : parsedNotes;

  return {
    sourceRepo,
    version: release.tag_name,
    releaseUrl: release.html_url,
    publishedAt: release.published_at,
    releaseUpdatedAt: release.updated_at || release.published_at,
    notes,
  };
}

export function buildReleaseHistory(releases = [], sourceRepo = 'RangeKing/vibemeter') {
  return releases
    .filter((release) => release && !release.draft && release.published_at)
    .map((release) => buildReleaseNoteEntry(release, sourceRepo))
    .sort((left, right) => Date.parse(right.publishedAt) - Date.parse(left.publishedAt));
}

export function buildReleaseData(release, sourceRepo = 'RangeKing/vibemeter') {
  return {
    schemaVersion: 2,
    ...buildReleaseNoteEntry(release, sourceRepo),
    assets: selectReleaseAssets(release.assets),
  };
}

export function buildReleaseCollection(release, releases = [], sourceRepo = 'RangeKing/vibemeter') {
  const latest = buildReleaseData(release, sourceRepo);
  const latestHistoryEntry = {
    sourceRepo: latest.sourceRepo,
    version: latest.version,
    releaseUrl: latest.releaseUrl,
    publishedAt: latest.publishedAt,
    releaseUpdatedAt: latest.releaseUpdatedAt,
    notes: latest.notes,
  };
  const history = buildReleaseHistory(releases, sourceRepo)
    .filter((entry) => entry.version !== latest.version);
  history.push(latestHistoryEntry);
  history.sort((left, right) => Date.parse(right.publishedAt) - Date.parse(left.publishedAt));

  return {
    ...latest,
    releases: history,
  };
}

export function serializeReleaseData(data) {
  return `// Generated from ${data.sourceRepo}. Do not edit by hand.\nwindow.VibeMeterReleaseData = ${JSON.stringify(data, null, 2)};\n`;
}

export function releaseDataCacheKey(data) {
  const updatedAt = String(data.releaseUpdatedAt || '').replace(/\D/g, '');
  const schemaRevision = data.schemaVersion ? `-s${data.schemaVersion}` : '';
  return updatedAt ? `${data.version}-${updatedAt}${schemaRevision}` : `${data.version}${schemaRevision}`;
}

export function updateReleaseScriptVersion(indexHtml, version, cacheKey = version) {
  const scriptPattern = /(<script\s+defer\s+src=["']\.\/release-data\.js\?v=)[^"']*(["'])/;
  if (!scriptPattern.test(indexHtml)) {
    throw new Error('index.html must load release-data.js with a version query parameter.');
  }
  return indexHtml.replace(scriptPattern, `$1${encodeURIComponent(cacheKey)}$2`);
}
