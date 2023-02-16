const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('../lib/Employee');
const engeneer = require('../lib/Engeneer');
const intern = require('../lib/Intern');
const manager = require('../lib/Manager');
// how many card do i have to create?
// i will try to generate one card first
  const generateHTML = ({ name, id, github, email, school, officeNumber }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
  </header>

  <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${officeNumber}</li>
    <li class="list-group-item">${github}</li>
    <li class="list-group-item">${school}</li>
  </ul>
</div>
</body>
</html>`;


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
 
