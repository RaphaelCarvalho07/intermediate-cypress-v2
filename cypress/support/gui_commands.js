// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get('[data-testid="username-field"]').type(user)
      cy.get('[data-testid="password-field"]').type(password, { log: false })
      cy.get('[data-testid="sign-in-button"]').click()
    }
  
    login()
  })

  Cypress.Commands.add('logout', () => {
    cy.get('[data-testid="user-avatar-content"]').click()
    cy.contains('Sign out').click()
  })

  Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new#blank_project')
    cy.contains('h4', 'Create blank project').should('be.visible')

    cy.get('#project_name').type(project.name)
    cy.get('#blank-project-pane [data-testid="select-namespace-dropdown"]').click()
    cy.contains('[data-testid="listbox-item-gid://gitlab/Namespaces::UserNamespace/1"]', `${Cypress.env('user_name')}`).click()
    cy.contains('Create project').click()
  })
  
  