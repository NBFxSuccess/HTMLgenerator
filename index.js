const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let EmployeeList = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the Project Managers name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Their ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Their email:',
        name: 'email',
    },
    {
      type: 'input',
      message: 'What is their office number?',
      name: 'officeNumber',
    },
    {
        type: 'confirm',
        message: 'Do you wish to add another team member?',
        name: 'addPerson',
    },
  ])
  .then((manager) =>
  {
      const {name, id, email, officeNumber, addPerson} = manager;

      EmployeeList.push(new Manager(name, id, email, officeNumber));
      
  console.log(EmployeeList)

  if (addPerson === true) {
    addIntern();
} 
else {
    writeTheStuff();
}

  });


  function writeTheStuff () {

  }