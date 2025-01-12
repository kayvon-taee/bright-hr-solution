import {DocumentInterface} from "../../utils/types/types";

describe("App tests", () => {
    beforeEach(() => {
        // Given // When we load the app
        cy.visit("/")
    })
    it("renders correctly", () => {
        // Assert that it has displayed the 7 entries
        cy.get('[data-testid="paired-display"]').should('have.length', 7)
        // Two accordions for the two folders
        cy.get('[data-testid="folder-accordion"]').should('have.length', 2)
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
    it("displays correct content inside the folders", () => {
        cy.fixture("mock").then((data : DocumentInterface) => {
            // Given the folders
            const nameListFolders = data.filter(entry => entry.type === "folder").map((entry) => entry.name)
            // When we click on some dropdown arrow for each folder
            cy.get('[data-testid="folder-accordion-summary"]').eq(0).click()
            cy.get('[data-testid="folder-accordion-summary"]').eq(1).click()
            // Assert they are render as desired
            nameListFolders.forEach(name => {
                cy.contains(name).should('be.visible')
            })
        })
    })

    it("allows filtering by filename at the top level", () => {
        cy.fixture("mock").then((data : DocumentInterface) => {
            const nameList = data.map((entry) => entry.name)
            nameList.forEach(name => {
                cy.get('[role="combobox"]').type(name)
                cy.contains(name).should('be.visible')
                cy.get('[data-testid="paired-display"]').should('have.length', 1)
                cy.get('[data-testid="folder-accordion"]').should('have.length', 0)
            })
        })
    })
    it("allows filtering by filename at the folder level", () => {
        cy.fixture("mock").then((data : DocumentInterface) => {
            const nameListFolders = data.filter(entry => entry.type === "folder").map((entry) => entry.name)
            const nameList = data.map((entry) => entry.name)
            nameList.forEach(fileName => {
                cy.contains(fileName).should('not.be.visible')
            })
            nameListFolders.forEach(nestFileName => {
                cy.get('[role="combobox"]').type(nestFileName)
                cy.contains(nestFileName).should('be.visible')
                cy.get('[data-testid="paired-display"]').should('have.length', 1)
            })
        })
    })
    // Sorting should be both ways - ascending and descending
    it("allows sorting by filename at the top level", () => {

    })
    it("allows sorting by date at the top level", () => {

    })
    it("allows sorting by size at the top level", () => {

    })
    it("allows sorting by filename at the folder level", () => {

    })
    it("allows sorting by date at the folder level", () => {

    })
    it("allows sorting by size at the folder level", () => {

    })
})