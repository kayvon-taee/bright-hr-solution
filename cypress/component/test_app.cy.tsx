import App from "../../src/App";
/// <reference types="cypress" />
describe('<app/>', () => {
    it('mounts', () => {
        cy.mount(<App />)
    })
})