// Sample profile for the Emerging ZIP (internship + projects).
export const profile = {
  theme: 'emerging',

  photo: '/photo.svg',
  resume: '',

  name: 'Jordan Lee',
  role: 'IT Risk Intern · Aspiring AppSec Engineer',
  location: 'Wichita, Kansas',
  tagline: 'Internship experience plus security projects I can walk through end to end.',
  about:
    'Early-career student with an IT risk internship, hands-on class and personal projects, and a growing interest in application security. Comfortable explaining risk to non-security teammates and shipping small tools that remove busywork.',
  badge: 'Open to AppSec internships',
  email: 'jordan.lee@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',

  skills: [
    'Risk assessments',
    'Security reviews',
    'Python',
    'SQL',
    'GitHub',
    'Secure SDLC basics',
    'Technical writing',
  ],

  education: [
    {
      school: 'Wichita State University',
      degree: 'B.B.A. Management Information Systems',
      detail: 'Expected graduation · 2027',
    },
  ],

  coursework: [],
  activities: [],

  experience: [
    {
      title: 'IT Risk Intern',
      organization: 'Regional manufacturing company',
      date: 'Summer 2026',
      summary:
        'Supported risk assessments, control evidence gathering, and security review meetings with IT and operations partners.',
      highlights: [
        'Drafted findings and remediation notes for two business applications.',
        'Built a simple tracker so the team could see open risks by owner.',
      ],
    },
    {
      title: 'Student Project Lead',
      organization: 'MIS Course Project',
      date: '2025–2026',
      summary:
        'Organized team tasks, collected feedback, and checked the final work against agreed requirements.',
      highlights: [],
    },
  ],

  certifications: [
    { name: 'CompTIA Security+ (example)', issuer: 'CompTIA', detail: '' },
  ],
  honors: [],
  interests: ['Application security', 'Developer enablement'],
  learning: ['SAST triage', 'Threat modeling worksheets'],

  projects: [
    {
      title: 'Findings Report Helper',
      slug: 'findings-report-helper',
      summary: 'Small script that collects sample security findings and writes a spreadsheet teammates can review.',
      overview:
        'A Python helper that turns scattered finding notes into one spreadsheet for Monday risk review.',
      problem:
        'Weekly reviews meant copy-pasting findings from chat threads and tickets into a shared sheet by hand.',
      approach: [
        'Defined a simple CSV/JSON input shape the team could export from existing notes.',
        'Wrote a script that groups by severity, flags missing owners, and writes .xlsx.',
        'Documented the one-command run path in the README for interns.',
      ],
      outcome:
        'Cut prep time before reviews and made ownership gaps visible before the meeting started.',
      skills: ['Python', 'Spreadsheets', 'Automation'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/findings-report-helper-1.svg',
          alt: 'Spreadsheet export of security findings',
          caption: 'Weekly export grouped by severity with owner status.',
        },
      ],
    },
    {
      title: 'Repo Health Dashboard',
      slug: 'repo-health-dashboard',
      summary: 'Concept dashboard for repository checks, ownership, and open alerts.',
      overview:
        'A UI concept for seeing which repos lack owners, have failing checks, or carry open security alerts.',
      problem:
        'Security and platform partners could not tell which student or squad owned a noisy repository.',
      approach: [
        'Mapped the questions reviewers ask in intake meetings.',
        'Designed cards for alert volume, missing owners, and failing checks.',
        'Prototyped the layout in HTML/CSS for stakeholder feedback.',
      ],
      outcome:
        'Clearer conversation starter for ownership and alert triage; useful portfolio walkthrough.',
      skills: ['HTML', 'CSS', 'GitHub'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/repo-health-dashboard-1.svg',
          alt: 'Dashboard with alert and ownership metrics',
          caption: 'Concept view for alerts, ownership gaps, and failing checks.',
        },
      ],
    },
    {
      title: 'Secure Setup Checklist',
      slug: 'secure-setup-checklist',
      summary: 'Reusable checklist carried from class into internship onboarding.',
      overview:
        'The same secure-setup checklist from class, tightened after using it during internship onboarding.',
      problem:
        'New repos still shipped without branch protection or a named owner for secrets.',
      approach: [
        'Kept the student checklist, then added evidence notes managers asked for.',
        'Aligned wording with how the risk team talks about control owners.',
      ],
      outcome:
        'Became a handout I could share with other interns without rewriting from scratch.',
      skills: ['Documentation', 'Risk'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/secure-setup-checklist-1.svg',
          alt: 'Secure setup checklist document',
          caption: 'Checklist used before demos and internship handoffs.',
        },
      ],
    },
    {
      title: 'Campus Resource Finder',
      slug: 'campus-resource-finder',
      summary: 'Earlier class project kept as a portfolio piece with a clearer contribution write-up.',
      overview:
        'Earlier class project retained as a portfolio piece, with a clearer write-up of research and UI decisions.',
      problem:
        'Students struggled to find tutoring and advising details during the first weeks of term.',
      approach: [
        'Ran light user interviews, then designed search-first service cards.',
        'Shipped a static prototype and refined copy after peer testing.',
      ],
      outcome:
        'Still the clearest example I have of turning feedback into a simple interface.',
      skills: ['HTML', 'CSS', 'User research'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/campus-resource-finder-1.svg',
          alt: 'Campus resource finder search screen',
          caption: 'Search-first home view from the class prototype.',
        },
        {
          src: '/projects/campus-resource-finder-2.svg',
          alt: 'Service detail card',
          caption: 'Service detail with hours and next actions.',
        },
      ],
    },
  ],
};
