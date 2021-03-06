import {
  faTwitter,
  faInstagram,
  // faCodepen,
  faLinkedin,
  faGithub,
  faDribbble,
  faYoutube
} from '@fortawesome/fontawesome-free-brands';

export const footer_socialNetworks = [
  {
    name: 'Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/nathjsimpson'
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/nathansimpson.design'
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/nathan-simpson-71512a75?trk'
  },
  {
    name: 'Github',
    icon: faGithub,
    link: 'https://github.com/nathsimpson'
  },
  // {
  //   name: 'Codepen',
  //   icon: faCodepen,
  //   link: 'https://codepen.io/nathansimpson/'
  // },
  {
    name: 'Dribbble',
    icon: faDribbble,
    link: 'https://dribbble.com/nathansimpson'
  },
  {
    name: 'YouTube',
    icon: faYoutube,
    link: 'https://www.youtube.com/channel/UCa__hNMzVWIQOHErctX0leg'
  }
];

export const footer_navItems = [
  {
    url: '/',
    label: 'Home'
  },
  {
    url: '/about',
    label: 'About'
  },
  {
    url: '/blog',
    label: 'Blog'
  },
  {
    url: '/design-system',
    label: 'Design System'
  }
];

export const development_skills = [
  'JavaScript',
  'TypeScript',
  'Design Systems',
  'React',
  'React Native',
  'NextJS',
  'Gatsby',
  'NodeJS',
  'Keystone',
  'Swift'
];

export const development_projects = [
  {
    name: 'Reckon Payroll App and Web',
    link: 'https://www.reckon.com/au/payroll-app/',
    team: true,
    desc:
      'Enables small businesses to conveniently do Payroll and STP reporting from an browser or mobile device.',
    skills: ['TypeScript', 'React', 'React Native', 'GraphQL']
  },
  {
    name: 'KeystoneJS',
    link: 'https://github.com/keystonejs/keystone-5/graphs/contributors',
    type: 'Contributor',
    openSource: true,
    team: true,
    desc: 'KeystoneJS is a scalable platform and CMS for Node.js applications.',
    skills: ['NodeJS', 'React']
  },
  {
    name: 'The Garage',
    link: 'https://thegarageapp.com',
    type: 'Owner',
    desc: 'The Garage is an social network for car lovers in Sydney Australia.',
    skills: ['React Native', 'Keystone']
  },
  {
    name: 'IsobelJS',
    openSource: true,
    link: 'https://isobeljs.com/',
    type: 'Owner',
    desc:
      'A beginner-friendly NodeJS framework for fetching data from your social profiles and other sources, to display in your own apps and websites.',
    skills: ['NodeJS']
  },
  {
    name: 'ITCLearning Website',
    link: '/itc-learning',
    desc:
      'A WordPress-based website for a previous employer; Featuring a custom theme and registrations for webinars and events.',
    skills: ['SCSS', 'WordPress', 'PHP']
  },
  {
    name: 'nathansimpson.design',
    openSource: true,
    link: 'https://github.com/nathsimpson/nathansimpson.design',
    type: 'Owner',
    desc:
      'This website is one of my favourite side-projects. All of the code is available on GitHub for your enjoyment.',
    skills: ['TypeScript', 'Gatsby', 'Design Systems']
  }
];
