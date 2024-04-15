import { faker } from '@faker-js/faker';

const options = { env: { snapshotOnly: false } }

describe('Create Issue', options, () => {
    const issue = {
        title: `issue-${faker.string.uuid()}`,
        description: faker.lorem.paragraph(),
        project: {
            name: `project-${faker.string.uuid()}`,
        }
    }
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.api_createProject(issue.project)
        cy.login()
    })
    it('successfully', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
    })
})