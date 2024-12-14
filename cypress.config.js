const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yduuc5',
  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners if needed
    },
    baseUrl: "https://automationexercise.com",
    supportFile: "cypress/support/commands.js",
  },
});