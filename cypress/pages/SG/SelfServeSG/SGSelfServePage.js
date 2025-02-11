class SignUpPage {
	elements = {
		// HomeScreeb elements
        employerRegisterBtn: () => cy.get('body > header > div > div > nav > ul.nav-actions > li:nth-child(1) > fast-button > a',{timeout:10000}),

		// step1 SignUp elements
		fullNameTxtBx: () => cy.get('input#signupform-fullname',{timeout:10000}),
        emailTxtBx: () => cy.get('input#signupform-email',{timeout:10000}),
        phNoTxtBx: () => cy.get('input#signupform-mobileno'),
        passwordTxtBx: () => cy.get('input#password-input'),
        confirmPasswordTxtBx: () => cy.get('input#confirm-password-input'),
        nextBtn: () => cy.get('[name="next-button"]'),
        
	};

	loginEmployer = (username, password) => {
		// this.elements.employerLoginBtn().click();

		
	};

	
}	
module.exports = new SignUpPage();
