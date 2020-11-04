describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        // cy.get("h2").contains("No. Movies");
        cy.get("h2").contains("All Movies");
        cy.get(".badge").contains(20);
      });
    })
  })