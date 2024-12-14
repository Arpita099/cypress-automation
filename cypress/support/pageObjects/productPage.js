class ProductPage {
    selectCategory() {
      cy.get('[data-category="Men"]').click();
      cy.get('[data-product-type="Jeans"]').click();
    }
  
    viewAndAddProduct(quantity) {
      cy.get('.product-view').first().click();
      cy.get('input.quantity').clear().type(quantity);
      cy.get('button.add-to-cart').click();
    }
  
    checkout() {
      cy.get('a.cart').click();
      cy.get('button.checkout').click();
      cy.get('input.card-details').type('4111111111111111');
      cy.get('button.confirm-order').click();
    }
  }
  
  export default ProductPage;
  