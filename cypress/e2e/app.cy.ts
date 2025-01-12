import {DocumentInterface} from "../../utils/types/types";

describe("App tests", () => {
    beforeEach(() => {
        // Given // When we load the app
        cy.visit("/")
    })
    it("renders correctly", () => {
        // Assert that it has displayed the 5 top level entries
        cy.get('[data-testid="paired-display]').should('have.length', 5)
    })
    it("displays the correct content at the upper level", () => {
        // Assert that it shows correct name
        cy.fixture("mock").then((data : DocumentInterface) => {
            const nameList = data.map((entry) => entry.name)
            nameList.forEach(name => {
                cy.contains(name).should('be.visible')
            })
        })
    })
})