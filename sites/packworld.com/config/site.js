const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');

module.exports = {
  leaders,
  navigation,
  nativeX,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'packworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld' },
    { provider: 'twitter', href: 'https://twitter.com/packagingworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-TK8WXJR',
    slotPrefix: 'pw',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  magazines: {
    description: '',
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'info-request@pmmimediagroup.com',
    replyTo: 'info-request@pmmimediagroup.com',
    sendFrom: 'Packaging World <noreply@baseplatform.io>',
    logo: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=45&auto=format,compress&q=70',
    bgColor: '#000',
  },
};
