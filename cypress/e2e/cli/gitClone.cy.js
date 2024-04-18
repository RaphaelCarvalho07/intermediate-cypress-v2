import { faker } from '@faker-js/faker'

describe('git clone', () => {
    const project = {
        name: `project-${faker.string.uuid()}`,
    }
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.api_createProject(project)
    })

    it('successfully', () => {
        cy.cloneViaSSH(project)

        cy.readFile(`cypress/downloads/${project.name}/README.md`)
            .should('contain', `# ${project.name}`)
    })
})