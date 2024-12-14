describe('Login Test', () => {
    it('Should login with valid credentials', () => {
        cy.visit('https://automationexercise.com/login'); // Ensure the URL is correct

        cy.get('input[data-qa="login-email"]').type('arpitasarker08.cuet@gmail.com'); // Corrected quote
        cy.get('input[data-qa="login-password"]').type('Sarker345868'); // Corrected quote
        cy.get('button[data-qa="login-button"]').click();

        // Assert the user is logged in successfully
        cy.contains('Logged in as').should('be.visible');
    });
});
