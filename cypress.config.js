const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://skilld.ninja",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
