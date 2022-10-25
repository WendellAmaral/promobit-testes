/// <reference types="cypress"/>

beforeEach(() => {
    //visitar site
     cy.visit('https://www.promobit.com.br/')
     cy.viewport(1150, 700, {timeout: 5000})
   })
 
   describe('testesLogin', () => {
    it('loginValido', () => {
       cy.xpath("//button[.='Entre ou Cadastre-se']").click()
       cy.xpath("//nav/button[.='Entrar']").click()
       cy.get('#E-mail').type('wendell.amaral@promobit.com.br')
       cy.get('#Senha').type('Promobit@1')
       cy.xpath("//button[@type='submit']").click()
       cy.xpath("//button[.='Meu Perfil']").should('be.visible')

     })
     it('loginInvalido', () => {
        cy.xpath("//button[.='Entre ou Cadastre-se']").click()
        cy.xpath("//nav/button[.='Entrar']").click()
        cy.get('#E-mail').type('wendelll.amaral@promobit.com.br')
        cy.get('#Senha').type('Promobit@1')
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//div[.='Senha ou e-mail inválido']")
        .should('contain','Senha ou e-mail inválido')
 
      })
      it('senhaInvalida', () => {
        cy.xpath("//button[.='Entre ou Cadastre-se']").click()
        cy.xpath("//nav/button[.='Entrar']").click()
        cy.get('#E-mail').type('wendell.amaral@promobit.com.br')
        cy.get('#Senha').type('Promobit@1')
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//div[.='Senha ou e-mail inválido']")
        //.should('contain','Senha ou e-mail inválido')
 
      })
      
  })