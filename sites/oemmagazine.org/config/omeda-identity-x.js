const configure = require('@pmmi-media-group/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 369,
  websiteBehaviorAttributeId: 199631,
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'OEM_NL_P1',
    default: 'OEM_P1',
  },
});
