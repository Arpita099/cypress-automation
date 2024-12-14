class ContactPage {
    navigateToContactUs() {
      cy.get('a.contact-us').click();
    }
  
    fillContactForm(name, email, subject, filePath) {
      cy.get('[name="name"]').type(name);
      cy.get('[name="email"]').type(email);
      cy.get('[name="subject"]').type(subject);
      cy.get('[type="file"]').attachFile(filePath);
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default ContactPage;
  