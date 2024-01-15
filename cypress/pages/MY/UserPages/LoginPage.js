class LoginPage {
    elements = {
        // login elements
        usernameField: () => cy.get("#loginform-username"),
        passwordField: () => cy.get("#loginform-password"),
        loginButton: () => cy.get("[name=login-button]"),
        loginErrorMessage: () => cy.get(".help-block-error"),
        employerLoginBtn: () => cy.contains("Employer Login")
    }

    verifyErrorMessage = () => {
        this.elements.loginErrorMessage().should('be.visible')
    }

    loginEmployer = (username, password) => {
        this.elements.employerLoginBtn().click()
        
        this.elements.usernameField().type(username)
        this.elements.passwordField().type(password)
        this.elements.loginButton().click()

        cy.location("pathname").should("equal", "/p/my-activity/dashboard")
    }

    loginEmployerWithEmptyfields = () => {
        this.elements.employerLoginBtn().click()
        
        this.elements.loginButton().click()
        this.verifyErrorMessage()
    }

    loginEmployerWithInvalidCreds = (username, password) => {
        this.elements.employerLoginBtn().click()
        
        this.elements.usernameField().type(username)
        this.elements.passwordField().type(password)
        this.elements.loginButton().click()
        this.verifyErrorMessage()
    }

    
}

module.exports = new LoginPage();