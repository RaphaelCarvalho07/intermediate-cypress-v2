import { faker } from '@faker-js/faker';

describe('Create Project', () => {
    beforeEach(() => {
        cy.login()
    })
    it('successfully', () => {
        const project = {
            name: `project-${faker.string.uuid()}`,
        }

        cy.gui_createProject(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains('[data-testid="project-name-content"]', project.name).should('be.visible')
    })
})