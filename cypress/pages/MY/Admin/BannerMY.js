class BannerMY {
	elements = {
		myAccountBtn: () => cy.get(":nth-child(1) > .user-menu"),
		myAccountBannerListing: () =>
			cy.get(":nth-child(9) > ul > :nth-child(1) > a"),
		bannerListingTable: () => cy.get(".table"),

		// create button
		bannerCreateBtn: () => cy.get(".btn"),

		//uploadBanner
		uploadBanner: () => cy.get("#tmpbanner"),
	};

	formElements = {
		uploadBannerField: () => cy.get(".input-group > .form-control"),
		bannerDescription: () => cy.get("#description"),
		tagline: () => cy.get("#tagline"),
		buttonText: () => cy.get("#buttontext"),
		title: () => cy.get("#title"),
		postedFrom: () => cy.get("#postedfrom"),
		postedTo: () => cy.get("#postedto"),
		bannerRow: () => cy.get("#row"),
		jobfuncID: () => cy.get("#jobfuncids"),
		locID: () => cy.get("#locids"),
		bannerCoyID: () => cy.get("#coyid"),
		bannerJobID: () => cy.get("#jobid"),
		bannerUrl: () => cy.get("#url"),
		saveBannerBtn: () => cy.get(".col-sm-8 > .btn"),
	};

	navigateToBannerListing = () => {
		this.elements.myAccountBtn().click();

		this.elements.myAccountBannerListing().should("be.visible");
		this.elements.myAccountBannerListing().click();
		this.elements.bannerListingTable().should("be.visible");
	};

	navigateToCreateBanner = () => {
		this.elements.bannerCreateBtn().should("be.visible");
		this.elements.bannerCreateBtn().click();
		cy.url().should("contain", "/protectedcreate");
	};

	verifyBannerFormElement = () => {
		Object.keys(this.formElements).forEach((el) => {
			const form = this.formElements[el];
			form().should("be.visible");
		});
	};

	uploadBannerImage = () => {
		const fileName = "cypress/fixtures/banner.jpeg";
		this.elements.uploadBanner().should("exist");
		this.elements.uploadBanner().selectFile(fileName, { force: true }); // upload file
	};
}

module.exports = new BannerMY();
