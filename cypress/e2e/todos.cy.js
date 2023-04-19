describe('Pruebas-pagina-todo', () => {

   

 
 
     beforeEach(() => {
     cy.visit('http://todomvc-app-for-testing.surge.sh/')
     
     })
      
      
     it('user can add ONE task', () =>{
    
     cy.get('.new-todo').type('comprar el pan{enter}')
     cy.get('.toggle').click()
     })


     it('renombrar tarea', () =>{

     cy.get('.new-todo').type('hacer los deberes{enter}')  
     cy.get('label').dblclick()
     cy.get('.editing').type('repasar los deberes{enter}')
     cy.get('label').contains('repasar los deberes')


     })


       
     it('añadir tarea', () =>{

     cy.get('.new-todo').type('comprar pañales{enter}')
     cy.get('label').contains('comprar pañales')
    
    })

         
     it('desmarcar una tarea', () =>{
    
     cy.get('.new-todo').type('comprar el pan{enter}')
     cy.get('.toggle').click()
     cy.get('.toggle').click()


         

     })  
     
     it('filtrar tarea', () =>{
    
          cy.get('.new-todo').type('comprar el pan{enter}')
          cy.get('.new-todo').type('comprar pañales{enter}')
          cy.get('.new-todo').type('comprar leche{enter}')
          cy.get('.new-todo').type('comprar cafe{enter}')
          cy.get(':nth-child(3) > ')
     

     }) 



})