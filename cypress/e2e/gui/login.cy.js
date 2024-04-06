describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('[data-testid="user-avatar-content"]').should('be.visible')
  })
})
