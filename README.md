# MIS Club Secure Software Development Workshop Series

A browser-based teaching workspace for Workshop 1 — Git & GitHub — plus a modern Astro portfolio demonstration for MIS Club students.

## Use the site

- **Student workshop:** [Timed agenda, progress checklist, catch-up paths, and Copilot prompts](https://skyeshanohan.github.io/workshopsite/workshop/)
- **Presenter desk:** [Run of show, checklist, timer, prompt bank, and troubleshooting](https://skyeshanohan.github.io/workshopsite/presenter/)
- **Interactive presentation:** [12-slide deck with keyboard navigation and speaker notes](https://skyeshanohan.github.io/workshopsite/slides/)
- **Portfolio designs:** [Editorial, Developer, and Professional previews](https://skyeshanohan.github.io/workshopsite/designs/)
- **Quick references:** [Git, GitHub, VS Code, Copilot, Actions, and Astro docs](https://skyeshanohan.github.io/workshopsite/resources/)

The Pages URL will become available after the first successful deployment. If it does not load yet, check the Actions tab and repository Pages settings.

## Local development

Requirements: Node.js 20.3+ (Node 22 is configured for CI), Git, and VS Code.

```bash
npm install
npm run dev
```

Validate before pushing:

```bash
npm run build
npm run preview
```

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds the static Astro site and publishes the `dist/` folder to GitHub Pages. It derives the repository base path from `GITHUB_REPOSITORY`, so it supports project Pages paths without hard-coded asset links.

Check **Settings → Pages → Build and deployment → Source: GitHub Actions**. The organization must permit Pages for this repository. Because this repository is currently private, verify whether your organization plan and policy allow the intended audience to access a publicly reachable Pages site; otherwise make the repository public if appropriate.

## Workshop progression

1. **Git & GitHub:** repository, branches, commits, issues, pull requests, review, and deployment.
2. **Testing and CI/CD:** automated quality checks, Actions, pull-request checks, and deployment.
3. **Secure development:** static analysis, dependency risk, secret detection, and security review.
4. **Spec-driven AI development:** requirement, specification, implementation, testing, security review, and deployment.

## Student privacy and AI use

The portfolio content is fictional example data. Students should publish only professional information they are comfortable making public. Never paste passwords, API tokens, private keys, or confidential information into prompts or source files. Copilot-generated changes require human review.
