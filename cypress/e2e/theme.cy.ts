describe('Change theme', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Change theme and check', () => {
        cy.get('#theme-button').click();

    });
});