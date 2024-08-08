describe('template spec', () => {
  let password = 'Tsira111';
  let login = 'Tsira1';
  it('Edit Account Details Test', () => {
    const newUserName = 'New';
    const newLastName = 'Otarashvili';
    const email = 'tsikuna1@gmail.com';
    const telephone = '+995597036091';
    const fax = 0;
    cy.visit('https://automationteststore.com/')
    cy.login(login, password);
    cy.get('.nav-dash > :nth-child(1) > a').click()

    cy.get('#AccountFrm_firstname').clear().type(newUserName)
    cy.get('#AccountFrm_lastname').clear().type(newLastName)
    cy.get('#AccountFrm_email').clear().type(email)
    cy.get('#AccountFrm_telephone').clear().type(telephone)
    cy.get('#AccountFrm_fax').clear().type(fax);
    cy.get('.col-md-12 > .btn-orange').click()

    cy.get('.nav-dash > :nth-child(1) > a').click()
    cy.get('#AccountFrm_firstname').should('have.value', newUserName)
    cy.get('#AccountFrm_lastname').should('have.value', newLastName)
    cy.get('#AccountFrm_email').should('have.value', email)
    cy.get('#AccountFrm_telephone').should('have.value', telephone)
    cy.get('#AccountFrm_fax').should('have.value', fax);
  })

  it('Address Change Test', () => {
    const firstName = 'Tsira';
    const lastName = 'Otarashvili';
    const company = 'None';
    const address1 = 'Georgia';
    const address2 = "Telavi";
    const city = 'Tbilisi';
    const region = 'Tbilisi';
    const zipCode = 9999;
    const country = 'Georgia';
    cy.visit('https://automationteststore.com/')
    cy.login(login, password);
    cy.get(':nth-child(1) > .dash-tile > .dash-tile-header > .dash-tile-options > .btn > .fa').click()
    cy.get('tr > .pull-right > .btn').click()

    cy.get('#AddressFrm_firstname').clear().type(firstName)
    cy.get('#AddressFrm_lastname').clear().type(lastName)
    cy.get('#AddressFrm_company').clear().type(company)
    cy.get('#AddressFrm_address_1').clear().type(address1)
    cy.get('#AddressFrm_address_2').clear().type(address2)
    cy.get('#AddressFrm_city').clear().type(city)
    cy.get('#AddressFrm_zone_id').select(region)
    cy.get('#AddressFrm_postcode').clear().type(zipCode)
    cy.get('#AddressFrm_country_id').select(country)
    cy.get('#AddressFrm_default1').check()
    cy.get('.col-md-12 > .btn-orange').click()

    cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_firstname').should('have.value', firstName)
    cy.get('#AddressFrm_lastname').should('have.value', lastName)
    cy.get('#AddressFrm_company').should('have.value', company)
    cy.get('#AddressFrm_address_1').should('have.value', address1)
    cy.get('#AddressFrm_address_2').should('have.value', address2)
    cy.get('#AddressFrm_city').should('have.value', city)
    cy.get('#AddressFrm_zone_id option:selected').should('have.text', region)
    cy.get('#AddressFrm_postcode').should('have.value', zipCode)
    cy.get('#AddressFrm_country_id option:selected').should('have.text',country)
    cy.get('#AddressFrm_default1').should('be.checked')
  })

  it('Change Password Test', () => {
    const newPassword = 'Tsira111';
    cy.visit('https://automationteststore.com/')
    cy.login(login, password);
    cy.get('.nav-dash > :nth-child(2) > a').click()

    cy.get('#PasswordFrm_current_password').type(password)
    cy.get('#PasswordFrm_password').type(newPassword)
    cy.get('#PasswordFrm_confirm').type(newPassword)
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('.nav-dash > :nth-child(9) > a').click()
    
    cy.visit('https://automationteststore.com/')
    cy.login(login, newPassword);
    cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('contain', 'Welcome back')
  })
})

