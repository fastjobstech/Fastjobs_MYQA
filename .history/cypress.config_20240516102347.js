const { defineConfig } = require("cypress");
const { queryTestDb } = require("./db");

module.exports = defineConfig({
	projectId: "2fvt3x",
	responseTimeout: 50000,
	pageLoadTimeout: 50000,
	defaultCommandTimeout: 50000,
	chromeWebSecurity: false,
	// video: true,
	reporter: "cypress-mochawesome-reporter",
	e2e: {
		setupNodeEvents(on, config) {
			on("task", {
				queryDb: (query) => {
					return queryTestDb(query, config);
				},
			}),
				require("cypress-mochawesome-reporter/plugin")(on);
		},
		baseUrl: "https://employer-test.fastjobs.my/",
		// experimentalSessionAndOrigin: true,
	},

	env: {
		employerSG: "https://employer-qa.fastjobs.sg",
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
