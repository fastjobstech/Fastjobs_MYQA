const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        queryDb: query => { return queryTestDb(query, config)}
      })
    },
    baseUrl: "https://employer-test.fastjobs.my/",
    experimentalSessionAndOrigin: true
  },
  env: {
    de_username: "kimjayfastcoqa2@gmail.com",
    de_password: "Password1234"
  },
});
