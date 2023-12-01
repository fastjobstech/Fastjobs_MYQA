const { defineConfig } = require("cypress");
const { queryTestDb } = require("./db");

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
    de_password: "Password1234",
    pl_username: "kimjayfastcoqa@gmail.com",
    pl_password: "Password1234",
    ra_username: "kimjaylut.a@fastco.asia",
    ra_password: "Password123"
  },
});
