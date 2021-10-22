/// <reference types="cypress" />

describe('todolist', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('displays form', () => {
        cy.get('input').type('testando cypress')
        cy.contains('button', 'submit').click()
    })

    it('types n todolists and submit them', () => {
        cy.get('input').type('todolist1')
        cy.contains('button', 'submit').click()

        cy.get('input').clear().type('todolist2')
        cy.contains('button', 'submit').click()

        cy.get('input').clear().type('todolist3')
        cy.contains('button', 'submit').click()

        cy.get('input').clear().type('todolist4')
        cy.contains('button', 'submit').click()

        cy.get('input').clear().type('todolist5')
        cy.contains('button', 'submit').click()

        cy.contains('p', 'todolist1')
        cy.contains('p', 'todolist2')
        cy.contains('p', 'todolist3')
        cy.contains('p', 'todolist4')
        cy.contains('p', 'todolist5')
    })


})