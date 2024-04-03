const { defineConfig } = require("cypress");
const { queryTestDb } = require("./db");

module.exports = defineConfig({
  responseTimeout: 30000,
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  // video: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        queryDb: query => { return queryTestDb(query, config)}
      })
    },
    baseUrl: "https://employer-test.fastjobs.my/",
    experimentalSessionAndOrigin: true,
  },

  env: {
    employerSG: "https://employer-test.fastjobs.sg",
    de_username: "kimjayfastcoqa2@gmail.com",
    de_password: "Password1234",
    pl_username: "kimjayfastcoqa@gmail.com",
    pl_password: "Password1234",
    ra_username: "kimjaylut.a@fastco.asia",
    ra_password: "Password123",
    outlet_username: "kim.jayluta@fastco.asia",
    outlet_password: "Password123",
    SG_DE_Username: "kimjayfastcoqa@gmail.com",
    SG_DE_Password: "Password1234",
  },
});
