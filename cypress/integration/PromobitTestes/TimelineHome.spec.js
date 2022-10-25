/// <reference types="cypress"/>

beforeEach(() => {
    //visitar site
     cy.visit('https://www.promobit.com.br/')
     cy.viewport(1100, 600, {timeout: 5000})
     
   })
   describe('testesTimelineHome', () => {
    it('clicarOferta', () => {
      cy.xpath("//*[@id='__next']/div[2]/div/div/div/div/div[2]/div/div/div/div[1]/div/a/div[1]/div[2]/div[3]/div/span").click()
      cy.url().should('include', 'https://www.promobit.com.br/oferta')
      
   })
   it('IrALoja', () => {
      cy.xpath("//*[@id='__next']/div[2]/div/div/div/div/div[2]/div/div/div/div[1]/div/a/div[1]/div[2]/div[3]/div/span").click()
      cy.contains('Ir à loja').should('be.visible').click({force: true})
      cy.url().should('include', 'https://www.promobit.com.br/Redirect/to/')
      
    })
     it('botãoOcultarOfertas', () => {
      cy.xpath("//span[.='Ocultar ofertas']",).click()
      cy.get('h3').should('contain', 'Ocultar ofertas')
      
    })
     it('ordenarOfertas', () => {
      cy.xpath("//select[@id='select_offers-order']").select('Mais curtidas')
      .should('have.value', 'likes')

    })

 })
    