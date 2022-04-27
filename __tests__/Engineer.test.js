const Engineer = require("../lib/Engineer");

describe('Employee', () => {
    describe('Initialization', () => {
        it('should set the values of the name, id and email, when I set them', () => {
           //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           //Action
         
           let employee = new Engineer(name, id, email)

           //Assert
           expect(employee.name).toEqual('Nick')
           expect(employee.id).toEqual(1)
           expect(employee.email).toEqual('Nick@gmail.com')
            
        });
    });



    describe('getRole', () => {
        it('should return Engineer when getRole is called', () => {
               //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let manager = new Engineer(name, id, email)
          expect(manager.getRole()).toEqual("Engineer")


        });
        
    })

    describe('getRole', () => {
        it('should return northwestern when getSchool is called', () => {
               //Arrange
           let name = 'Nick'
           let id = 1;
           let email = 'Nick@gmail.com'
           let github = "githubhere";
           let manager = new Engineer(name, id, email, github)
           //Action
          expect(manager.getGithub()).toEqual("githubhere")


        });
        
    })


});

