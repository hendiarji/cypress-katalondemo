// describe("test saucedemo", () => {
//   it("success login", () => {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type("standart_user");
//     cy.get('[data-test="password]').type("scret_sauce");
//     cy.get('[data-test="login-button"]').click();
//     // cy.get()
//   });
// });

// describe("test saucedemo", () => {
//   it("success login", () => {
//     cy.visit("https://www.saucedemo.com/");
//   });
// });

describe("test", () => {
  beforeEach(() => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
  });
  it("success login", () => {
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
  });
  it("failed login", () => {
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doee");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.get(".text-danger").should("contain.text", "Login failed! Please ensure the username and password are valid.");
  });
  it.only("Make Appointment", () => {
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.get(".checkbox-inline").click();
    cy.get(".col-sm-4 > :nth-child(2)").click();
    cy.get("#txt_comment").type("test test test");
  });
});

// describe("test", () => {
//   it("login", () => {
//     cy.visit("https://www.saucedemo.com/");
//   });
// });
