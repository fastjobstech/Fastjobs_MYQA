class SGManageApplicantPage {
	ApplyJob = (JobseekerLogin) => {
		cy.get("[data-action='visit-post']").invoke("removeAttr", "target").click();
		cy.get("#btnApplyNow").click();
		cy.get("[name='IDToken1']").type(JobseekerLogin.userTwo);
		cy.get("#password").type(JobseekerLogin.passTwo);
		cy.get("#btn-login").click();
	};
}

module.exports = new SGManageApplicantPage();
