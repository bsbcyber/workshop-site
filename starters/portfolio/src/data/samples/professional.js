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
      summary: 'Script that collects security findings and writes a spreadsheet for weekly review.',
      skills: ['Python', 'Automation'],
      link: 'https://github.com/',
    },
    {
      title: 'Repo Health Dashboard',
      summary: 'Dashboard concept for repository checks, ownership, and open alerts.',
      skills: ['HTML', 'CSS', 'GitHub'],
      link: 'https://github.com/',
    },
    {
      title: 'Secure Setup Checklist',
      summary: 'Team checklist for safer project setup and handoff.',
      skills: ['Documentation', 'Secure coding'],
      link: 'https://github.com/',
    },
  ],
};
