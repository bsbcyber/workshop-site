# MIS Club Workshop 1: Git and GitHub

This repository contains the student materials for a three-hour Git and GitHub workshop, along with a portfolio starter students can personalize and publish.

## Student materials

- **[Student walkthrough](https://skyeshanohan.github.io/workshopsite/student-guide/):** Step-by-step instructions for setting up the project, changing files, using Git, opening a pull request, and publishing the site.
- **[Workshop agenda](https://skyeshanohan.github.io/workshopsite/workshop/):** The three-hour schedule, checklist, Copilot prompts, and options for students who fall behind.
- **[Portfolio layouts](https://skyeshanohan.github.io/workshopsite/designs/):** Compare the Editorial, Developer, and Professional layouts in a large interactive preview.
- **[Quick reference](https://skyeshanohan.github.io/workshopsite/resources/):** Git and GitHub definitions, example commands, and troubleshooting steps.
- **[Slides](https://skyeshanohan.github.io/workshopsite/slides/):** The presentation deck, with diagrams and links to product documentation.

## Facilitator materials

- **[Presenter workspace](https://skyeshanohan.github.io/workshopsite/presenter/):** Session timer, agenda, setup checks, screenshots, Copilot prompts, and troubleshooting notes.

## Portfolio starter

The starter lives on the `portfolio-starter` branch. [Download the ZIP](https://github.com/skyeshanohan/workshopsite/archive/refs/heads/portfolio-starter.zip).

It uses Astro and includes three layouts. Students can update the content in `src/data/profile.js`, run the site locally, then commit and publish their changes.

## Run the workshop site locally

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. To create a production build, run:

```bash
npm run build
```

## Deployment

The main branch is published using GitHub Pages. A push to `main` runs the build and deployment workflow in GitHub Actions.

The workshop explains the same process from the student point of view: make a change, inspect the diff, commit it, push it, review the pull request, and check the published URL.
