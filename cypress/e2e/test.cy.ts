describe("my first cy test", () => {
    it("runs", () => {
        cy.visit('/')
        cy.get('a').eq(0).should('contain.html', 'img')
    })
})