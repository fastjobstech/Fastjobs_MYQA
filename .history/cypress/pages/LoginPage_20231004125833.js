class LoginPage {
    elements = {
        // login elements
        usernameField: () => cy.get("#loginform-username"),
        passwordFiled: () => cy.get("#loginform-password"),
        loginButton: () => cy.get("[name=login-button]")
    }

    loginEmployer = (username, passowrd) => {
        // steps to login
        cy.contains("Employer Login").click()
        
        this.elements.usernameField().type(username)
        this.elements.passwordFiled().type(passowrd)
        this.elements.loginButton().click()

        //Verify if page is currently at the Dashboard
        

    }

    verifyErrorMessage = () => {

    }
}

module.exports = new LoginPage();