import axios from 'axios'
describe('log in to the site and change profile-features',() =>{

  beforeEach('set password and username to not default', async () => {

    let userId;
    try {
      const response = await axios.get('http://localhost:8080/get-id/testUser')
      userId = response.data
    } catch (error) {
      throw new Error('An error occurred while fetching id: ' + error.response.statusText);
    }

    try {
      await axios.post("http://localhost:8080/update-password/" + userId+ "/changePassword")

    }catch (error) {
      throw new Error('An error occured while changing password' + error.response.statusText)
    }

    try {
      await axios.get("/update-username/"+ userId + "/changeTestUser")
    } catch (error) {
      throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
    }

  })

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
    cy.get('[data-cy="update-password-button"]').click()
    cy.get('data-cy="new-password-input"').type('password123')
    cy.get('data-cy="confirm-password-input"').type('password123')
    cy.get('[data-cy="update-password-button-route"]').click()
    //write rest of the code when its functional
  })
})