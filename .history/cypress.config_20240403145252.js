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
      }),

      // Deletes the video of pass test cases in CI Pipeline
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video)
          }
        }
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
