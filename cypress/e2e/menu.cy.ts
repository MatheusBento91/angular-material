describe('Open menu', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Open menu and check the list', () => {
        cy.get('#menu-button').click();
    });
});