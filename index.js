const inquirer = require('inquirer');
const fs = require('fs');
let badge;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title of project:',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Github username:',
        name: 'githubusername',
    },
    {
        type: 'input',
        message: 'Your email:',
        name: 'email',
    },
    {
      type: 'input',
      message: 'Description of the project:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Neccessary depenency commands:',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines:',
        name: 'contributingInfo',
    },
      {
        type: 'input',
        message: 'Which command should be used to run tests?',
        name: 'testcommand',
      },
      {
        type: 'list',
        message: 'Which license do you want to put on this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
        name: 'license',
      },
      
  ])
  .then((response) =>
  {
      const {title, githubusername, email, description, instructions, usage, contributingInfo, testcommand, license} = response;
     
      console.log(license)
    fs.writeFile('README2.md', ``, (error) => 
{
 if (error)
    console.error(error)
})
  });