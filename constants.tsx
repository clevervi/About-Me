
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio',
    description: 'Design and development of this portfolio website with a focus on performance and accessibility.',
    image: '/img/portfolio.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    link: '#'
  },
  {
    id: '2',
    title: 'Online Store',
    description: 'E-commerce platform with shopping cart and authentication system.',
    image: '/img/ecommerce.jpg',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: '#'
  },
  {
    id: '3',
    title: 'Data Analyzer',
    description: 'Application for processing and visualization of complex datasets.',
    image: '/img/ads-ov3.png',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 75, category: 'Main Technologies' },
  { name: 'HTML5 & CSS3', level: 70, category: 'Main Technologies' },
  { name: 'JavaScript', level: 20, category: 'Main Technologies' },
  { name: 'Java', level: 10, category: 'Other Technologies' },
  { name: 'Git', level: 25, category: 'Other Technologies' },
  { name: 'SQL', level: 50, category: 'Other Technologies' },
];

export const ABOUT = {
  description: "20-year-Old Full-stack developer based in Barranquilla, Colombia. Self-taught by nature and passionate about technology. My approach combines the creativity of design with the precision of code. Every project is an opportunity to learn, grow, and overcome challenges. When i'm not coding, you'll find me exploring new technologies, improving my English, or contributing to open source projects.",
  stats: [
    { value: '2+', label: 'Years of experience' },
    { value: '4+', label: 'Completed projects' },
    { value: '100%', label: 'Commitment' }
  ],
  softSkills: ['Troubleshooting', 'Teamwork', 'Fast learning', 'Effective communication']
};

export const TERMINAL_COMMANDS = {
  'help': 'Available: projects, clear, contact, bio, secret',
  'projects': 'Loading orbital project data... done.',
  'bio': 'System Architect. specialized in high-performance UIs and AI systems.',
  'contact': 'uplink: dev@nexus.io | discord: nexus_dev',
  'secret': 'UNLOCKED: 👾 You found the easter egg! Check the console for a gift.'
};

export const ICONS = {
  Terminal: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
  ),
  Pulse: () => (
    <div className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
    </div>
  )
};
