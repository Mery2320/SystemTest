/// <reference types="cypress" />

export class MenuElementPage{



comprobar5elementos() {

 cy.get('h3').contains(home,about,contactus,portfolio,gallery)



    }


}
