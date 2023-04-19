describe('Pruebas de Login', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
  })


  it('un usuario valido puede hacer login corectamente', () => {
    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('You logged into a secure area!')

  })

  it('password vacio', () => {
   
    cy.get('#username').type('tomsmith')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your password is invalid!')

  })

  
  it('usuario y password vacio', () => {
  
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')

  
})

})