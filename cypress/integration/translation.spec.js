describe ('Перевод', ()=> {
    it ('на русский', ()=>{
        cy.visit('/')
        cy.contains('strong','Skills').should('exist')
        cy.contains('button','RU').click()
        cy.contains('strong','Навыки').should('exist')
    })
})