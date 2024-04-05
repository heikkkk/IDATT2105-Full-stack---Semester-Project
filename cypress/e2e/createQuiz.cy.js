
describe('functional ',() =>{
  beforeEach(() =>{
    cy.visit('http://localhost:5173')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.username-input').type('adminUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
  })
  it('go to createQuiz and create a quiz (required fields)', () =>{
    cy.visit('http://localhost:5173/discover')
    cy.get('[data-cy="create-new-quiz-button"]').click()
    cy.url().should('include', '/create-quiz')
  })
})

