describe('flow of the discovery-site', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.username-input').type('adminUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
  })

  it('Go to the user-profile', () => {
    cy.get('[data-cy="burger-menu-link"]').click()
    cy.get('[data-cy="hamburger-profile-link"]').click()
    cy.url().should('include', '/profile')
  })
  it('go to root (/) if Quizopia is pressed', ()=>{
    cy.get('[data-cy="logo-title-discover"]').click()
    cy.url().should('include', '/')
  })
})