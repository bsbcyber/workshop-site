// Sample profile for the Professional ZIP (fuller resume).
export const profile = {
  theme: 'professional',

  photo: '/photo.svg',
  resume: '',

  name: 'Jordan Lee',
  role: 'Technology Analyst',
  location: 'Wichita, Kansas',
  tagline: 'Application security support, risk reviews, and practical documentation for engineering teams.',
  about:
    'MIS graduate working at the intersection of security, process, and delivery. I help teams review design decisions, track remediation, and keep security expectations clear for developers and business partners.',
  badge: '',
  email: 'jordan.lee@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',

  skills: [
    'Application Security',
    'Risk assessments',
    'Secure SDLC',
    'Threat modeling basics',
    'SQL',
    'Python',
    'GitHub',
    'Technical writing',
  ],

  education: [
    {
      school: 'Wichita State University',
      degree: 'B.B.A. Management Information Systems',
      detail: '2023–2027',
    },
    {
      school: 'Cowley College',
      degree: 'A.S. Computer Science',
      detail: '2021–2023',
    },
  ],

  coursework: [],
  activities: [],

  experience: [
    {
      title: 'Technology Analyst',
      organization: 'Example Healthcare Partner',
      date: '2026–Present',
      summary:
        'Support security reviews, vendor questionnaires, and remediation tracking with product and engineering teams.',
      highlights: [
        'Run lightweight threat-modeling sessions for two product squads.',
        'Improved evidence folders so audit requests take less back-and-forth.',
      ],
    },
    {
      title: 'IT Risk Intern',
      organization: 'Regional manufacturing company',
      date: 'Summer 2025',
      summary:
        'Supported risk assessments, control evidence gathering, and security review meetings.',
      highlights: [
        'Drafted findings and remediation notes for two business applications.',
      ],
    },
    {
      title: 'Student Developer',
      organization: 'Campus project team',
      date: '2024–2025',
      summary: 'Built internal tools and documentation for a multi-team course project.',
      highlights: [],
    },
  ],

  certifications: [
    { name: 'CompTIA Security+', issuer: 'CompTIA', detail: '' },
  ],
  honors: [{ title: 'Dean’s List', detail: '' }],
  interests: ['Teaching and mentoring', 'Secure defaults for student projects'],
  learning: ['Cloud security fundamentals', 'Backstage basics'],

  projects: [
    {
      title: 'Findings Report Helper',
      slug: 'findings-report-helper',
      summary: 'Script that collects security findings and writes a spreadsheet for weekly review.',
      overview:
        'Automation that gathers security findings into a single spreadsheet for weekly product and risk review.',
      problem:
        'Analysts spent the morning before review meetings reassembling findings from tickets, chat, and mail.',
      approach: [
        'Standardized a lightweight input format teams could export.',
        'Automated severity grouping, stale-owner flags, and spreadsheet output.',
        'Added a short runbook so others could operate the tool without me.',
      ],
      outcome:
        'Review prep dropped from ad-hoc gathering to a repeatable export others trust.',
      skills: ['Python', 'Automation'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/findings-report-helper-1.svg',
          alt: 'Findings spreadsheet for weekly review',
          caption: 'Export used in Monday review with severity and owners.',
        },
      ],
    },
    {
      title: 'Repo Health Dashboard',
      slug: 'repo-health-dashboard',
      summary: 'Dashboard concept for repository checks, ownership, and open alerts.',
      overview:
        'Concept dashboard for repository health: open alerts, missing owners, and failing checks in one place.',
      problem:
        'Security partners lacked a shared picture of which apps were noisy and who owned remediation.',
      approach: [
        'Interviewed reviewers about the questions they ask in intake.',
        'Designed KPI cards and a repository status table.',
        'Validated the layout with engineering leads before investing in live data.',
      ],
      outcome:
        'Gave stakeholders a shared visual language for ownership and alert load.',
      skills: ['HTML', 'CSS', 'GitHub'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/repo-health-dashboard-1.svg',
          alt: 'Repository health dashboard concept',
          caption: 'Concept UI for alerts, ownership gaps, and failing checks.',
        },
      ],
    },
    {
      title: 'Secure Setup Checklist',
      slug: 'secure-setup-checklist',
      summary: 'Team checklist for safer project setup and handoff.',
      overview:
        'Team checklist covering secrets handling, scans, branch protection, and handoff ownership.',
      problem:
        'New services reached demo without clear owners for credentials or dependency alerts.',
      approach: [
        'Codified expectations from security reviews into a short checklist.',
        'Paired each item with “what good looks like” so squads could self-serve.',
      ],
      outcome:
        'Fewer repeat findings on first security review for teams that adopted the list.',
      skills: ['Documentation', 'Secure coding'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/secure-setup-checklist-1.svg',
          alt: 'Secure setup checklist',
          caption: 'Checklist shared with product squads before handoff.',
        },
      ],
    },
  ],
};
