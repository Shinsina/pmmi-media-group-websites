const configure = require('@pmmi-media-group/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 370,
  websiteBehaviorAttributeId: 199628,
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'MUNDO_NL_P1',
    default: 'MUNDO_P1',
  },
});
