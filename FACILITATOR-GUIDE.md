# Facilitator Guide — Workshop 1: Git & GitHub

## Outcomes

Students should leave with a working portfolio repository (theme ZIP → personalized `profile.js`, optional photo), one small reviewed change, and a deployed GitHub Pages URL or a clearly identified blocker. Absolute beginners should be able to follow the online student walkthrough without prior Git experience.

## Three-hour agenda

| Time | Activity | Facilitation note |
|---|---|---|
| 0:00–0:10 | Show the outcome | Begin with the finished site. Explain what students will have at the end. |
| 0:10–0:25 | Setup | Time-box installation and authentication. Have a prepared example ready for students who get blocked. |
| 0:25–0:35 | Git vs GitHub | Use a simple local-working-copy / remote-repository diagram. |
| 0:35–0:50 | Select layout and create repository | Students pick Editorial / Developer / Professional in the Portfolio lab, download that ZIP, then create an empty <strong>public</strong> GitHub repo (needed for free Pages). |
| 0:50–1:05 | Run locally, then push | `npm install` / `npm run dev` first; then git init → push. |
| 1:05–1:25 | Personalize content | Guide students through `src/data/profile.js` (theme, experience, projects) and optional `public/photo.jpg`. Copilot is optional after the file is understood. |
| 1:25–1:35 | Preview and inspect | Catch obvious content and layout problems. |
| 1:35–1:45 | Break | Use this as an optional catch-up buffer. |
| 1:45–1:55 | Issues and acceptance criteria | Define a small task before implementing it. |
| 1:55–2:15 | Branch, commit, push, pull request | Students review the diff and compare it with the criteria. |
| 2:15–2:30 | GitHub Pages | Explain Actions logs and verify the deployment. |
| 2:30–2:45 | Validate live site | Check mobile layout and links from the published URL. |
| 2:45–2:55 | Catch-up / extension | Help students use checkpoints; offer accessibility/design extensions to early finishers. |
| 2:55–3:00 | Exit check | Capture the URL and ask for one Git concept and one AI-reviewed change. |

## Before class

- Open the [presentation](https://skyeshanohan.github.io/workshopsite/slides/) as the **primary facilitation tool** (ask-the-room prompts, screenshots, checkpoints). Keep the [student field guide](https://skyeshanohan.github.io/workshopsite/student-guide/) ready for individuals who need the written walkthrough.
- In the guide, test the step navigation and recovery buttons, copy-command controls, and the interactive Git-state workbench.
- Open the [presenter screenshot shelf](https://skyeshanohan.github.io/workshopsite/presenter/#screens) and confirm the official VS Code Source Control, GitHub issue, pull request diff, and Actions log screenshots load.
- Verify organization access, Pages settings and a full Actions deployment with a fresh student repository.
- Verify Copilot access in VS Code; prepare a non-AI route with the same small task.
- Prepare checkpoints at repository-ready, personalized-site, and ready-to-deploy states.
- Open every route in a new browser session and test the repo-specific base path and mobile layout.

## How to use the interactive material

- **Keep the deck on the projector.** Use the student walkthrough as the main place students follow along; it is designed for a second tab.
- **Do not demonstrate only from diagrams.** Use the official screenshots to orient students, then switch to a real GitHub repository or VS Code session to show the current interface.
- **Have students click through the Git-state workbench.** Ask them to explain why staging is not a push, a commit is not a deployment, and which command they should run next.
- **Use the recovery picker instead of resetting students.** A student with a working local site should jump forward. For a failed push or deploy, ask for the status/log evidence first.
- **Treat animations as orientation, not decoration.** They respect reduced-motion preferences; pause on the current step and let students complete the task before moving forward.

## Copilot prompts

**Explain first**

> Explain the project structure, the page entry point, and where content and styles are defined. Do not modify any files yet. Suggest the smallest safe file to edit for a new project card.

**Implement a requirement**

> Add a project card with a title, summary, relevant skills, and a working link. Keep existing conventions and responsive behavior. Do not add dependencies. Explain which files changed and how to verify the result.

**Review a diff**

> Compare the current diff with these acceptance criteria: [criteria]. Check links, mobile layout, accessibility, secrets, and unnecessary complexity. Report findings before modifying anything.

## Late-arrival protocol

1. Ask what currently works; don't restart setup by default.
2. Assign the nearest checkpoint.
3. Have the student create their own copy and personalize at least one item.
4. Rejoin at the next shared milestone.
5. Document skipped steps for self-paced follow-up.

## Troubleshooting

- **Authentication:** check browser GitHub login and VS Code account separately. For failed `git push`, use browser auth or a classic PAT with `repo` scope — never the GitHub account password.
- **Copilot missing:** confirm VS Code account, license activation, and extension status. Continue without AI; all content edits are documented in the walkthrough.
- **Deployment failure:** confirm Settings → Pages → Source is GitHub Actions, then re-run the failed workflow. Read the first actionable log line before changing files.
- **Wrong theme / missing photo:** confirm they downloaded the matching ZIP (or set `theme` in `profile.js`) and that `photo.jpg` is in `public/` with `photo: '/photo.jpg'`.
- **Merge conflict:** explain both versions before choosing; use a checkpoint if the timebox is at risk.
- **Broken live links:** compare the built URL with repository path and inspect relative asset URLs.

## Safety and accessibility

Warn students that GitHub Pages is public-facing when enabled. Encourage professional placeholder content if they don't wish to publish personal details. Never ask students to paste credentials or secrets into Copilot. Ask them to inspect AI-generated diffs and confirm keyboard usability, link purpose, color contrast, and mobile layout.
