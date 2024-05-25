import "cypress-iframe";
import "cypress-file-upload";

Cypress.Commands.add("sendDeleteRequestDB", () => {
	cy.task("queryDb", `DELETE FROM Persons;`);
});

Cypress.Commands.add("insertDataRequest", () => {
	cy
		.task(
			"queryDb",
			`INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
        (001, "KIM JAY", "FastJobs Co.", "Kim"),
        (002, "Pam", "House No. 02", "Espoo"),
        (003, "Dwight", "House No. 03", "Lapland"),
        (004, "Michael", "House No. 04", "Vantaa");`
		)
		.then((result) => {
			expect(result.affectedRows).to.equal(4);
		});
});
