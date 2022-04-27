const Manager = require("../lib/Manager");

describe('Employee', () => {
    describe('Initialization', () => {
        it('should set the values of the name, id and email, when I set them', () => {
           //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           //Action
         
           let employee = new Manager(name, id, email)

           //Assert
           expect(employee.name).toEqual('Nick')
           expect(employee.id).toEqual(1)
           expect(employee.email).toEqual('Nick@gmail.com')
            
        });
    });



    describe('getRole', () => {
        it('should return Manager when getRole is called', () => {
               //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let manager = new Manager(name, id, email)
           //Action
          let role = manager.getRole()
          // Assert 
          expect(role).toEqual("Manager")


        });
        
    })

    describe('getRole', () => {
        it('should return Office # when getOfficeNumber called', () => {
               //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let officeNumber = "55";
           let manager = new Manager(name, id, email, officeNumber)
          expect(manager.getOfficeNumber()).toEqual("55")


        });
        
    })


});

