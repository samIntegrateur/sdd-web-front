require('dotenv').config({
  path: '.env'
});

const path = require('path');

// Get custom env vars from .env and make them accessible by the app
module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    TOKEN_NAME: process.env.TOKEN_NAME,
  }
};
