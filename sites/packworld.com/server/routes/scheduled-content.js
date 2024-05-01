const scheduledContent = require('@pmmi-media-group/package-global/templates/scheduled-content/default');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');

module.exports = (app) => {
  app.get('/products', newsletterState(), (_, res) => {
    res.marko(
      scheduledContent,
      {
        alias: 'products',
        includeContentTypes: ['Product'],
        title: 'Products',
      },
    );
  });
  app.get('/podcasts', newsletterState(), (_, res) => {
    res.marko(
      scheduledContent,
      {
        alias: 'podcasts',
        includeContentTypes: ['Podcast'],
        title: 'Podcasts',
      },
    );
  });
  app.get('/machinery-basics', newsletterState(), (_, res) => {
    res.marko(
      scheduledContent,
      {
        alias: 'machinery-basics',
        includeLabels: ['Machinery Basics'],
        title: 'Machinery Basics',
      },
    );
  });
  app.get('/supplier-news', newsletterState(), (_, res) => {
    res.marko(
      scheduledContent,
      {
        alias: 'supplier-news',
        includeLabels: ['Supplier Submitted'],
        title: 'Supplier News',
        withSection: true,
      },
    );
  });
};
