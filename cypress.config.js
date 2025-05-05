const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "abcsdasd",
  experimentalWebKitSupport: true,
  video: true,
  headless: false,
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: "cypress/e2e/1-getting-started/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
