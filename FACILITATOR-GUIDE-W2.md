# Facilitator Guide — Workshop 2: Secure Development

## Outcomes

Students leave able to:

1. Clone the lab from the **Use this template** button on [bsbcyber/secure-dev-lab](https://github.com/bsbcyber/secure-dev-lab).
2. Read a GitHub Actions security run and separate a **finding** from a **tool/setup error**.
3. Remediate four controlled findings: Semgrep (SAST), OSV-Scanner (SCA), Gitleaks (secret), zizmor (workflow config).
4. Open a PR that re-runs checks.
5. Add a short case study on their Workshop 1 resume site linking the lab (do **not** deploy the lab).

Exit ticket: explain one finding + remediation out loud, and show a resume bullet or project card that links their lab repo.

## Canonical URLs

| Material | URL |
|---|---|
| Student walkthrough | https://bsbcyber.github.io/workshop-site/student-guide-2/ |
| Agenda | https://bsbcyber.github.io/workshop-site/workshop-2/ |
| Facilitator deck | https://bsbcyber.github.io/workshop-site/slides-2/ |
| PowerPoint | https://bsbcyber.github.io/workshop-site/downloads/workshop-2-presentation.pptx |
| Lab template | https://github.com/bsbcyber/secure-dev-lab |
| Catch-up green branch | https://github.com/bsbcyber/secure-dev-lab/tree/validation/fixed-baseline |

## Three-hour agenda

Projector = [slides-2](https://bsbcyber.github.io/workshop-site/slides-2/). Students keep the walkthrough open in a second tab.

| Time | Activity | Facilitation note |
|---|---|---|
| 0:00–0:15 | Outcome + safety | No deploy. Synthetic token only. Scanners ≠ proof of security. |
| 0:15–0:35 | Template clone → first Security Lab run | Hands up when Actions shows 5 jobs. Unit tests green; scanners red is expected. |
| 0:35–1:05 | Actions anatomy | Walk `.github/workflows/security-lab.yml`: trigger, job, runner, step, exit code. |
| 1:05–1:35 | SAST (Semgrep) | `eval` in `src/profile.js` → allowlist/parser → update tests → re-run. |
| 1:35–1:45 | Break | Catch-up; show fixed-baseline only as labeled demo. |
| 1:45–2:15 | SCA (OSV) | Read advisories live. Teach “check current fixed versions” (4.17.23 was not enough; use verified fixed version). |
| 2:15–2:35 | Secrets + workflow | Gitleaks clear fixture; zizmor pin SHA + `persist-credentials: false`. Drop if behind. |
| 2:35–2:50 | PR + resume case study | Branch → PR checks; start portfolio bullet. |
| 2:50–3:00 | Exit | One explained finding + lab link on resume site. |

**Timing fallback:** Semgrep + OSV required. Demo Gitleaks and zizmor if the room is slow.

## Before class

1. As org admin, confirm [bsbcyber/secure-dev-lab](https://github.com/bsbcyber/secure-dev-lab) is **public** and **Template**.
2. **Use this template** into a throwaway account; allow Actions; run **Security Lab**.
3. Confirm: Unit tests **success**; Semgrep, OSV, Gitleaks, zizmor **failure with findings** (not image-pull / CLI errors).
4. Record today’s OSV advisory IDs and the fixed lodash version from the run into your notes (advisory DBs drift).
5. Confirm Gitleaks output is redacted (no raw token in logs).
6. Open slides-2, student-guide-2, and this guide. Test mobile layout once.
7. Prepare catch-up: show `validation/fixed-baseline` Actions run as a **labeled** finished example — never merge it to student `main` before class.

## Cold-call prompts

- “Unit tests are green and Semgrep is red. Is the lab broken?”
- “What is the difference between a finding and a tool that failed to start?”
- “Why do we keep `lab-fixtures/insecure-workflow.yml` outside `.github/workflows/`?”
- “You deleted a secret from the latest file. Is the credential safe if it was real?”
- “Why isn’t ‘pick any version that looks newer’ good enough for SCA?”

## Catch-up paths

| Situation | Path |
|---|---|
| Still cloning / Actions disabled | Pair; walk template → Actions allow → re-run |
| Behind after first scan | Skip to Semgrep with facilitator; assign Gitleaks/zizmor as homework |
| Broken lockfile after SCA | Give the tested lodash version from today’s notes; avoid blind lock edits |
| Need a green example | Show `validation/fixed-baseline` run; label it “already fixed” |
| Finished early | Full PR + richer resume case study (tools, before/after, link) |

## Troubleshooting

| Symptom | Check |
|---|---|
| No Actions tab / workflows blocked | Settings → Actions → allow; refresh |
| All scanners fail instantly | Image pull / Docker / network — not a finding |
| Semgrep green on first run | Confirm `eval` still in `src/profile.js`; confirm `.semgrep.yml` present |
| OSV still red after bump | Manifest and lockfile disagree, or version still in advisory range |
| Gitleaks still red | Token string still in fixture; custom rule expects `WORKSHOP_FAKE_TOKEN_…` |
| zizmor still red | Unpinned `@v4` or missing `persist-credentials: false` on fixture |
| Student deploys lab | Stop; remind: training only; resume site stays separate |

## What not to do

- Do not execute `lab-fixtures/insecure-workflow.yml` as a real workflow.
- Do not paste real credentials or replace the synthetic token with a live key.
- Do not deploy the lab to Pages or any hosting.
- Do not treat a clean scan as “this software is secure.”
- Do not have students rewrite `security-lab.yml` scanner pins mid-class.

## Cross-links to Workshop 1

Students already practiced issue → branch → commit → PR → reading Actions logs. Reuse that muscle; the new skill is **triaging security tooling**, not learning Git from scratch.

## Day-of card in the lab

Keep [docs/INSTRUCTOR.md](https://github.com/bsbcyber/secure-dev-lab/blob/main/docs/INSTRUCTOR.md) as a short checklist. This file is the full playbook.
