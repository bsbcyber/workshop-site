// ============================================================================
// PERSONALIZE THIS FILE
// 1. Choose a layout: 'student' | 'emerging' | 'professional'
// 2. Replace the sample text with your real details
// 3. Optional photo: put photo.jpg in public/, then set photo: '/photo.jpg'
// Only publish information you are comfortable making public.
//
// Tip: pick the layout that matches what you have today
//   student     → classes, clubs, and class projects (no internship yet)
//   emerging    → internship / early role + a few projects
//   professional → fuller experience list and denser resume
// ============================================================================

export const profile = {
  theme: 'student',

  photo: '/photo.svg',
  resume: '',

  name: 'Jordan Lee',
  role: 'MIS & Cybersecurity Student',
  location: 'Wichita, Kansas',
  tagline: 'Learning security and systems by building small, useful projects.',
  about:
    'Undergraduate focused on management information systems and cybersecurity. Most of my experience so far is coursework, campus involvement, and personal projects. I like turning class assignments into things I can show and explain.',
  badge: 'Looking for internships',
  email: 'jordan.lee@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',

  skills: [
    'Python',
    'SQL',
    'Networking basics',
    'Linux',
    'Git & GitHub',
    'Technical writing',
  ],

  education: [
    {
      school: 'Wichita State University',
      degree: 'B.B.A. Management Information Systems',
      detail: 'Expected graduation · 2027',
    },
  ],

  // Student layout highlights these. Safe to leave [] on other themes.
  coursework: [
    {
      title: 'Secure Coding Practices',
      detail: 'Threats, input validation, and safer defaults in web apps.',
    },
    {
      title: 'Network Security',
      detail: 'Segmentation, monitoring basics, and lab attack/defense scenarios.',
    },
    {
      title: 'Systems Analysis & Design',
      detail: 'Requirements, process mapping, and stakeholder communication.',
    },
    {
      title: 'Database Management',
      detail: 'Relational modeling, SQL queries, and access control concepts.',
    },
  ],

  activities: [
    {
      title: 'Cyber Club Member',
      organization: 'Campus technology club',
      detail: 'Weekly labs, capture-the-flag practice, and peer study sessions.',
    },
    {
      title: 'Volunteer Help Desk',
      organization: 'Community nonprofit',
      detail: 'Helped staff with device setup, password resets, and basic security hygiene.',
    },
  ],

  // Empty is fine for the student layout — it will not leave a blank job section.
  experience: [],

  certifications: [],
  honors: [{ title: 'Dean’s List', detail: 'Selected terms' }],
  interests: ['Teaching others what I just learned', 'Home lab tinkering'],
  learning: ['Web app security labs', 'GitHub Actions basics'],

  projects: [
    {
      title: 'Campus Resource Finder',
      summary: 'Class project: a simple site concept that helps students find tutoring and advising services.',
      skills: ['HTML', 'CSS', 'User research'],
      link: 'https://github.com/',
    },
    {
      title: 'Home Lab Notes',
      summary: 'Personal notes and diagrams from standing up a small Linux lab at home.',
      skills: ['Linux', 'Networking', 'Documentation'],
      link: 'https://github.com/',
    },
    {
      title: 'Secure Setup Checklist',
      summary: 'A short checklist for safer project setup before a class demo or team handoff.',
      skills: ['Security basics', 'Git', 'Documentation'],
      link: 'https://github.com/',
    },
  ],
};
