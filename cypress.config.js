const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "abcsdasd",
  experimentalWebKitSupport: true,
  video: true,
  headless: false,
  e2e: {
    baseUrl: "https://example.cypress.io",
    ciWebServerCommand: 'nx run my-project:serve-static',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
