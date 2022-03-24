describe('MyGoodreads app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/email/i).click().type('kowalska@mygoodreads.com');
    cy.findByText(/password/i)
      .click()
      .type('Test123');
    cy.findByRole('button', { name: /sign in/i }).click();
  });

  it('Allows to add a new book and delete it', () => {
    cy.findByTestId('addNewBook').click();
    cy.findByPlaceholderText(/title/i).click().type('cypress title');
    cy.findByPlaceholderText(/author/i)
      .click()
      .type('cypress author');
    cy.findByPlaceholderText(/publisher/i)
      .click()
      .type('cypress publisher');
    cy.findByPlaceholderText(/year/i).click().type('2000');
    cy.findByText(/select a shelf/i).click();
    cy.findByTestId(/toRead/i).click();
    cy.findByText(/select genre/i).click();
    cy.findByTestId(/history/i).click();
    cy.findByRole('button', { name: /add book/i }).click({ force: true });
    cy.findByText(/book added successfully/i).should('exist');
    cy.findByTestId('closeButton').click();
    cy.get('nav')
      .findByText(/to read/i)
      .click();
    cy.findByText('cypress title').should('exist');
    cy.findByText('cypress author').should('exist');
    cy.findByText('cypress title').click();
    cy.findByRole('button', { name: /delete/i }).click();
    cy.findByRole('button', { name: /yes/i }).click();
    cy.findByText('cypress title').should('not.exist');
  });

  it('Allows to edit book', () => {
    cy.findByText(/list/i).should('exist');
    cy.findByTestId('booksList').find('a').first().click();
    cy.findByRole('button', { name: /edit/i }).click();
    cy.findByLabelText(/title/i).click().clear().type('cypress title');
    cy.findByLabelText(/author/i)
      .click()
      .clear()
      .type('cypress author');
    cy.findByLabelText(/publisher/i)
      .click()
      .clear()
      .type('cypress publisher');
    cy.findByLabelText(/year/i).click().clear().type('2000');
    cy.findByText(/genre/i).click();
    cy.findByTestId(/history/i).click();
    cy.findByRole('button', { name: /save changes/i }).click({ force: true });
    cy.findByText(/cypress title/i).should('exist');
    cy.findByText(/cypress author/i).should('exist');
    cy.findByText(/cypress publisher/i).should('exist');
    cy.findByText(/2000/i).should('exist');
    cy.findByTestId('shelfName').contains(/to read/i);
    cy.findByText(/history/i).should('exist');
    cy.get('nav')
      .findByText(/to read/i)
      .click();
    cy.findByText('cypress title').should('exist');
    cy.findByText('cypress author').should('exist');
  });
});
