// ============================================================================
 // PERSONALIZE THIS FILE
 // 1. Choose a layout theme (editorial, developer, or professional)
 // 2. Replace the sample text with your real details
 // 3. Add a photo (optional): put photo.jpg in the public/ folder, then set photo below
 // Only publish information you are comfortable making public.
 // ============================================================================

export const profile = {
  // Visual layout. Download a pre-set theme ZIP from the workshop site, or change this value.
  theme: 'editorial',

  // Your photo. Put the file in public/ (example: public/photo.jpg).
  // Use '/photo.jpg' to show it, or '' to show your initials instead.
  photo: '/photo.svg',

  name: 'Jordan Lee',
  role: 'MIS Student · Aspiring Technology Analyst',
  location: 'Wichita, Kansas',
  tagline: 'I turn questions into practical solutions.',
  about:
    'I am a Management Information Systems student interested in the intersection of business, people, and technology. I like learning by building useful things and explaining how they work.',
  email: 'jordan.lee@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',

  skills: ['SQL', 'Python', 'Git & GitHub', 'Data analysis', 'Requirements', 'Documentation'],

  education: {
    school: 'Wichita State University',
    degree: 'B.B.A. Management Information Systems',
    detail: 'Expected graduation · 2027',
  },

  // Add more objects to this list for more roles. Delete objects you do not need.
  experience: [
    {
      title: 'Technology Intern',
      organization: 'Example Company',
      date: 'Summer 2026',
      summary:
        'Documented a business process, clarified requirements, and communicated progress with technical and business teammates.',
    },
    {
      title: 'Student Project Lead',
      organization: 'MIS Course Project',
      date: '2025–2026',
      summary:
        'Organized team tasks, collected feedback, and checked the final work against agreed requirements.',
    },
  ],

  // Add more projects the same way. Class projects are fine if you describe your contribution honestly.
  projects: [
    {
      kind: 'WEB / UX',
      title: 'Campus Resource Finder',
      summary: 'A responsive concept that helps students discover useful campus services.',
      skills: ['HTML', 'CSS', 'User research'],
      link: 'https://github.com/',
    },
    {
      kind: 'DATA / AUTOMATION',
      title: 'Student Budget Analyzer',
      summary: 'A small tool concept for grouping sample spending and showing monthly patterns.',
      skills: ['Python', 'Data'],
      link: 'https://github.com/',
    },
    {
      kind: 'SECURITY / LEARNING',
      title: 'Secure Setup Checklist',
      summary: 'A short checklist for safer project setup and fewer common mistakes.',
      skills: ['Git', 'Documentation'],
      link: 'https://github.com/',
    },
  ],
};
