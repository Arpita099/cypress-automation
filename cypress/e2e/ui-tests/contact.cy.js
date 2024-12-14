describe("UI Tests - Contact Us Form", () => {
    it("Should submit Contact Us form successfully", () => {
      // Visit the contact page
      cy.visit('https://automationexercise.com/contact-us'); // Adjust the URL accordingly
  
      // Fill out the form
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('textarea[name="message"]').type('This is a test message.');
  
      // Attach a file (assuming you're testing file upload)
      const filePath = 'path/to/your/file.txt'; // Adjust path
      cy.get('input[type="file"]').attachFile(filePath);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Assert that the success message appears
      cy.contains('Thank you for your message').should('be.visible');
    });
  });
  