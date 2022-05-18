const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { type } = require("os");

const { get } = require("http");

function getRole()
{
    inquirer.prompt.n
}
function getManager() {
    inquirer
    .prompt([
      {  name: "username",
        type: "input",
        message: "What is the Managers Name?",
    },
    
    {
        name: "iD",
        type: "input",
        message: "what is their ID",
    },
    {
        name: "email",
        type: "input",
        message: "What is their email?",
    },
    {
        name: "officeNumber",
        type: "input",
        message: "What is their Office Number?",
    },
])
.then((answers) => {
const Manager = new Manager(answers.username, answers.iD, answers.email, answers.officeNumber);
employee.push(Manager);
addEmployee();
})
};

function getEngineer() {
    inquirer
    .prompt([
      {  name: "username",
        type: "input",
        message: "What is the Engineers Name?",
    },
    
    {
        name: "iD",
        type: "input",
        message: "what is their ID",
    },
    {
        name: "email",
        type: "input",
        message: "What is their email?",
    },
    {
        name: "gitHubUser",
        type: "input",
        message: "What is their Github username?",
    },
])
.then((answers) => {
const Engineer = new Engineer (answers.username, answers.iD, answers.email, answers.officeNumber);
console.log(Engineer);
employee.push(Engineer );
addEmployee();
})
};

function getIntern() {
    console.log("u are in the intern function")
    inquirer
    .prompt([
      {  name: "username",
        type: "input",
        message: "What is the Interns Name?",
    },
    
    {
        name: "iD",
        type: "input",
        message: "what is their ID",
    },
    {
        name: "email",
        type: "input",
        message: "What is their email?",
    },
    {
        name: "school",
        type: "input",
        message: "What is their current School name?",
    },
])
.then((answers) => {
const intern = new Intern (answers.username, answers.iD, answers.email, answers.officeNumber);

addEmployeeToFile(intern);
})
};

function addEmployee()  {
inquirer
.prompt ([{
    name: "employeeRole",
    type: "list",
    message: "Would you like to add an Engineer or Intern",
    choices: ["Engineer", "Intern", "We have enough of the rewuired staff Thanks1",]
}])
.then((answers) => {
    console.log("answers", answers.employeeRole);
    switch (answers.employeeRole)
    {
        case "Engineer":
            getEngineer();
            break;
        case "Intern":
            getIntern();
            break;
        case "Employee":
            getEmployee();
            break;
        case "Manager":
            getManager();
            break;
    }


//     if (answers.employeeRole === "Engineer") {
//         getEngineerInfo();
//     }else if (answers.employeeRole === "Intern"){
//         getInterninfo();
//     }else endAddingStaff()
})
};

function addEmployeeToFile(employee) {
    var html = `<div> ${intern.name}</div>`
    
    fs.writeFileSync("Employees.txt",)
}

addEmployee();