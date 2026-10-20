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
      summary: 'Small script that collects sample security findings and writes a spreadsheet teammates can review.',
      skills: ['Python', 'Spreadsheets', 'Automation'],
      link: 'https://github.com/',
    },
    {
      title: 'Repo Health Dashboard',
      summary: 'Concept dashboard for repository checks, ownership, and open alerts.',
      skills: ['HTML', 'CSS', 'GitHub'],
      link: 'https://github.com/',
    },
    {
      title: 'Secure Setup Checklist',
      summary: 'Reusable checklist carried from class into internship onboarding.',
      skills: ['Documentation', 'Risk'],
      link: 'https://github.com/',
    },
    {
      title: 'Campus Resource Finder',
      summary: 'Earlier class project kept as a portfolio piece with a clearer contribution write-up.',
      skills: ['HTML', 'CSS', 'User research'],
      link: 'https://github.com/',
    },
  ],
};
