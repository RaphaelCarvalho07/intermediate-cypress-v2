import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create Project', options, () => {
    beforeEach(() => {
        cy.api_deleteProjects()
    })

    it('successfully', () => {
        const project = {
            name: `project-${faker.string.uuid()}`,
        }

        cy.api_createProject(project).then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.name).to.equal(project.name)
        })
    })
})