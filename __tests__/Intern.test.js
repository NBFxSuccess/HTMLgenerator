const Intern = require("../lib/Intern");

describe('Employee', () => {
    describe('Initialization', () => {
        it('should set the values of the name, id and email, when I set them', () => {
           //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           //Action
         
           let employee = new Intern(name, id, email)

           //Assert
           expect(employee.name).toEqual('Nick')
           expect(employee.id).toEqual(1)
           expect(employee.email).toEqual('Nick@gmail.com')
            
        });
    });



    describe('getRole', () => {
        it('should return Intern when getRole is called', () => {
               //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let manager = new Intern(name, id, email)
           //Action
          let role = manager.getRole()
          // Assert 
          expect(role).toEqual("Intern")


        });
        
    })

    describe('getRole', () => {
        it('should return northwestern when getSchool is called', () => {
               //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let school = "northwestern";
           let manager = new Intern(name, id, email, school)
           //Action
          let role = manager.getSchool()
          // Assert 
          expect(role).toEqual("northwestern")


        });
        
    })


});

