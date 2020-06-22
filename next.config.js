const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    precacheHomePage: false,
    additionalManifestEntries: [],
  },
  pageExtensions: ['page.js'],
});
