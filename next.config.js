require('dotenv').config({
  path: '.env'
});

const path = require('path');

// Get custom env vars from .env and make them accessible by the app
module.exports = {
  env: {
   TEST: process.env.TEST,
  },
};
