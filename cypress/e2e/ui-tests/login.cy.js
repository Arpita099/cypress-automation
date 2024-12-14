// cypress/e2e/ui-tests/login.cy.js

import loginPage from '../support/pageObjects/loginPage'; // Adjust the path if necessary

describe('UI Tests - Login and Signup', () => {
  it('Should complete signup process', () => {
    loginPage.visit(); // Navigate to the login page
    loginPage.fillSignUpForm(
      'Arpita Sarker', // Name for the user
      `arpita${Date.now()}@example.com`, // Dynamic email to avoid duplication
      'password123' // Password for the user
    );
    
    // Add additional assertions to verify successful signup
    // For example, checking for a success message after signup
    cy.contains('Thank you for signing up').should('be.visible'); 
  });
});
