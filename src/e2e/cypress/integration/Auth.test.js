describe('MyGoodreads app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Renders unauthenticated app', () => {
    cy.findByText(/email/i).should('exist');
  });

  it('Allows user to authenticate', () => {
    cy.findByText(/email/i).should('exist');
    cy.findByText(/email/i).click().type('kowalska@mygoodreads.com');
    cy.findByText(/password/i)
      .click()
      .type('Test123');
    cy.findByRole('button', { name: /sign in/i }).should('exist');
    cy.findByRole('button', { name: /sign in/i }).click();
    cy.findByText(/hello/i).should('exist');
    cy.findByText(/kowalska/i).should('exist');
  });

  it('Displays information about invalid email format', () => {
    cy.findByText(/email/i).should('exist');
    cy.findByText(/email/i).click().type('annakowalska');
    cy.findByText(/password/i).click();
    cy.findByRole('button', { name: /sign in/i }).should('exist');
    cy.findByRole('button', { name: /sign in/i }).click();
    cy.findByText(/invalid/i).should('exist');
  });

  it('Displays information that email and password are required', () => {
    cy.findByText(/email/i).should('exist');
    cy.findByText(/password/i).click();
    cy.findByRole('button', { name: /sign in/i }).should('exist');
    cy.findByRole('button', { name: /sign in/i }).click();
    cy.findByText(/email is required/i).should('exist');
    cy.findByText(/password is required/i).should('exist');
  });
});
