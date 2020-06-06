module.exports = {
  siteTitle: 'Caleb Njiiri | Web Developer',
  siteDescription:
    "I'm a web developer based in Nairobi, Kenya. I specialize in Backend Web Development, I love building exceptional web applications and I occassionally develop Slack and Discord Bots.",
  siteKeywords:
    'Caleb Njiiri, Caleb, Njiiri, kagunda10, software engineer, back-end engineer, web developer, python, freelance, freelancer, Nairobi',
  siteUrl: 'https://calebnjiiri.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Caleb Njiiri',
  location: 'Nairobi, Kenya',
  email: 'caleb.njiiri@gmail.com',
  github: 'https://github.com/kagunda10',
  twitterHandle: '@KagundaCaleb',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kagunda10',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/caleb-njiiri',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/kagunda10',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_3_pac',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/KagundaCaleb',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
