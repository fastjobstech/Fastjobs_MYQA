class SGManageApplicantPage {
	LoginAsJobseeker = (JobseekerLogin) => {
		cy.get("[data-action='visit-post']").invoke("removeAttr", "target").click();
		cy.get(".col-sm-12 > #jobdetail-apply-job").should("be.visible");
		cy.get(".col-sm-12 > #jobdetail-apply-job").click();
		cy.get("#loginform-username").type(JobseekerLogin.userTwo);
		cy.get("#loginform-password").type(JobseekerLogin.passTwo);
		cy.get("#btn-login").click();
	};
}

module.exports = new SGManageApplicantPage();
