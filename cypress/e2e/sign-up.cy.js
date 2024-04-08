
describe('flow of sign-up-site', () => {
  it('go to sign-up site',() => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.contains('Sign up').click()
    cy.url().should('include', '/sign-up')
  })


  it('fail to register existing user',() => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.contains('Sign up').click()
    cy.url().should('include', '/sign-up')
    cy.get('.username-input').type("registerUser")
    cy.get('.email-input').type("register@hotmail.com")
    cy.get('.password-input').type("registerPassword")
    cy.get('.signup-button').click()
    cy.get('.error_msg').should('contain','Sorry, we could not register you at this time. Please try again later')
  })
})
