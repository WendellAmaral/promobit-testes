/// <reference types="cypress"/>

beforeEach(() => {
    //visitar site
     cy.visit('https://www.promobit.com.br/')
     cy.viewport(1100, 600, {timeout: 5000})
     
   })
   describe('okr', () => {
    
     it('IrALoja', () => {
      cy.get('[style="min-width: calc(25% - 12px); max-width: calc(25% - 12px); transform: translate3d(0px, 0px, 0px);"] > .e19tro4z0 > .css-1t8t9xr > .css-kloepi > .css-w26eb').click()
      cy.contains('Ir à loja').should('be.visible').invoke('removeAttr', 'target').click({force: true})
      cy.url().should('include', 'https://www.promobit.com.br/Redirect/to/')
    })

})

                 //Adiversidades Encontradas//

//-O tamanho de tela se altera durante a execução do Cypress
//tive que alterar a resolução antes dele executar os testes
//-O cypress não consegue executar testes que abrem em outra aba
//tive que usar o .invoke('removeAttr', 'target')
//