Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {  
    cy.get('#firstName').type('Gerfson')
    cy.get('#lastName').type('Alves')
    cy.get('#email').type('gerfson17@hotmail.com')
    cy.get('#open-text-area').type('Teste', {delay: 0})
    cy.contains('button', 'Enviar').click()
})