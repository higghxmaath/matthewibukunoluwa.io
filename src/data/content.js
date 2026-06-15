import collassiaImage from '../assets/projects/collassia.png'
import myeventsImage from '../assets/projects/myevents.png'
import moomnitechImage from '../assets/projects/moomnitech.png'

export const site = {
  name: 'Matthew Ibukunoluwa',
  title: 'Full-Stack Web Developer',
  email: 'ayanmattex@gmail.com',
  phone: '+2348024948076',
  whatsapp:
    'https://wa.me/2348024948076?text=Hi%20Matthew%2C%20I%27d%20like%20to%20discuss%20a%20project.',
  website: 'https://matthewibukunoluwa-io.vercel.app',
  github: 'https://github.com/higghxmaath',
  formspree: 'https://formspree.io/f/mdawwray',
}

export const navLinks = [
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#contact', label: 'Contact' },
]

export const skills = {
  frontend: {
    label: 'Frontend',
    tint: 'blue',
    items: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  backend: {
    label: 'Backend',
    tint: 'orange',
    items: ['Node.js', 'Express', 'PHP', 'Laravel'],
  },
  database: {
    label: 'Database',
    tint: 'lime',
    items: ['MongoDB', 'SQL', 'MySQL'],
  },
  tools: {
    label: 'Tools',
    tint: 'neutral',
    items: ['Git', 'GitHub', 'Vite', 'REST APIs'],
  },
}

export const projects = [
  {
    name: 'Collassia',
    tagline: 'Project management web app for modern teams',
    description:
      'A modern project management interface that helps teams organize work into projects, boards, and tasks with a clean, focused UI.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://collassia.vercel.app',
    codeUrl: 'https://github.com/higghxmaath/collassia',
    featured: true,
    image: collassiaImage,
  },
  {
    name: 'Mo-Omnitech Hub',
    tagline: 'Governance & finance software for audit-ready teams',
    description:
      'A multi-product hub for governance, finance, and automation, featuring CertumPro GRC, BizBooks, Certifyr, and Lynq with board-ready dashboards.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://moomnitech-hub.vercel.app',
    codeUrl: null,
    featured: false,
    image: moomnitechImage,
  },
  {
    name: 'myEvents',
    tagline: 'Event discovery and management platform',
    description:
      'A web application for discovering events around you, as well as creating and managing your own events and community meetups.',
    tech: ['JavaScript', 'Node.js', 'REST API', 'MongoDB'],
    liveUrl: null,
    codeUrl: 'https://github.com/higghxmaath/myEvents',
    featured: false,
    image: myeventsImage,
  },
]

export const solutions = [
  {
    icon: '🌐',
    title: 'Web App Development',
    description:
      'Full-stack web applications built from scratch, responsive, production-ready, and designed for real users. From MVP to launch.',
  },
  {
    icon: '🔌',
    title: 'API Integration',
    description:
      'Clean REST APIs with authentication, third-party integrations, and well-documented endpoints. Built for scale and maintainability.',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description:
      'Audit and fix slow pages, bloated bundles, and database bottlenecks. Faster apps mean happier users and better conversions.',
  },
  {
    icon: '🛒',
    title: 'E-commerce Builds',
    description:
      'Online stores and checkout flows that convert. Product catalogs, payment integration, and admin dashboards that actually work.',
  },
  {
    icon: '🗄️',
    title: 'Database Architecture',
    description:
      'Schema design, query optimization, and data modeling for MongoDB and SQL databases. Solid foundations for growing products.',
  },
  {
    icon: '🎨',
    title: 'UI Engineering',
    description:
      'Pixel-perfect interfaces with Tailwind CSS and React. Component libraries, design systems, and animations that feel intentional.',
  },
]

export const marqueeItems = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Laravel',
  'PHP',
  'MongoDB',
  'MySQL',
  'Tailwind',
  'Git',
]

export const aboutPills = [
  'React',
  'Node.js',
  'Tailwind',
  'Laravel',
  'MongoDB',
  'Express',
]

export const skillIcons = {
  React: '⚛️',
  'Next.js': '▲',
  JavaScript: 'JS',
  HTML: '◇',
  CSS: '{}',
  Tailwind: '🌊',
  'Node.js': '🟢',
  Express: '⚡',
  PHP: '🐘',
  Laravel: '🔺',
  MongoDB: '🍃',
  SQL: '📊',
  MySQL: '🐬',
  Git: '📦',
  GitHub: '🐙',
  Vite: '⚡',
  'REST APIs': '🔗',
}
