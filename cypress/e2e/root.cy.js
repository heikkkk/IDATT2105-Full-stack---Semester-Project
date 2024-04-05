describe('template spec', () => {
  it('validate login-link in hamburger-menu and goes to login-site', () => {
    cy.get('[data-cy="hamburger-login-link"]').click()
    cy.url().should('include', '/login')
  })
  it('validate profile-link in hamburger and goes to user ', () =>{
    cy.get('[data-cy]')

  })
})