const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "fastjobs.my"
  },
  env: {
    login_username: "kimjayfastcoqa2@gmail.com",
    login_password: "Password1234"
  }
});
