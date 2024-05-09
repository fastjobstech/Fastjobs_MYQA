class ManageApplicant {
	element = {
		visitJobPost: () => cy.get("[data-action='visit-post']"),
		applyNowButton: () => cy.get(".col-sm-12 > #btnApplyNow"),

		loginUsername: () => cy.get("[name='IDToken1']"),
		loginPassword: () => cy.get("#password"),
		loginButotn: () => cy.get(".form-group > .btn"),

		locationSelection: () => cy.get(".control__indicator_option"),
		nextApplyButton: () => cy.get("#btnOutletNextDesktop"),

		applyMethod: () => cy.contains("FAST Apply"),
		sendApplicationButton: () =>
			cy.get(".container-apply-btn-back > .btn-primary"),

		successMessage: () => cy.get(".apply-method-desc"),
	};

	LoginAsJobseeker = (JobseekerCredentials) => {
		this.element.visitJobPost().invoke("removeAttr", "target").click();
		// cy.get("#btnApplyNow").should("be.visible");
		// cy.get("#btnApplyNow").click();

		this.element.applyNowButton().should("be.visible");
		this.element.applyNowButton().click();

		this.element.loginUsername().type(JobseekerCredentials.username);
		this.element.loginPassword().type(JobseekerCredentials.password);
		this.element.loginButotn().click();
	};

	ApplyJob = () => {
		this.element.applyNowButton().should("be.visible");
		this.element.applyNowButton().click();

		this.element.locationSelection().should("be.visible");
		this.element.locationSelection().click();
		this.element.nextApplyButton().click();

		this.element.applyMethod().should("be.visible");
		this.element.applyMethod().click();

		this.element.sendApplicationButton().click();

		this.element
			.successMessage()
			.should(
				"contain",
				"Fast Apply(Application has been successfully sent to the employer)"
			);
	};
}

module.exports = new ManageApplicant();
