// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-mochawesome-reporter/register";

// Alternatively you can use CommonJS syntax:
Cypress.on("fail", (error, runnable) => {
	// Check if the error message contains "Timed out after waiting" (indicating a timeout issue)
	if (error.message.includes("Timed out after waiting")) {
		console.log("Page failed to load, stopping the test run.");

		// Optionally, you can log extra details or take custom actions here
		// Log additional error information for debugging
		console.error("Error details:", error.message);

		// Return `false` to prevent Cypress from failing the test and continuing with the next test.
		return false; // This will cause Cypress to stop running further tests for this specific error.
	}

	// If it's a different type of error, let it throw the error to let Cypress know about the failure.
	throw error;
});
