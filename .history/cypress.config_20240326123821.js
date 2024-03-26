const { defineConfig } = require("cypress");
const { queryTestDb } = require("./db");

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  // video: false,
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'Cypress Inline Reporter',
  //   embeddedScreenshots: true,
  //   inlineAssets: true
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        queryDb: query => { return queryTestDb(query, config)}
      })
    },
    baseUrl: "https://employer-qa.fastjobs.my/",
    experimentalSessionAndOrigin: true
  },
  env: {
    de_username: "kimjayfastcoqa2@gmail.com",
    de_password: "Password1234",
    pl_username: "kimjayfastcoqa@gmail.com",
    pl_password: "Password1234",
    ra_username: "kimjaylut.a@fastco.asia",
    ra_password: "Password123",
    outlet_username: "kim.jayluta@fastco.asia",
    outlet_password: "Password123",
    employerSG: "https://employer-qa.fastjobs.sg",
    SG_DE_Username: "kimjayfastcoqa@gmail.com",
    SG_DE_Password: "Password1234",
  },
  chromeWebSecurity: false
});
