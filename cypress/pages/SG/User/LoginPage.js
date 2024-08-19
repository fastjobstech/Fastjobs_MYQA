class LoginPage {
	elements = {
		// employer login elements
		employerLoginBtn: () => cy.get(":nth-child(6) > .btn"),
		usernameField: () => cy.get("#loginform-username"),
		passwordField: () => cy.get("#loginform-password"),
		loginButton: () => cy.get(".col-sm-6 > .btn"),

		// admin login elements
		adminUsernameField: () => cy.get("#loginform-username"),
		adminPasswordField: () => cy.get("#loginform-password"),
		adminLoginBtn: () => cy.get(".btn"),
	};

	loginEmployer = (username, password) => {
		this.elements.employerLoginBtn().click();

		this.elements.usernameField().type(username);
		this.elements.passwordField().type(password);
		cy.wait(1000);
		this.elements.loginButton().click();

		cy.url().should("contain", "/dashboard");
	};

	adminLoginSG = (username, password) => {
		this.elements.adminUsernameField().type(username);
		this.elements.adminPasswordField().type(password);
		this.elements.adminLoginBtn().click();

		cy.url().should("contain", "/protectedindex");
	};
}

module.exports = new LoginPage();
