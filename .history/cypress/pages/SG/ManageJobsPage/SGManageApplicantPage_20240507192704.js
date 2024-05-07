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

		moveToShortlisted: () => cy.get("#w3 > .btn-move-folder"),
		shortlistedTab: () => cy.get(":nth-child(2) > .app-folder-link"),

		moveToRejected: () => cy.get("#w5 > .btn-move-folder"),
		rejectedTab: () => cy.get(":nth-child(5) > .app-folder-link"),

		moveToKIV: () => cy.get("#w3 > .btn-move-folder"),
		kivTab: () => cy.get(":nth-child(4) > .app-folder-link"),

		moveToHire: () => cy.get("#w4 > .btn-move-folder"),
		hireTab: () => cy.get(":nth-child(3) > .app-folder-link"),
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
	};

	MoveApplicantToShortlisted = () => {
		this.element.applicantCardDetails().should("be.visible");
		this.element.moveToShortlisted().click();
	};

	MoveApplicantToRejected = () => {
		this.element.shortlistedTab().should("be.visible");
		this.element.shortlistedTab().click();
		this.element.applicantCardDetails().should("be.visible");
		this.element.moveToRejected().click();
	};

	MoveApplicantToKIV = () => {
		this.element.rejectedTab().should("be.visible");
		this.element.rejectedTab().click();
		this.element.applicantCardDetails().should("be.visible");
		this.element.moveToKIV().click();
	};

	MoveApplicantToHire = () => {
		this.element.kivTab().should("be.visible");
		this.element.kivTab().click();
		this.element.applicantCardDetails().should("be.visible");

		this.element.moveToHire().click();
		this.element.hireTab().click();
		this.element.applicantCardDetails().should("be.visible");
	};

	// Function to check if Application is visible
	isApplicantIsreceived = () => {
		return this.element.applicantCardDetails
			.should("be.visible")
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			});
	};
}

module.exports = new SGManageApplicantPage();
