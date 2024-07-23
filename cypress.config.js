const { defineConfig } = require("cypress");
const { queryTestDb } = require("./db");

module.exports = defineConfig({
	projectId: "2fvt3x",
	responseTimeout: 50000,
	pageLoadTimeout: 50000,
	defaultCommandTimeout: 50000,
	chromeWebSecurity: false,
	reporter: "cypress-mochawesome-reporter",
	reporterOptions: {
		reportDir: "cypress/reports",
		overwrite: false,
		html: false,
		json: true,
	},
	e2e: {
		setupNodeEvents(on, config) {
			require("cypress-mochawesome-reporter/plugin")(on);
			on("task", {
				queryDb: (query) => {
					return queryTestDb(query, config);
				},
			});
		},
		baseUrl: "https://employer-qa.fastjobs.my/",
	},

	env: {
		employerSG: "https://employer-qa.fastjobs.sg",
		adminMY: "https://admin-qa.fastjobs.my/",
		adminUsernameMY: "admin@fastjobs.sg",
		adminPassMY: "123qwerty88",
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
		// SG_DE_Username: "kimjay.luta@fastjobs.ph",
		// SG_DE_Password: "Password123",
	},
});
