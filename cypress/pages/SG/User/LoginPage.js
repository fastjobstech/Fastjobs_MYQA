class LoginPage {
	elements = {
		// employer login elements
		employerLoginBtn: () => cy.get(":nth-child(6) > .btn"),
		// usernameField: () => cy.get("#loginform-username"),
		// passwordField: () => cy.get("#loginform-password"),

		usernameField: () => cy.get('input[name="IDToken1"]'),
		passwordField: () => cy.get('input[name="IDToken2"]'),
		loginButton: () => cy.get("#login-form > .sc-fast-button-h > .button"),

		// admin login elements
		adminUsernameField: () => cy.get("#loginform-username"),
		adminPasswordField: () => cy.get("#loginform-password"),
		adminLoginBtn: () => cy.get(".btn"),
	};

	loginEmployer = (username, password) => {
		// this.elements.employerLoginBtn().click();

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

		cy.url().should("contain", "/site/otp");

		cy.visit("https://admin-qa.fastjobs.sg/p/site/showotp");
		cy.url().should("contain", "/showotp");

		cy
			.get(".otp-code")
			.invoke("text")
			.then((otp) => {
				// Log the OTP code
				cy.log(`OTP Code: ${otp}`);

				// Goes back to OTP verification
				cy.visit("https://admin-qa.fastjobs.sg/p/site/otp");
				cy.url().should("contain", "/site/otp");

				// Enter the OTP
				cy.get("#otp_code").type(otp);
			});

		cy.get(".btn").contains("Verify").click();
		cy.url().should("contain", "/index");
	};
}

module.exports = new LoginPage();
