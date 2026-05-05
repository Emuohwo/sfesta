class SponsorsPage {
    get openCreateSponsorButton() {
        // return cy.contains('button', 'Create Sponsors');
        return cy.contains('Create Sponsors');
    }

    get closeButton() {
        return cy.get('button[aria-label="Close"]'); 
    }

    get nameInput() {
        return cy.get('input[name="name"]');
    }

    get emailInput() {
        return cy.get('input[name="email"]');  
    }

    get phoneNumberInput() {
        return cy.get('input[name="phoneNumber"]');
    }

    get createSponsorButton() {
        // return cy.get('button[type="submit"]');
        return cy.get('form > .justify-end > .bg-primary')
    }

    get ticketCategory() {
        return cy.get('div[role="img"][aria-label="Select ticket"]');
    }

    get paymentType() {
        return cy.get('div[role="img"][aria-label="Select payment type"]');
    }

    get venue() {
        return cy.get('div[role="img"][aria-label="Select venue"]');
    }

    get attending() {
        return cy.get('div[role="img"][aria-label="Are you attending"]');
    }

    get nameError() {
        return cy.get('div:contains("Name is required")');
    }

    get emailError() {
        return cy.get('div:contains("Email is required")');
    }

    get phoneError() {
        return cy.get('div:contains("Phone Number is required")');
    }

    fillName(name) {
        this.nameInput.clear().type(name);
    }

    fillEmail(email) {
        this.emailInput.clear().type(email);
    }

    fillPhoneNumber(phoneNumber) {
        this.phoneNumberInput.clear().type(phoneNumber);
    }

    clickCloseButton() {
        this.closeButton.click();
    }

    clickCreateSponsorButton() {
        this.createSponsorButton.click();
    }

    clickOpenCreateSponsorButton() {
        this.openCreateSponsorButton.click();
    }
}

module.exports = SponsorsPage;