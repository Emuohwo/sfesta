const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
  testIsolation: false,
    baseUrl: 'https://stem-admin.qwizfun.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD
    },
  },
});
