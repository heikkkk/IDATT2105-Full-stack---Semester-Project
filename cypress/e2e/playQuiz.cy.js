describe('flow of the play-quiz', () => {
  it('Get to the play-quizView', () => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.username-input').type('adminUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
    //click on the slide-button

    cy.get('[data-cy="handle-right-button"]').first().click()
    //How to access a array
    ///cy.get('[data-cy="quizzes-by-user")]')
    cy.url().should('include','/quiz-info')
    cy.contains('Play Game').click()
    cy.url().should('include', 'play-quiz')
    it('continue the flow of the program...')
  })
})