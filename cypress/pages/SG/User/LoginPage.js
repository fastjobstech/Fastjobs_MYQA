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
		cy.wait(1000);
		this.elements.loginButton().click();

		cy.url().should("contain", "/dashboard");
	};
}

module.exports = new LoginPage();
