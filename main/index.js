const Engineer = require('./lib/Engeneer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const fs = require('fs');
var path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(outputPath, "team.html");
const generateTeam = require('./src/template.js');




teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee ?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team ."]
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

  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is manager's name?",

    },
    {
      type: "input",
      name: "managerId",
      message: "please provide manager id",
    },
    {
      type: "input",
      name: "manaszgerEmail",
      message: "please previde manager email",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }
   
  ]).then((answers) => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
    
  });
}


function addEngineer() {
  inquirer.prompt([
    
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },

    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's employee ID number?" 
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?"
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?"
    }

  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamArray.push(engineer);
    createTeam();
  });
}

function addIntern() {
  inquirer.prompt([
    
    {
      type: "input",
      name: "interName",
      message: "What is the intern's name?"
    },

    {
      type: "input",
      name: "internId",
      message: "What is the intern's employee ID number?" 
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    },

    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern attend?"
    }

  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArray.push(intern);
    createTeam();
  });
}



function htmlBuilder () {
  console.log("Team created!")

  fs.writeFileSync('team.html', generateTeam(teamArray), "UTF-8")

}


createTeam();
}



runApp();
// need to rearrange the files layout directory