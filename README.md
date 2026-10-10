# MIS Club Secure Software Development Workshop Series

A browser-based teaching workspace for Workshop 1 — Git & GitHub — plus a clean Astro portfolio starter with three themes.

## Start here

- **Student field guide:** [Six-mission route, recovery choices, interactive Git-state workbench, real product screenshots, copyable commands, and Copilot prompts](https://skyeshanohan.github.io/workshopsite/student-guide/)
- **Student workshop agenda:** [Three-hour run of show linked directly to the relevant missions, with four proof points and catch-up paths](https://skyeshanohan.github.io/workshopsite/workshop/)
- **Presenter desk:** [Run of show, timer, presenter notes, official reference links, and troubleshooting](https://skyeshanohan.github.io/workshopsite/presenter/)
- **Visual presentation:** [Full-screen slide deck with Git diagrams and an in-deck resource drawer](https://skyeshanohan.github.io/workshopsite/slides/)
- **Portfolio designs:** [Compare the three actual portfolio pages in live, interactive previews](https://skyeshanohan.github.io/workshopsite/designs/)
- **Field reference:** [Interactive four-stage workflow, official UI screenshots, searchable vocabulary, and problem-specific recovery guidance](https://skyeshanohan.github.io/workshopsite/resources/)

## Portfolio starter

The clean student portfolio starter is maintained on the `portfolio-starter` branch. Download it directly from [this branch ZIP](https://github.com/skyeshanohan/workshopsite/archive/refs/heads/portfolio-starter.zip). The archive contains only the student site starter—not the presenter materials.

The starter is Astro-based, includes the three selectable themes, keeps personal content in `src/data/profile.js`, and includes a GitHub Actions workflow for GitHub Pages. The starter has a separate workflow check so its build can be validated without replacing the main workshop site.

## Local development of the workshop site

Requirements: Node.js 22, Git, and VS Code.

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

The main workflow at `.github/workflows/deploy.yml` builds the static Astro workshop site and publishes the `dist/` folder to GitHub Pages. The main site is published from GitHub Actions.

## Workshop progression

1. **Git & GitHub:** repository, branches, commits, issues, pull requests, review, and deployment.
2. **Testing and CI/CD:** automated quality checks, Actions, pull-request checks, and deployment.
3. **Secure development:** static analysis, dependency risk, secret detection, and security review.
4. **Spec-driven AI development:** requirement, specification, implementation, testing, security review, and deployment.

## Student-first design

The student field guide is organized as six missions rather than a long checklist. It includes a route map, a 'where are you now?' recovery selector, scroll-reveal motion that respects reduced-motion settings, a four-state Git workbench with changing terminal output and copyable next commands, real screenshots from official GitHub and VS Code documentation, copyable Git commands, and focused Copilot prompts. The field reference adds an interactive task-to-deploy flow, searchable/filterable vocabulary, and symptom-specific troubleshooting. Screenshot source links are placed beside the images so students can open the official instructions when needed. The facilitator desk includes the same real screen references, persistent prep checks, and teaching links.

## Student privacy and AI use

The portfolio content is fictional example data. Students should publish only professional information they are comfortable making public. Never paste passwords, API tokens, private keys, or confidential information into prompts or source files. Copilot-generated changes require human review.
