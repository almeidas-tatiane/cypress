const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j6r5fz',
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config)
      return config

    },
  },
});
