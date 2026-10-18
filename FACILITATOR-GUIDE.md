# Facilitator Guide — Workshop 1: Git & GitHub

## Outcomes

Students should leave with a working portfolio repository (theme ZIP → personalized `profile.js`, optional photo), one small reviewed change, and a deployed GitHub Pages URL or a clearly identified blocker. Absolute beginners should be able to follow the online student walkthrough without prior Git experience.

## Three-hour agenda

Align the projector with the slide deck order (theme → open → Explorer → mental model → **first push** → inspect/commit → branch → issue → Copilot → PR → Pages → lab).

| Time | Activity | Facilitation note |
|---|---|---|
| 0:00–0:10 | Show the outcome | Cover + target slides. Explain what students will show at the end. |
| 0:10–0:25 | Theme ZIP + empty public repo | Theme-download slide. Unzip, create empty Public repo (no README). Time-box installs. |
| 0:25–0:40 | Open project + run locally | Open Folder → `npm install` / `npm run dev`. Hands up when localhost loads. |
| 0:40–0:50 | Find profile.js + mental model | Explorer diagram; Save ≠ Commit ≠ Push ≠ Deploy. |
| 0:50–1:05 | First push | `git init` → first commit → push. Cover browser auth / PAT when push fails. |
| 1:05–1:25 | Personalize content | Edit `src/data/profile.js` (experience, projects, optional photo). Copilot optional after the file is understood. |
| 1:25–1:35 | Inspect + commit cycle | `git status` / diff / stage one file. |
| 1:35–1:45 | Break | Catch-up buffer. |
| 1:45–2:15 | Issue, branch, PR | Acceptance criteria → `add-featured-project` → review Files changed. |
| 2:15–2:35 | Pages + Actions | Source = GitHub Actions; Re-run if first run failed; open live URL. |
| 2:35–2:55 | Lab / catch-up | Leave lab slide up. Fresh ZIP or your demo repo URL for late arrivals. |
| 2:55–3:00 | Exit check | Capture the URL and ask for one Git concept and one reviewed change. |

## Before class

- Open the [presentation](https://skyeshanohan.github.io/workshopsite/slides/) as the **primary facilitation tool** (ask-the-room prompts, screenshots, checkpoints). Keep the [student field guide](https://skyeshanohan.github.io/workshopsite/student-guide/) ready for individuals who need the written walkthrough.
- In the guide, test the step navigation and recovery buttons, copy-command controls, and the interactive Git-state workbench.
- Open the [presenter screenshot shelf](https://skyeshanohan.github.io/workshopsite/presenter/#screens) and confirm screenshots load (official docs CDN, with local SVG fallbacks if the CDN is blocked).
- Verify organization access, Pages settings and a full Actions deployment with a fresh student repository.
- Verify Copilot access in VS Code; prepare a non-AI route with the same small task.
- Prepare catch-up paths before class: (1) theme ZIP from the Portfolio lab, (2) a finished demo repository URL you own and can share, (3) Step 6 Pages + Re-run instructions. There are no separate “checkpoint repos” published with the site — you provide the demo URL.
- Open every route in a new browser session and test the repo-specific base path and mobile layout.

## How to use the interactive material

- **Projector = slides.** Teach from ask-the-room prompts, screenshots, and checkpoints. Leave each slide up until the room clears the checkpoint.
- **Student second tab = walkthrough.** Students use the online guide for copy-paste commands, auth recovery, and Re-run-after-Pages detail.
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
2. Assign the nearest catch-up path: fresh ZIP (local), your demo repo URL (review/PR), or Step 6 (deploy).
3. Have the student create their own repository and personalize at least one item when time allows.
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
