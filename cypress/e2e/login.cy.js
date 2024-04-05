describe('log in to site', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:5173')
  })
  it('login to the discovery-site', () => {
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.username-input').type('adminUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
  })
})