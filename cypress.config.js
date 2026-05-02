const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
  testIsolation: false,
    baseUrl: 'https://stem-admin.qwizfun.com',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
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
