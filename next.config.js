require('dotenv').config({
  path: '.env'
});

const path = require('path');

// Get custom env vars from .env and make them accessible by the app
module.exports = {
  env: {
   TEST: process.env.TEST,
  },

  webpack: (config, options) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config


    const { dir, defaultLoaders } = options;
    console.log('dir', dir);

    const svgDir = path.join(__dirname, 'public', 'svg');

    config.module.rules.push({
      test: /\.svg$/,
      include: [svgDir],
      use: [
        {
          loader: '@svgr/webpack'
        }
      ]
    });

    return config;
  },
};
