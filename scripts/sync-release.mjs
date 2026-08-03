import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { buildReleaseData, serializeReleaseData } from './release-sync-lib.mjs';

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

async function fetchRelease(repo, tag) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'vibemeter-website-release-sync',
  };
  const token = process.env.RELEASE_API_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`https://api.github.com/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`, { headers });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub release lookup failed (${response.status}): ${body.slice(0, 500)}`);
  }
  return response.json();
}

const options = parseArguments(process.argv.slice(2));
const release = await fetchRelease(options.repo, options.tag);
const data = buildReleaseData(release, options.repo);
const outputPath = resolve(options.output);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, serializeReleaseData(data), 'utf8');
console.log(`Synced ${data.version}: ${Object.keys(data.assets).length} assets, ${outputPath}`);
