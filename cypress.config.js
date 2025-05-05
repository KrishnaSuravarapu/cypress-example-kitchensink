const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "abcsdasd",
  experimentalWebKitSupport: true,
  video: true,
  headless: false,
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
