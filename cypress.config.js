const { defineConfig } = require("cypress");
const { queryTestDb } = require("./db");

module.exports = defineConfig({
	projectId: "2fvt3x",
	responseTimeout: 30000,
	requestTimeout: 30000,
	pageLoadTimeout: 30000,
	defaultCommandTimeout: 10000,
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
		baseUrl: "https://employer-qa.fastjobs.my/site/login",
		viewportWidth: 1920,
		viewportHeight: 1080,
	},

	env: {
		employerSG: "https://employer-qa.fastjobs.sg/site/login",
		employerMainSG: "https://employer-qa.fastjobs.sg/",
		adminMY: "https://admin-qa.fastjobs.my/",
		adminSG: "https://admin-qa.fastjobs.sg/",
		adminUsernameMY: "admin@fastjobs.sg",
		adminPassMY: "123qwerty88",
		adminUserSG: "kimjayluta0721@gmail.com",
		adminPassSG: "Password123",
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
		manageApplicantUsername: "repear.leaf@gmail.com",
		manageApplicantPassword: "Password1234",
	},
});
