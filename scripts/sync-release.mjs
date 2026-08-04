import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import {
  buildReleaseCollection,
  releaseDataCacheKey,
  serializeReleaseData,
  updateReleaseScriptVersion,
} from './release-sync-lib.mjs';

function parseArguments(values) {
  const options = {
    repo: 'RangeKing/vibemeter',
    output: 'release-data.js',
  };

  for (let index = 0; index < values.length; index += 1) {
    const name = values[index];
    if (!['--tag', '--repo', '--output'].includes(name)) {
      throw new Error(`Unknown option: ${name}`);
    }
    const value = values[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${name}.`);
    options[name.slice(2)] = value;
    index += 1;
  }

  if (!options.tag) throw new Error('Usage: node scripts/sync-release.mjs --tag vX.Y.Z [--repo owner/repo] [--output release-data.js]');
  if (!/^[^/]+\/[^/]+$/.test(options.repo)) throw new Error(`Invalid repository: ${options.repo}`);
  return options;
}

function githubHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'vibemeter-website-release-sync',
  };
  const token = process.env.RELEASE_API_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function fetchGithubJson(url) {
  const response = await fetch(url, { headers: githubHeaders() });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub release lookup failed (${response.status}): ${body.slice(0, 500)}`);
  }
  return response.json();
}

async function fetchRelease(repo, tag) {
  return fetchGithubJson(`https://api.github.com/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`);
}

async function fetchReleaseHistory(repo) {
  const releases = [];
  for (let page = 1; page <= 10; page += 1) {
    const pageReleases = await fetchGithubJson(
      `https://api.github.com/repos/${repo}/releases?per_page=100&page=${page}`,
    );
    releases.push(...pageReleases);
    if (pageReleases.length < 100) break;
  }
  return releases;
}

async function fetchReleaseData(repo, tag) {
  const [release, history] = await Promise.all([
    fetchRelease(repo, tag),
    fetchReleaseHistory(repo),
  ]);
  return { release, history };
}

const options = parseArguments(process.argv.slice(2));
const { release, history } = await fetchReleaseData(options.repo, options.tag);
const data = buildReleaseCollection(release, history, options.repo);
const outputPath = resolve(options.output);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, serializeReleaseData(data), 'utf8');

if (outputPath === resolve('release-data.js')) {
  const indexPath = resolve('index.html');
  const indexSource = await readFile(indexPath, 'utf8');
  const updatedIndex = updateReleaseScriptVersion(indexSource, data.version, releaseDataCacheKey(data));
  if (updatedIndex !== indexSource) {
    await writeFile(indexPath, updatedIndex, 'utf8');
  }
}

console.log(`Synced ${data.version}: ${Object.keys(data.assets).length} assets and ${data.releases.length} release notes, ${outputPath}`);
