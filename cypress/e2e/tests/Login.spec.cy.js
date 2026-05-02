
describe('Login Page Tests', () => {
    const LoginPage = require('../../pageObjects/LoginPage');
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('should display error for empty email', () => {
        loginPage.enterPassword('validPassword123');
        loginPage.submit();
        // cy.get('.text-red-500').should('contain', 'Email is required');
        cy.get('.text-red-500').should('contain', 'Required');
    });

    it('should display error for empty password', () => {
        loginPage.enterEmail('test@example.com');
        loginPage.submit();
        // cy.get('.text-red-500').should('contain', 'Password is required');
        cy.get('.text-red-500').should('contain', 'Password is Required');
    });

    it('should display error for invalid email', () => {
        loginPage.enterEmail('invalidEmail');
        loginPage.enterPassword('validPassword123');
        loginPage.submit();
        cy.get('.text-red-500').should('contain', 'Invalid email address');
    });

    // it('should display error for incorrect password', () => {
    //     loginPage.enterEmail('test@example.com');
    //     loginPage.enterPassword('wrongPassword');
    //     loginPage.submit();
    //     cy.get('.text-red-500').should('contain', 'Incorrect password');
    // });

    it('should successfully login with valid credentials', () => {
        
        cy.login();
    });

    // it('should focus on email input when the page loads', () => {
    //     loginPage.emailInput.should('be.focused');
    // });

});