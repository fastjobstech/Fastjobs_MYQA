class companyProfilePage {
	elements = {
		navSetting: () => cy.get(".menu-setting > a"),
		companyProfileSettings: () => cy.get(":nth-child(6) > :nth-child(1) > a"),

		companyLogo: () =>
			cy.get(
				':nth-child(5) > div.input > .input-actions > [data-action="open"] > .button'
			),

		companyName: () => cy.get("[name='C9coy[DISPM]']"),
		companyDesc: () => cy.get("[name='C9coy[DSC]']"),

		floorNo: () => cy.get("[name='C9coy[FLRN]']"),
		unitNo: () => cy.get("[name='C9coy[UNTN]']"),
		streetName: () => cy.get("[name='C9coy[STREETM]']"),
		building: () => cy.get("[name='C9coy[BLDG]']"),
		state: () => cy.get("[name='C9coy[BLDG]']"),
		state: () => cy.get("[placeholder='Select State']"),
		city: () => cy.get("[placeholder='Select City']"),
		postalCode: () => cy.get('[name="C9coy[PSTC]"]'),

		updateSubmitButton: () => cy.get("#company-form-submit > .button"),
	};

	goToSetting = () => {
		this.elements.navSetting().click();
	};

	clickCompanyProfile = () => {
		this.elements.companyProfileSettings().click();
	};

	fillCompanyDetails = (newCompanyDetails) => {
		this.elements.companyName().should("exist");
		this.elements.companyName().eq(1).clear();
		this.elements.companyName().eq(1).type(newCompanyDetails.companyName);

		this.elements.companyDesc().should("exist");
		this.elements.companyDesc().eq(1).clear();
		this.elements.companyDesc().eq(1).type(newCompanyDetails.description);
	};

	fillCompanyAddress = (newCompanyAddress) => {
		this.elements.floorNo().should("exist");
		this.elements.floorNo().eq(1).clear();
		this.elements.floorNo().eq(1).type(newCompanyAddress.floorNo);

		this.elements.unitNo().should("exist");
		this.elements.unitNo().eq(1).clear();
		this.elements.unitNo().eq(1).type(newCompanyAddress.unitNo);

		this.elements.streetName().should("exist");
		this.elements.streetName().eq(1).clear();
		this.elements.streetName().eq(1).type(newCompanyAddress.streetName);

		this.elements.building().should("exist");
		this.elements.building().eq(1).clear();
		this.elements.building().eq(1).type(newCompanyAddress.building);

		this.elements.postalCode().should("exist");
		this.elements.postalCode().eq(1).clear();
		this.elements.postalCode().eq(1).type(newCompanyAddress.postalCode);
	};

	clickSaveChanges = () => {
		this.elements.updateSubmitButton().click();
	};

	verifySuccessNotifIsVisible = () => {
		cy.get(".iziToast").contains("Company profile updated.").should("be.visible");
	};
}

module.exports = new companyProfilePage();
