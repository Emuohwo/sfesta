describe('Sponsor Tests', () => {
    const SponsorsPage = require('../../pageObjects/Sponsors');
    const sponsorsPage = new SponsorsPage();

    beforeEach(() => {
        cy.login();
        cy.visit('/admin/sponsor');
    });

    it('Verify that the modal opens when the user clicks the close button.', () => {
        
        cy.log('Testing modal open and close functionality');
        sponsorsPage.clickOpenCreateSponsorButton();
        sponsorsPage.clickCloseButton();
        cy.get('.ant-modal-content').should('be.visible');
    });

    // it('Check that the form displays correctly with all fields visible and labeled appropriately.', () => {
    //     cy.get('.ant-modal-title').should('contain', 'Create Sponsor');
    //     sponsorsPage.nameInput.should('be.visible');
    //     sponsorsPage.emailInput.should('be.visible');
    //     sponsorsPage.phoneNumberInput.should('be.visible');
    // });

    // it('Ensure that the "Create Sponsors" button is enabled when all required fields are filled out correctly.', () => {
    //     sponsorsPage.fillName('John Doe');
    //     sponsorsPage.fillEmail('john.doe@example.com');
    //     sponsorsPage.fillPhoneNumber('1234567890');
    //     sponsorsPage.createSponsorButton.should('be.enabled');
    // });

    // it('Confirm that the user can enter valid data into the Name, Email, and Phone Number fields without any errors.', () => {
    //     sponsorsPage.fillName('John Doe');
    //     sponsorsPage.fillEmail('john.doe@example.com');
    //     sponsorsPage.fillPhoneNumber('1234567890');
    //     sponsorsPage.createSponsorButton.should('not.be.disabled');
    // });

    // it('Validate that the ticket categories and age groups are selectable and that the correct counts are displayed as users increase or decrease the number of tickets.', () => {
    //     // Test ticket category selection and counting
    //     sponsorsPage.ticketCategory.click();
    //     cy.get('.some-selector-for-ticket-options').first().click(); // Adjust selector
    //     cy.get('.ticket-count-display').should('contain', '1'); // Adjust selector

    //     // Increase ticket count
    //     cy.get('.increase-ticket-button').click(); // Adjust selector
    //     cy.get('.ticket-count-display').should('contain', '2'); // Adjust selector
    // });

    // it('Test that the modal can be closed by clicking the close button and that it does not submit the form in the process.', () => {
    //     sponsorsPage.clickCloseButton();
    //     cy.get('.ant-modal-content').should('not.exist');
    // });

    // it('Attempt to submit the form with empty required fields and verify that appropriate error messages are displayed for each field.', () => {
    //     sponsorsPage.clickCreateSponsorButton();
    //     sponsorsPage.nameError.should('be.visible');
    //     sponsorsPage.emailError.should('be.visible');
    //     sponsorsPage.phoneError.should('be.visible');
    // });

    // it('Enter invalid email formats and check that an error message prompts the user to correct it.', () => {
    //     sponsorsPage.fillEmail('invalid-email');
    //     sponsorsPage.clickCreateSponsorButton();
    //     sponsorsPage.emailError.should('be.visible');
    // });

    // it('Input a phone number that contains letters or special characters and ensure that an error message appears.', () => {
    //     sponsorsPage.fillPhoneNumber('123ABC');
    //     sponsorsPage.clickCreateSponsorButton();
    //     sponsorsPage.phoneError.should('be.visible');
    // });

    // it('Try to submit the form without selecting any ticket categories or payment types to confirm that the system prevents submission and prompts the user to make selections.', () => {
    //     sponsorsPage.fillName('John Doe');
    //     sponsorsPage.fillEmail('john.doe@example.com');
    //     sponsorsPage.fillPhoneNumber('1234567890');
    //     sponsorsPage.clickCreateSponsorButton();
    //     cy.contains('Please select a ticket category').should('be.visible'); // Adjust selector
    // });

    // it('Test the functionality of the age group buttons and attempt to decrease the count below zero, ensuring it does not allow negative ticket counts.', () => {
    //     // Assuming there are buttons to increase/decrease counts
    //     cy.get('.age-group-button').first().click(); // Adjust selector
    //     cy.get('.decrease-button').click(); // Adjust selector
    //     cy.get('.ticket-count-display').should('contain', '0'); // Adjust selector
    // });

    // it('Simulate a user who fills out the form quickly and attempts to submit it before the modal fully loads to check for any race conditions or errors.', () => {
    //     sponsorsPage.fillName('Quick User');
    //     sponsorsPage.fillEmail('quick.user@example.com');
    //     sponsorsPage.fillPhoneNumber('1234567890');
    //     sponsorsPage.clickCreateSponsorButton();
    //     cy.get('.ant-modal-content').should('exist');
    // });

    // it('Test the responsiveness of the modal by resizing the browser window and ensuring that all elements remain properly aligned and functional.', () => {
    //     cy.viewport(1280, 720);
    //     cy.get('.ant-modal-content').should('be.visible');
    //     cy.viewport(768, 480);
    //     cy.get('.ant-modal-content').should('be.visible');
    // });

    // it('Verify that the modal retains the user\'s input data if they attempt to close it and reopen it without refreshing the page.', () => {
    //     sponsorsPage.fillName('Retain User');
    //     sponsorsPage.fillEmail('retain.user@example.com');
    //     sponsorsPage.fillPhoneNumber('1234567890');
    //     sponsorsPage.clickCloseButton();
    //     sponsorsPage.clickCloseButton(); // Reopen modal
    //     sponsorsPage.nameInput.should('have.value', 'Retain User');
    //     sponsorsPage.emailInput.should('have.value', 'retain.user@example.com');
    //     sponsorsPage.phoneNumberInput.should('have.value', '1234567890');
    // });

    // it('Explore the behavior of the modal when the user uses keyboard navigation to fill out the form, ensuring that tabbing through fields works as expected.', () => {
    //     sponsorsPage.nameInput.focus().tab();
    //     sponsorsPage.emailInput.should('be.focused');
    //     sponsorsPage.emailInput.tab();
    //     sponsorsPage.phoneNumberInput.should('be.focused');
    // });

    
});