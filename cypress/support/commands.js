Cypress.Commands.add('login', (login, password) => {
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#loginFrm_loginname').type(login)
    cy.get('#loginFrm_password').type(password)
    cy.get('#loginFrm > fieldset > .btn').click()
});