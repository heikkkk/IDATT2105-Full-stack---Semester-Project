describe('log in to site', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:5173')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })
  it('login to the discovery-site', () => {
    cy.get('.username-input').type('adminUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
  })

  it('Go to the registration-site', () => {
    cy.get('[data-cy="sign-up-button"]').click()
    cy.url().should('include', '/sign-up')
  })
  it('go to root (/) if Quizopia is pressed', ()=>{
    cy.get('[data-cy="logo-title-login"]').click()
    cy.url().should('include', '/')
  })
})