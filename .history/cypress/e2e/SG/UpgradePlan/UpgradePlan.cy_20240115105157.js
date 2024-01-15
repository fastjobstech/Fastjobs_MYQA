import LoginPage from "../../../pages/SG/User/LoginPage";
import UpgradePlan from "../../../pages/SG/UpgradePlanPage/UpgradePlanPage";

describe("Upgrade Plan", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    });

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"));
        LoginPage.loginEmployer(Cypress.env('SG_DE_Username'), Cypress.env('SG_DE_Password'));
    });

    it("Verify Required fields in Billing information form", () => {
        UpgradePlan.ClickUpgradePlanLink();
        UpgradePlan.SelectPackage();
        UpgradePlan.SubmitBillingInformationEmpty();
    });

    it("Submits the Billing information form with valid inputs", () => {
        UpgradePlan.ClickUpgradePlanLink();
        UpgradePlan.SelectPackage();
        UpgradePlan.SubmitBillingInformation();
    });

    it("Verify Required fields in Payment form", () => {
        UpgradePlan.ClickUpgradePlanLink();
        UpgradePlan.SelectPackage();
        UpgradePlan.SubmitBillingInformation();
        UpgradePlan.SubmitPaymentDetailsEmpty();
    });

    it("Submits the Payment form with invalid card details", () => {
        UpgradePlan.ClickUpgradePlanLink();
        UpgradePlan.SelectPackage();
        UpgradePlan.SubmitBillingInformation();
        UpgradePlan.SubmitWithInvalidPaymentDetails();
    });

    it.only("Submits the Payment with valid details", () => {
        UpgradePlan.ClickUpgradePlanLink();
        UpgradePlan.SelectPackage();
        UpgradePlan.SubmitBillingInformation();
        UpgradePlan.SubmitPaymentWithValidDetails();
    });
});