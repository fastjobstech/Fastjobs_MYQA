class LoginPage {
	elements = {
		// login elements
		// usernameField: () => cy.get("#loginform-username"),
		// passwordField: () => cy.get("#loginform-password"),
		// loginButton: () => cy.get("[name=login-button]"),
		usernameField: () => cy.get('input[name="LoginForm[username]"]'),
		passwordField: () => cy.get('input[name="LoginForm[password]"]'),
		// loginButton: () => cy.get(".button").contains("Login"),
		loginButton: () => cy.get("#login-form > .sc-fast-button-h > .button"),
		loginErrorMessage: () => cy.get(".help-block-error"),
		employerLoginBtn: () => cy.contains("Employer Login"),

		// admin login elements
		adminUsernameField: () => cy.get("#loginform-username"),
		adminPasswordField: () => cy.get("#loginform-password"),
		adminLoginBtn: () => cy.get(".btn"),
	};

	verifyErrorMessage = () => {
		this.elements.loginErrorMessage().should("be.visible");
	};

	loginEmployer = (username, password) => {
		// this.elements.employerLoginBtn().click();

		this.elements.usernameField().type(username);
		this.elements.passwordField().type(password);
		this.elements.loginButton().should("be.visible");
		this.elements.loginButton().click();

		cy.location("pathname").should("equal", "/p/my-activity/dashboard");
	};

	loginEmployerWithEmptyfields = () => {
		// this.elements.employerLoginBtn().click();

		this.elements.loginButton().click();
		this.verifyErrorMessage();
	};

	loginEmployerWithInvalidCreds = (username, password) => {
		// this.elements.employerLoginBtn().click();

		this.elements.usernameField().type(username);
		this.elements.passwordField().type(password);
		this.elements.loginButton().click();
		this.verifyErrorMessage();
	};

	adminLoginMY = (username, password) => {
		this.elements.adminUsernameField().type(username);
		this.elements.adminPasswordField().type(password);
		this.elements.adminLoginBtn().click();

		cy.url().should("contain", "/protectedindex");
	};
}

module.exports = new LoginPage();
