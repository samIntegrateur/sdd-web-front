require('dotenv').config({
  path: '.env'
});

const path = require('path');

// Get custom env vars from .env and make them accessible by the app
module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    AUTH_TOKEN_COOKIE_NAME: process.env.AUTH_TOKEN_COOKIE_NAME,
    AUTH_TOKEN_ACCESS_NAME: process.env.AUTH_TOKEN_ACCESS_NAME,
  }
};
