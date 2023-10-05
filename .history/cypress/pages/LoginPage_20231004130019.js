class LoginPage {
    elements = {
        // login elements
        usernameField: () => cy.get("#loginform-username"),
        passwordFiled: () => cy.get("#loginform-password"),
        loginButton: () => cy.get("[name=login-button]"),
        loginErrorMessage: () => cy.get(".help-block-error")
    }

    loginEmployer = (username, passowrd) => {
        // steps to login
        cy.contains("Employer Login").click()
        
        this.elements.usernameField().type(username)
        this.elements.passwordFiled().type(passowrd)
        this.elements.loginButton().click()
    }

    verifyErrorMessage = () => {
        this.elements.verifyErrorMessage().should('be.visible')
    }
}

module.exports = new LoginPage();