/// <reference types="cypress" />
import { HOT_TOAST_DEFAULT_TIMEOUTS } from '../../projects/ngneat/hot-toast/src/lib/constants';

describe('Test hot toasts - component', () => {
  it('should show and hide component toast', () => {
    cy.get('#data').click();
    cy.get('hot-toast').as('componentToast');

    cy.get('@componentToast').should(
      'contain',
      'Toast is a form of 🍞 bread that has been browned by toasting, that is, exposure to radiant 🔥 heat.'
    );
    cy.wait(HOT_TOAST_DEFAULT_TIMEOUTS.blank);
    cy.get('@componentToast').should('not.be.visible');
    cy.get('@componentToast').should('not.exist');
  });
});
