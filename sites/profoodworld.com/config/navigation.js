const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/processing-equipment', label: 'Processing Equipment' },
  { href: '/food-safety', label: 'Food Safety' },
];

const resources = [
  { href: '/page/pfw-event-calendar', label: 'Events' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/page/pfw-newsletter', label: 'Newsletters' },
  { href: '/page/magazine', label: 'Magazine' },
  { href: '/leaders', label: 'Leaders in Processing' },
  { href: '/videos', label: 'Videos' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/webinars', label: 'Webinars' },
  { href: 'https://www.opxleadershipnetwork.org', label: 'OpX Leadership Network', target: '_blank' },
  { href: '/page/awards-sema', label: 'Sustainability Awards' },
  { href: '/page/awards-mia', label: 'Manufacturing Awards' },
  { href: '/supplier-news', label: 'Supplier News' },
  { href: 'https://www.pmmi.org/workforce-development/education-partners', label: 'Education', target: '_blank' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/pfw/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/pfw-about-us', label: 'About' },
  { href: '/page/pfw-contact-us', label: 'Contact' },
];

const mobileMenu = {
  primary: [...topics],
  secondary: [
    subscribe,
    ...resources,
    ...utilities,
  ],
};

const desktopMenu = {
  leftCol: {
    items: [
      subscribe,
      ...utilities,
    ],
  },
  middleCol: {
    items: [
      ...topics,
    ],
  },
  rightCol: {
    items: [
      ...resources,
    ],
  },
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [
      subscribe,
      ...topics,
      { href: '/leaders', label: 'Leaders' },
      { href: '/downloads', label: 'Downloads' },
    ],
  },
  tertiary: {
    items: [],
  },
  user: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/pfw-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/pfw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [
      subscribe,
      { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
      { href: '/page/pfw-contact-us', label: 'Contact' },
    ],
  },
};
