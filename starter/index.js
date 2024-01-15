const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a short description of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
      },
      {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
      },
      {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("README.md generated successfully!")
    );
  }
  
  // function to initialize program
  function init() {
    
  }
  
  // function call to initialize program
  init();