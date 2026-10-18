#!/usr/bin/env node
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'starters', 'portfolio');
const outDir = join(root, 'public', 'downloads');
const themes = ['editorial', 'developer', 'professional'];

mkdirSync(outDir, { recursive: true });

// Assets used by live portfolio previews on the workshop site
const previewAssets = join(root, 'public', 'starter-assets');
rmSync(previewAssets, { recursive: true, force: true });
mkdirSync(previewAssets, { recursive: true });
cpSync(join(source, 'public'), previewAssets, { recursive: true });
console.log(`Synced preview assets to ${previewAssets}`);

function setTheme(profileSource, theme) {
  return profileSource.replace(/^(\s*theme:\s*)'[^']*'/m, `$1'${theme}'`);
}

function shouldCopy(src) {
  const parts = src.split(/[/\\]/);
  return !parts.some((part) => ['node_modules', 'dist', '.astro', '.DS_Store'].includes(part));
}

for (const theme of themes) {
  const staging = join(outDir, `.staging-${theme}`);
  const zipPath = join(outDir, `portfolio-${theme}.zip`);

  rmSync(staging, { recursive: true, force: true });
  if (existsSync(zipPath)) rmSync(zipPath);

  cpSync(source, staging, { recursive: true, filter: shouldCopy });

  const profilePath = join(staging, 'src', 'data', 'profile.js');
  const profile = readFileSync(profilePath, 'utf8');
  writeFileSync(profilePath, setTheme(profile, theme));

  // zip contents so extracting creates a single top-level folder
  const folderName = `portfolio-${theme}`;
  const wrap = join(outDir, `.wrap-${theme}`);
  rmSync(wrap, { recursive: true, force: true });
  mkdirSync(wrap, { recursive: true });
  cpSync(staging, join(wrap, folderName), { recursive: true });

  execFileSync('zip', ['-r', '-q', zipPath, folderName], { cwd: wrap });

  rmSync(staging, { recursive: true, force: true });
  rmSync(wrap, { recursive: true, force: true });
  console.log(`Wrote ${zipPath}`);
}

// Generic starter defaults to editorial (same as editorial ZIP, kept for older links)
const generic = join(outDir, 'portfolio-starter.zip');
if (existsSync(generic)) rmSync(generic);
cpSync(join(outDir, 'portfolio-editorial.zip'), generic);
console.log(`Wrote ${generic}`);
