const withPWA = require('next-pwa');
const runtimeCaching = require('./cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    precacheHomePage: false,
    additionalManifestEntries: [],
    runtimeCaching
  },
  pageExtensions: ['page.js'],
});
