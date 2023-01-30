// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
function userInput(){
return inquirer.prompt( [
    { 
        type: "input",
        name: "title",
        message: "Please enter your project title.",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter a link to a screenshot of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please chose a license.",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License",]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contributing guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter how to test your project.",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },
    {
        type:"input",
        name:"fileName",
        message:"Please name the file.",
    },
]
)};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}.md!`)
    )
 };

// TODO: Create a function to initialize app
// async function so it waits until the users input information before creating README file//
async function init() { 
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
