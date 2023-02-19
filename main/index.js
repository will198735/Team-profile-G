const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const engeneer = require('./lib/Engeneer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const generateHTTML = require('./src/generatehtml');


teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }



// OOP Functions

function addManager () { 
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is manager's name?",

    },
    {
      type: "input",
      name: "id",
      message: "please provide manager id",
    },
    {
      type: "input",
      name: "email",
      message: "please previde manager email",
    },
   
  ])
  .then((answers) => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
    
  });
}
}
// need to rearrange the files layout directory