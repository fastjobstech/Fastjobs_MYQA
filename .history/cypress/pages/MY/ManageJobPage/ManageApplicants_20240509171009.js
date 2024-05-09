class ManageApplicant {
	elements = {
		visitJobPost: () => cy.get("[data-action='visit-post']"),
	};

	LoginAsJobseeker = (JobseekerCredentials) => {
		this.elements.visitJobPost().invoke("removeAttr", "target").click();
		cy.get("#btnApplyNow").should("be.visible");
		cy.get("#btnApplyNow").click();

		cy.get("[name='IDToken1']").type(JobseekerCredentials.username);
		cy.get("#password").type(JobseekerCredentials.password);
		cy.get(".form-group > .btn").click();
	};

	ApplyJob = () => {
		cy.get(".col-sm-12 > #btnApplyNow").should("be.visible");
		cy.get(".col-sm-12 > #btnApplyNow").click();
	};
}

module.exports = new ManageApplicant();
