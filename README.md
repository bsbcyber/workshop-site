# MIS Club Secure Software Development Workshop Series

A browser-based teaching workspace for Workshop 1 — Git & GitHub — plus a clean Astro portfolio starter with three themes.

## Start here

- **Student walkthroughs:** [Step-by-step guide, visual walkthrough illustrations, copyable Git commands, copyable Copilot prompts, and progress tracking](https://skyeshanohan.github.io/workshopsite/student-guide/)
- **Student workshop agenda:** [Timed agenda, completion checklist, catch-up paths, and exercises](https://skyeshanohan.github.io/workshopsite/workshop/)
- **Presenter desk:** [Run of show, timer, presenter notes, official reference links, and troubleshooting](https://skyeshanohan.github.io/workshopsite/presenter/)
- **Visual presentation:** [Full-screen slide deck with Git diagrams and an in-deck resource drawer](https://skyeshanohan.github.io/workshopsite/slides/)
- **Portfolio designs:** [Editorial, Developer, and Professional previews](https://skyeshanohan.github.io/workshopsite/designs/)
- **Student vocabulary:** [Custom plain-language glossary and workflow map](https://skyeshanohan.github.io/workshopsite/resources/)

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

The Student Walkthroughs page is built for use during class and at home. It uses short numbered tasks, plain-language definitions, custom interface illustrations, copyable Git commands, and copyable Copilot prompts. Official product documentation links are collected on the Presenter Desk, so students can stay inside the purpose-built workshop flow.

## Student privacy and AI use

The portfolio content is fictional example data. Students should publish only professional information they are comfortable making public. Never paste passwords, API tokens, private keys, or confidential information into prompts or source files. Copilot-generated changes require human review.
