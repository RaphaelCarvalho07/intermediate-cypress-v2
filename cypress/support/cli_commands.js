

Cypress.Commands.add('cloneViaSSH', project => {
    const domain = Cypress.config('baseUrl').replace('http://', '')
    //git clone git@localhost:root/project-62a5cf8e-74f9-43eb-9f01-196437269f24.git
    cy.exec(`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
})
