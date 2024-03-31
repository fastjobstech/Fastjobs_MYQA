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
  resposnseTimeout: 30000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
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
  script: {
    sg_test: "cypress run --spec 'cypress/e2e/SG/*spec.cy.js'",
  }
});
