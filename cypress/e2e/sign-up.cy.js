/**describe('flow of sign-up-site', () => {
  it('go to sign-up site',() => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.contains('Sign up').click()
    cy.url().should('include', '/sign-up')
  })


  it('sign-up and login thereafter',() => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.contains('Sign up').click()
    cy.url().should('include', '/sign-up')
    cy.get('[data-cy="sign-up-username"]').type("testUser")
    cy.get('[data-cy="sign-up-email" ]').type("test@hotmail.com")
    cy.get('[data-cy="sign-up-password"]').type("testPassword")
    cy.get('[data-cy="sign-up-repeat-password"]').type("testPassword")
    cy.get('[data-cy="sign-up-button"]').click()
    cy.url().should('include','/discover')
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.contains('Profile').click()
    cy.url().should('include', '/userProfile')
    cy.contains('testUser').should('include', 'testUser')
  })
})**/