const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown.js')

const readMeFile = 'README.md'

// create an array of questions for user input
const questions = [
    { message: 'What is the project title?', type: 'input', name: 'title' },
    { message: 'What is the project description? (what/why/how of project)', type: 'input', name: 'desc' },
    { message: 'What are the installation steps?', type: 'input', name: 'install' },
    { message: 'What is the usage info?', type: 'input', name: 'usage' },
    { message: 'What are the contribution guidelines?', type: 'input', name: 'contribute' },
    { message: 'What are the test instructions?', type: 'input', name: 'test' },

    { message: 'Choose a license from the following options:', type: 'list', name: 'license', choices: ['MIT', 'Apache', 'GPL'] },
    { message: 'What is your GitHub username?', type: 'input', name: 'github' },
    { message: 'What is your email address?', type: 'input', name: 'email' }
];

inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(readMeFile, answers)
    })


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const READMEfile = markdown.generateMarkdown(data)
    fs.writeFile(fileName, READMEfile, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );

}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
