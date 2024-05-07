class SGManageApplicantPage {
	element = {
		visitJobPost: () => cy.get("[data-action='visit-post']"),
		applyJobButton: () => cy.get(".col-sm-12 > #jobdetail-apply-job"),

		loginUsername: () => cy.get("#loginform-username"),
		loginPassword: () => cy.get("#loginform-password"),
		loginButton: () => cy.get("#btn-login"),

		applyMethodFastApply: () => cy.contains("FAST Apply"),
		sendApplicationButton: () => cy.get("#btn-mode-apply-send"),
		confirmMessage: () => cy.get(".confirm-job-app > span"),

		jobCardApplicantDetails: () => cy.get(":nth-child(2) > .job-stats-link"),
		applicantCardDetails: () => cy.get("#job-candidates > .panel > .panel-body"),
	};

	LoginAsJobseeker = (JobseekerLogin) => {
		this.element.visitJobPost().invoke("removeAttr", "target").click();
		this.element.applyJobButton().click();
		cy.wait(500);
		this.element.loginUsername().type(JobseekerLogin.username);
		this.element.loginPassword().type(JobseekerLogin.password);
		this.element.loginButton().click();
	};

	ApplyToTheJob = () => {
		this.element.applyJobButton().should("be.visible");
		this.element.applyJobButton().click();
		this.element.applyMethodFastApply().should("be.visible");
		this.element.applyMethodFastApply().click();
		this.element.sendApplicationButton().click();
		this.element
			.confirmMessage()
			.should(
				"contain",
				"Fast Apply (Application has been successfully sent to the employer)"
			);
	};

	GoToManageApplicants = () => {
		this.element.jobCardApplicantDetails().should("be.visible");
		this.element.jobCardApplicantDetails().click();
		this.element.applicantCardDetails().should("be.visible");
	};

	MoveApplicantToShortlisted = () => {
		cy.get("#w3 > .btn-move-folder").click();
	};
}

module.exports = new SGManageApplicantPage();
