class LoginPage {
    elements = {
        employerLoginBtn: () => cy.get(':nth-child(6) > .btn')
    }

    loginEmployer = (username, password) => {
        this.elements.employerLoginBtn().click();
    }
}