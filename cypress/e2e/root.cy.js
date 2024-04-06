describe('flow of the home-site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('validate login-link in hamburger-menu and goes to login-site', () => {
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })
  it('validate sign-up in hamburger-menu and goes to sign-up-site ', () =>{
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.contains('Sign up').click()
    cy.url().should('include', '/sign-up')
  })
  it('goes to the change language scene through the hamburger-menu ', () =>{
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.contains('Change Language').click()
    cy.url().should('include', '/change-language')

  })
  it('goes to the help scene through the hamburger-menu ', () =>{
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.contains('Help').click()
    cy.url().should('include', '/help')

  })
})