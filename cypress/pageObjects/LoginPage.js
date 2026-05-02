class LoginPage {
    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get submitButton() {
        return cy.get('button[type="submit"]');
    }

    enterEmail(email) {
        this.emailInput.clear().type(email);
    }

    enterPassword(password) {
        this.passwordInput.clear().type(password);
    }

    submit() {
        this.submitButton.click();
    }
}

module.exports = LoginPage;
