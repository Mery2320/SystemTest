/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page"
import { LoginPage } from "../page-objects/login-page"
import { SecureAreaPage } from "../page-objects/securearea-page"


describe('Pruebas_login', () => {

    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const secureAreaPage = new SecureAreaPage()


    beforeEach(() => {
        mainPage.visitarMainPage()
        mainPage.clicarFormAuthentication()
      
    })
  
  
    it('the user is logged', () => {

        loginPage.introducirUsuario("tomsmith")
        loginPage.introducirContraseña("SuperSecretPassword!")
        loginPage.clicarBotonLogin()
        secureAreaPage.comprobarMensaje("You logged into a secure area!")

    })   
     
    it('usuario incorrecto', () => {

        loginPage.introducirUsuario("Pepe")
        loginPage.introducirContraseña("SuperSecretPassword!")
        loginPage.clicarBotonLogin()
        secureAreaPage.comprobarMensaje("Your username is invalid!")

    })    
    
    it('contraseña incorrecta', () => {

        loginPage.introducirUsuario("tomsmith")
        loginPage.introducirContraseña("Pepe")
        loginPage.clicarBotonLogin()
        secureAreaPage.comprobarMensaje("Your password is invalid!")

    })    
  

  
  
  
})

