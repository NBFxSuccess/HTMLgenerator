const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let cards = '';
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
        name: 'addMore',
    },
  ])
  .then((manager) =>
  {
      const {name, id, email, officeNumber, addMore} = manager;

      const employee = (new Manager(name, id, email, officeNumber));
      cards += `<div class="card m-3" style="width: 18rem;">
      <div class="card-header">
        Manager
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${employee.name}</li>
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
      </ul>
    </div>`

  if (addMore) {
    addMember();
} 
else {
    writeTheStuff(cards);
}

  });


function addMember () {
  inquirer
  .prompt([
    {
      type: 'list',
      message: "What is their role?",
      name: 'employeeType',
      editableList: false,
      choices: ['Engineer','Intern'],
  },
  {
      type: 'input',
      message: "What is their name?",
      name: 'name',
  },
  {
      type: 'input',
      message: 'What is their ID?',
      name: 'id',
  },
  {
      type: 'input',
      message: 'What is their email address?',
      name: 'email',
  },
  {
      type: 'input',
      message: "What is their GitHub?",
      name: 'github',
      when: answers => answers.employeeType == 'Engineer',
  },
  {
      type: 'input',
      message: "What is their school?",
      name: 'school',
      when: answers => answers.employeeType == 'Intern',
  },
  {
      type: 'confirm',
      message: "Do you want to add another Team Member?",
      name: 'addTeamMember',
      default: true,
  }
  ])
  .then((newmember) =>
  {
      const {employeeType,name, id, email, github, school, addTeamMember} = newmember;

if (employeeType === 'Engineer') {
  const engineer = (new Engineer(name, id, email, github));
  cards += `<div class="card m-3" style="width: 18rem;">
      <div class="card-header">
        Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${engineer.name}</li>
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
      </ul>
    </div>`

}
else {
  const intern = (new Intern(name, id, email, school));
  cards += `<div class="card m-3" style="width: 18rem;">
      <div class="card-header">
        Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${intern.name}</li>
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>`
}
if (!addTeamMember) {
  writeTheStuff(cards);
}
else {
  addMember();
}

  });


}



function writeTheStuff(cards) {
  fs.writeFile('index.html', `<!DOCTYPE html>
  <html lang="en">
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./assets/style.css" />
      <title>Team Generator</title>
    </head>
    <header class="m-2">
        <h3 class="text-center pt-4">My Team</h3>
  </header>
  <body class="bg-dark">
  <div id="cardcontainer">
  
 ${cards}
       
        <div>
      <script src="./assets/script.js"></script> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </body>
  </html>
  `, (error) => 
{
 if (error)
    console.error(error)
})
  }