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
        it('should return Nick when called', () => {
      let name = "Nick";
      let employee = new Employee(name)
      expect(employee.getName()).toEqual("Nick")
            
    });

    })

    describe('getId', () => {
        it('should return 1 when called', () => {
           // Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let employee = new Employee(name, id, email)
           expect(employee.getId()).toEqual(1)
            
        });
        
    })

    describe('getEmail', () => {
        it('should return Nick@gmail.com when called', () => {

            let name = 'Nick'
            let id = 1;
            let email = 'Nick@gmail.com'
            let employee = new Employee(name, id, email)
            expect(employee.getEmail()).toEqual("Nick@gmail.com")
        });
        
    })

    describe('getRole', () => {
        it('should return Employee when getRole is called', () => {
               //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let employee = new Employee(name, id, email)
           //Action
          let role = employee.getRole()
          // Assert 
          expect(role).toEqual("Employee")


        });
        
    })


});

