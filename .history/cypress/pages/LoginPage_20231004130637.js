class LoginPage {
    elements = {
        // login elements
        usernameField: () => cy.get("#loginform-username"),
        passwordFiled: () => cy.get("#loginform-password"),
        loginButton: () => cy.get("[name=login-button]"),
        loginErrorMessage: () => cy.get(".help-block-error")
    }

    verifyErrorMessage = () => {
        this.elements.loginErrorMessage().should('be.visible')
    }

    loginEmployer = (username, passowrd) => {
        // steps to login
        cy.contains("Employer Login").click()
        
        this.elements.usernameField().type(username)
        this.elements.passwordFiled().type(passowrd)
        this.elements.loginButton().click()
    }

    loginEmployerWithEmptyfields = () => {
        // steps to login
        cy.contains("Employer Login").click()
        
        this.elements.loginButton().click()
        this.verifyErrorMessage()
    }

    loginEmployerWithInvalidCreds = (username, passowrd) => {
        // steps to login
        cy.contains("Employer Login").click()
        
        this.elements.usernameField().type(username)
        this.elements.passwordFiled().type(passowrd)
        this.elements.loginButton().click()
        this.verifyErrorMessage()
    }

    
}

module.exports = new LoginPage();