/// <reference types="cypress"/>

beforeEach(() => {
    //visitar site
     cy.visit('https://www.promobit.com.br/')
     cy.viewport(1100, 600, {timeout: 5000})
     
   })
   describe('okr', () => {
    
     it('IrALoja', () => {
      cy.xpath("/html/body/div/div[2]/div/div/div/div/div[2]/div/div/div/div[1]/div/a/div[1]/div[1]/img").click()
      cy.contains('Ir à loja').invoke('removeAttr', 'target').click({force: true})
    
       cy.url().should('include', 'https://www.promobit.com.br/Redirect/to/')

    })
})

                 //Adiversidades Encontradas//

//-O tamanho de tela se altera durante a execução do Cypress
//tive que alterar a resolução antes dele executar os testes
//-O cypress não consegue executar testes que abrem em outra aba
//tive que usar o .invoke('removeAttr', 'target')
//