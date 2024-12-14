// cypress/support/pageObjects/loginPage.js

class LoginPage {
    visit() {
      cy.visit('https://automationexercise.com/login'); // Adjust the URL if your login page is at a different location
    }
  
    fillSignUpForm(name, email, password) {
      // Fill in the sign-up form
      cy.get('input[name="name"]').type(name);
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click(); // Adjust the button selector if needed
    }
  }
  
  const loginPage = new LoginPage();
  export default loginPage;
  