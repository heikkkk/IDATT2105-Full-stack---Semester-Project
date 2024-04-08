
describe('log in to the site and change profile-features',() => {


  it('login to the application and go to user-profile', () => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.username-input').type('testUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.get('[data-cy="hamburger-profile-link"]').click()
    cy.url().should('include', '/profile')
    cy.get('.profile-username').should('contain.text', 'testUser')
  })
})