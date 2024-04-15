import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create issue', options, () => {
    beforeEach(() => {
        cy.api_deleteProjects()
    })

    it('successfully', () => {
        const issue = {
            title: `issue-${faker.string.uuid()}`,
            description: faker.lorem.paragraph(),
            project: {
                name: `project-${faker.string.uuid()}`,
            }
        }

        cy.api_createIssue(issue).then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.title).to.equal(issue.title)
            expect(res.body.description).to.equal(issue.description)
        })
    })
})