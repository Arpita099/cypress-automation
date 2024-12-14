describe("API Tests", () => {
    const baseUrl = "https://automationexercise.com/api";
  
    context("Validate Brand List", () => {
      it("Should validate the brand list contains specified brands and excludes others", () => {
        cy.request("GET", `${baseUrl}/brandsList`).then((response) => {
          // Log the full response body for debugging
          cy.log("Response Body:", JSON.stringify(response.body));
  
          // Assert the response status is 200
          expect(response.status).to.eq(200, "Expected status code to be 200");
  
          // Assert that the response contains the 'brands' property
          expect(response.body).to.have.property("brands");
  
          // Extract the brand names from the response
          const brandNames = response.body.brands.map((brand) => brand.brand);
  
          // Verify included brands
          ["Polo", "Babyhug", "Biba"].forEach((brand) => {
            expect(brandNames).to.include(
              brand,
              `Expected brand: ${brand} to be in the list.`
            );
          });
  
          // Verify excluded brands
          ["Heineken", "BMW", "Razor"].forEach((brand) => {
            expect(brandNames).not.to.include(
              brand,
              `Expected brand: ${brand} to NOT be in the list.`
            );
          });
        });
      });
    });
  
    context("Verify User Login", () => {
      it("Should verify user login using valid credentials", () => {
        const credentials = {
          email: "arpitasarker08.cuet@gmail.com", // Update with valid email
          password: "Sarker345868", // Update with valid password
        };
  
        // Log credentials for debugging
        cy.log("Testing Login with Credentials:", JSON.stringify(credentials));
  
        cy.request({
          method: "POST",
          url: `${baseUrl}/verifyLogin`,
          form: true, // Send as form-data
          body: credentials,
          failOnStatusCode: false, // Prevent Cypress from failing on non-2xx responses
        }).then((response) => {
          // Log response body for debugging
          cy.log("Response Status:", response.status);
          cy.log("Response Body:", JSON.stringify(response.body));
  
          // Assert the response status is 200 (or appropriate status code)
          expect(response.status).to.eq(200, "Expected response status to be 200");
  
          // Check if the response contains the expected 'message'
          expect(response.body).to.have.property("message");
  
          // Assert the message is correct
          expect(response.body.message).to.eq(
            "User exists!",
            "Expected login success message"
          );
        });
      });
    });
  });
  