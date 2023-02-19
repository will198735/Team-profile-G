const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const engeneer = require('./lib/Engeneer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',

    },
    {
      type: 'input',
      name: 'id',
      message: 'please provide your id',
    },
    {
      type: 'input',
      name: 'email',
      message: 'please previde your email',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'your office number?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'school',
      message: 'the name of your school?.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
 
// need to rearrange the files layout directory