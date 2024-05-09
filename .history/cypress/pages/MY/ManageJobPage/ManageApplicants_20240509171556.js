class ManageApplicant {
	elements = {
		visitJobPost: () => cy.get("[data-action='visit-post']"),
	};

	LoginAsJobseeker = (JobseekerCredentials) => {
		this.elements.visitJobPost().invoke("removeAttr", "target").click();
		// cy.get("#btnApplyNow").should("be.visible");
		// cy.get("#btnApplyNow").click();

		cy.get(".col-sm-12 > #btnApplyNow").should("be.visible");
		cy.get(".col-sm-12 > #btnApplyNow").click();

		cy.get("[name='IDToken1']").type(JobseekerCredentials.username);
		cy.get("#password").type(JobseekerCredentials.password);
		cy.get(".form-group > .btn").click();
	};

	ApplyJob = () => {
		cy.get(".col-sm-12 > #btnApplyNow").should("be.visible");
		cy.get(".col-sm-12 > #btnApplyNow").click();

		cy.get(".control__indicator_option").should("be.visible");
		cy.get(".control__indicator_option").click();
		cy.get("#btnOutletNextDesktop").click();

		cy.contains("FAST Apply").should("be.visible");
		cy.contains("FAST Apply").click();

		cy.get(".container-apply-btn-back > .btn-primary").click();
		cy
			.get(".apply-method-desc")
			.should(
				"contain",
				"Fast Apply(Application has been successfully sent to the employer)"
			);
	};
}

module.exports = new ManageApplicant();
