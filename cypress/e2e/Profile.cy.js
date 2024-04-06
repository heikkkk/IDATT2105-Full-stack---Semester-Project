describe('log in to the site and change profile-features',() =>{
  it('login to the application', () => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.username-input').type('adminUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.get('[data-cy="hamburger-profile-link"]').click()
    cy.url().should('include', '/profile')
    cy.get('[data.cy="profile-image"]').should('not.match')
    cy.get('[]')

  })
})