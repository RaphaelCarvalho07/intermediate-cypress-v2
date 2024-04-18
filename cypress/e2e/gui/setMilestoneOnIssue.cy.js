import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Set milestone on issue', options, () => {

    const issue = {
        title: `issue-${faker.string.uuid()}`,
        description: faker.lorem.paragraph(),
        project: {
            name: `project-${faker.string.uuid()}`,
        }
    }

    const milestone = {
        title: `milestone-${faker.string.uuid()}`,
        description: faker.lorem.sentence({ min: 3, max: 5 })
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createIssue(issue).then(res => {
            cy.api_createMilestone(res.body.project_id, milestone)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/-/issues/${res.body.iid}`)
        })
    })

    it('successfully', () => {
        cy.gui_setMilestoneOnIssue(milestone)
        
        cy.get('.block.milestone').should('contain', milestone.title)
    })
})