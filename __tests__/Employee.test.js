const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('Initialization', () => {
        it('should set the values of the name, id and email, when I set them', () => {
           //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           //Action
         
           let employee = new Employee(name, id, email)

           //Assert
           expect(employee.name).toEqual('Nick')
           expect(employee.id).toEqual(1)
           expect(employee.email).toEqual('Nick@gmail.com')
            
        });
    });

    describe('getName', () => {
        it('should get the values of the name when called', () => {

            
    });

    })

    describe('getId', () => {
        it('should', () => {

            
        });
        
    })

    describe('getEmail', () => {
        it('should', () => {

            
        });
        
    })

    describe('getRole', () => {
        it('should return Employee when getRole is called', () => {
               //Arrange
           let name = 'Reniel'
           let id = 1;
           let email = 'Reniel@gmail.com'
           let employee = new Employee(name, id, email)
           //Action
          let role = employee.getRole()
          // Assert 
          expect(role).toEqual("Employee")


        });
        
    })


});

