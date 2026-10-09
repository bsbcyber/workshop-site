# Facilitator Guide — Workshop 1: Git & GitHub

## Outcomes

Students should leave with a working portfolio repository, one small reviewed change, and a deployed GitHub Pages URL or a clearly identified blocker. The goal is experience with a repeatable workflow, not perfect styling.

## Three-hour run of show

| Time | Activity | Facilitation note |
|---|---|---|
| 0:00–0:10 | Show the outcome | Begin with the finished site. Explain what students will have at the end. |
| 0:10–0:25 | Setup | Time-box installation and authentication. Provide a checkpoint route for blocked students. |
| 0:25–0:35 | Git vs GitHub | Use a simple local-working-copy / remote-repository diagram. |
| 0:35–0:50 | Select layout and create repository | Students choose a visual style, then use a prepared template. |
| 0:50–1:05 | Open in VS Code | Find project files, browser preview, and Source Control. |
| 1:05–1:25 | Personalize with Copilot | Ask for a small change, inspect the diff, and preview it. |
| 1:25–1:35 | Preview and inspect | Catch obvious content and layout problems. |
| 1:35–1:45 | Break | Use this as an optional catch-up buffer. |
| 1:45–1:55 | Issues and acceptance criteria | Define a small task before implementing it. |
| 1:55–2:15 | Branch, commit, push, pull request | Students review the diff and compare it with the criteria. |
| 2:15–2:30 | GitHub Pages | Explain Actions logs and verify the deployment. |
| 2:30–2:45 | Validate live site | Check mobile layout and links from the published URL. |
| 2:45–2:55 | Catch-up / extension | Help students use checkpoints; offer accessibility/design extensions to early finishers. |
| 2:55–3:00 | Exit check | Capture the URL and ask for one Git concept and one AI-reviewed change. |

## Before class

- Test the starter with a fresh repository and account.
- Verify organization access, GitHub Pages policy, and the Actions workflow.
- Verify Copilot student licensing in VS Code; have a non-AI alternative ready.
- Prepare checkpoint repositories at repository-ready, personalized-site, and ready-to-deploy states.
- Test site navigation and deployment under the repository-specific base path.

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

- **Authentication:** check browser GitHub login and VS Code account separately.
- **Copilot missing:** confirm VS Code account, license activation, and extension status. Continue without AI if necessary.
- **Deployment failure:** read the latest Actions run and verify Pages source and base path.
- **Merge conflict:** explain both versions before choosing; use a checkpoint if the timebox is at risk.
- **Broken live links:** compare the built URL with repository path and inspect relative asset URLs.

## Safety and accessibility

Warn students that GitHub Pages is public-facing when enabled. Encourage professional placeholder content if they don't wish to publish personal details. Never ask students to paste credentials or secrets into Copilot. Ask them to inspect AI-generated diffs and confirm keyboard usability, link purpose, color contrast, and mobile layout.
