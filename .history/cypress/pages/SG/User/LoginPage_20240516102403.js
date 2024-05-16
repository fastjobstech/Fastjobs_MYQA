class LoginPage {
	elements = {
		employerLoginBtn: () => cy.get(":nth-child(6) > .btn"),
		usernameField: () => cy.get("#loginform-username"),
		passwordField: () => cy.get("#loginform-password"),
		loginButton: () => cy.get(".col-sm-6 > .btn"),
	};

	loginEmployer = (username, password) => {
		this.elements.employerLoginBtn().click();

		this.elements.usernameField().type(username);
		this.elements.passwordField().type(password);
		this.elements.loginButton().click();
	};
}

module.exports = new LoginPage();
