describe('Change language', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Change language and check', () => {
        cy.get('#language-button').click();
    });
});