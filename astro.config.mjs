import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository?.split('/') ?? [];
const isOrgSite = Boolean(owner && repo === `${owner}.github.io`);
const startersRoot = fileURLToPath(new URL('./starters', import.meta.url));

export default defineConfig({
  output: 'static',
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: repo && !isOrgSite ? `/${repo}` : '/',
  trailingSlash: 'always',
  vite: {
    server: {
      fs: {
        allow: ['.', startersRoot],
      },
    },
  },
});