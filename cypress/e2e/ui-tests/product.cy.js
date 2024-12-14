import ProductPage from "../../support/pageObjects/productPage";

const productPage = new ProductPage();

describe("UI Tests - Product Category and Checkout", () => {
  it("Should select product, add to cart, and checkout", () => {
    productPage.selectCategory();
    productPage.viewAndAddProduct(2);
    productPage.checkout();
    cy.contains("Thank you for your order!").should("be.visible"); // Verify order success
  });
});
