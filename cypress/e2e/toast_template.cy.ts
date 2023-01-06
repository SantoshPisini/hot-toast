/// <reference types="cypress" />

import { ENTER_ANIMATION_DURATION } from '../../projects/ngneat/hot-toast/src/lib/constants';

describe('Test hot toasts - template', () => {
  it('should show and hide toast with template', () => {
    cy.get('#template').click();
    cy.get('hot-toast').as('templateToast');

    cy.get('@templateToast').find('.hot-toast-message').children().as('children');
    cy.get('@children').should('have.length', 1);
    cy.get('@children').contains('Custom and bold');
    cy.get('@children').first().first().should('contain.text', 'bold').and('have.css', 'font-weight', '400');
    cy.get('@templateToast').find('.toast-dismiss').as('closeBtn').should('exist');
    cy.wait(ENTER_ANIMATION_DURATION);
    cy.get('@closeBtn').click();
    cy.get('@templateToast').should('not.be.visible');
    cy.get('@templateToast').should('not.exist');
  });
});
