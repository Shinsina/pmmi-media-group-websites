module.exports = ({
  clientKey = 'client_pmmi',
  brandKey = 'pmmicd',
  appId = process.env.OMEDA_APP_ID,
  inputId = process.env.OMEDA_INPUT_ID,
  graphqlUri = 'https://graphql.omeda.parameter1.com/',
  rapidIdentification = { productId: 352 },
  olytics = {
    oid: '8f4e4496f62c4648a7378595464d6079',
  },
  promoCodeCookieName = 'omeda_promo_code',
  promoCodeDefault,
} = {}) => ({
  clientKey,
  brandKey,
  appId,
  inputId,
  graphqlUri,
  rapidIdentification,
  olytics,
  promoCodeCookieName,
  promoCodeDefault,
});
