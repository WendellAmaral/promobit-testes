/// <reference types="cypress"/>

beforeEach(() => {
    //visitar site
     cy.visit('https://www.promobit.com.br/')
     cy.viewport(1100, 600, {timeout: 5000})
     cy.xpath("//button[.='Entre ou Cadastre-se']").click()
     cy.contains('Faça o Login').click()
     cy.get('#E-mail').type('wendell.amaral@promobit.com.br')
     cy.get('#Senha').type('Promobit@1')
     cy.xpath("//button[@type='submit']").click()
     cy.wait(3000)
   })
 
   describe('testesTimelineHome', () => {
    it('ClicarOferta', () => {
      cy.xpath("//*[@id='__next']/main/div/div/div/div/div[2]/div/div/div/div[2]/div/a/div/div[2]/div[1]/div/div/span[1]",).click()
      cy.url().should('include', 'https://www.promobit.com.br/oferta');
      
     })
     it('botãoOcultarOfertas', () => {
      cy.xpath("//span[.='Ocultar ofertas']",).click()
      cy.get('h3').should('contain', 'Ocultar ofertas')
      
     })
     it.only('ordenarOfertas', () => {
     cy.get('.dropdown-menu').click()

     })
  })