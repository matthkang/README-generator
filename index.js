// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    { message: 'What is the project title?', type: 'input', name: 'title' },
    { message: 'What is the project description?', type: 'input', name: 'desc' },
    { message: 'What are the installation instructions?', type: 'input', name: 'install' },
    { message: 'What is the usage info? (instructions/examples for use)', type: 'input', name: 'usage' },
    { message: 'What are the contribution guidelines?', type: 'input', name: 'contribute' },
    { message: 'What are the test instructions?', type: 'input', name: 'test' },
];

inquirer.prompt(questions)
.then((answers) => {
    console.log(answers);
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
