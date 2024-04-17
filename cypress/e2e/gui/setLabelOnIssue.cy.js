import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Set label on issue', options, () => {

    const issue = {
        title: `issue-${faker.string.uuid()}`,
        description: faker.lorem.paragraph(),
        project: {
            name: `project-${faker.string.uuid()}`,
        }
    }

    const label = {
        name: `lorem-${faker.lorem.word()}`,
        color: "#ffaabb",
        description: faker.lorem.sentence({ min: 3, max: 5 })
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createIssue(issue).then(res => {
            cy.api_createLabel(res.body.project_id, label)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/-/issues/${res.body.iid}`)
        })
    })

    it('successfully', () => {
        cy.gui_setLabelOnIssue(label)

        cy.contains('[data-testid="sidebar-labels"]', label.name).should('be.visible')

        cy.get('[data-testid="selected-label-content"]')
            .should(
                'have.attr',
                'style',
                `--label-background-color:${label.color}; --label-inset-border:inset 0 0 0 2px ${label.color};`
            )
    })
})