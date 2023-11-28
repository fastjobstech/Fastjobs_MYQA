Cypress.Commands.add('sendDeleteRequestDB', () => {
    cy.task('queryDb', `DELETE FROM Persons;`)
})