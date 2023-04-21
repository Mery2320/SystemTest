/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page"
import { ShiftingContentPage } from "../page-objects/shifting-content-page"
import { MenuElementPage} from "../page-objects/menu-element-page"



describe('Pruebas_shiftingcontrol', () => {

    const mainPage = new MainPage()
    const shiftingcontentpage = new ShiftingContentPage()
    const menuelementpage = new MenuElementPage()

   

   beforeEach(() => {
    mainPage.visitarMainPage()
    mainPage.clicarShiftingContent()
    


   })


   it('Comprobamos5Elementos', () => {
   
   shiftingcontentpage.clicarMenuElement()
   menuelementpage.comprobar5Elementos(home,about,contactos,portfolio, gallery)

   })   


})