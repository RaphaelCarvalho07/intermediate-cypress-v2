import { faker } from '@faker-js/faker';

describe('Create Issue', () => {
    const issue = {
        title: `issue-${faker.string.uuid()}`,
        description: faker.lorem.paragraph(),
        project: {
            name: `project-${faker.string.uuid()}`,
        }
    }
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.gui_createProject(issue.project)
    })
    it('successfully', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
    })
})