class ManageApplicant {
	elements = {
		visitJobPost: () => cy.get("[data-action='visit-post']"),
	};

	LoginAsJobseeker = (JobseekerCredentials) => {
		this.elements.visitJobPost().invoke("removeAttr", "target").click();
		cy.get("#btnApplyNow").should("be.visible");
		cy.get("#btnApplyNow").click();
	};
}

module.exports = new ManageApplicant();
