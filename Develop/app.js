const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

// choose what type of employee you would like to add
const employeeType = [
    { 
        type: "list", 
        name: "employeeType", 
        message: "What type of employee would you like to add?", 
        choices: ["Manager", "Engineer", "Intern", "None"] 
    }
]

// array of questions about the manager
const managerQuestions = [
    { 
        type: "input", 
        name: "name", 
        message: "What is the manager's name?" 
    },  
    { 
        type: "input", 
        name: "id", 
        message: "What is the manager's ID?" 
    },
    { 
        type: "input", 
        name: "email", 
        message: "What is the manager's email?"
    }, 
    { 
        type:"input", 
        name: "officeNumber", 
        message: "What is the manager's office number?"
    }
]

// array of questions about the engineer
const engineerQuestions = [
    { 
        type: "input", 
        name: "name", 
        message: "What is the engineer's name?" 
    },  
    { 
        type: "input", 
        name: "id", 
        message: "What is the engineer's ID?" 
    },
    { 
        type: "input", 
        name: "email", 
        message: "What is the engineer's email?" 
    }, 
    { 
        type: "input", 
        name: "github", 
        message: "What is the engineer's GitHub username?" 
    }
]

// array of questions about the intern
const internQuestions = [
    { 
        type: "input", 
        name: "name", 
        message: "What is the intern's name?" 
    }, 
    { 
        type: "input", 
        name: "id", 
        message: "What is the intern's ID?" 
    },
    { 
        type: "input", 
        name: "email", 
        message: "What is the intern's email?" 
    },  
    { 
        type: "input", 
        name: "schoolName", 
        message: "What school does the intern attend?" 
    }
]

