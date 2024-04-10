import { faker } from '@faker-js/faker';

describe('Create Project', () => {
    beforeEach(() => {
        cy.login()
    })
    it('successfully', () => {
        const project = {
            name: `project-${faker.string.uuid()}`,
            // description: faker.string.sentence()
        }

        cy.gui_createProject(project)

    })
})