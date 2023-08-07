// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
//const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: "input",
        message: "What is Your GitHub Username?",
        name: "username"
    },
    {
        type: "email",
        message: "What is your Email Address?",
        name: "email address"
    },
    {
        type: "input",
        message: "What is your Projects name?",
        name: "Project"
    },
    {
        type: "input",
        message: "please write a short description of your project",
        name: "Project Description"
    },
    {
        type: "license",
        message: "What type of licencse should this project have?",
        name: "License"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies",
        name: "command"
    },
    {
        type: "input",
        message: "What command should be run to run test",
        name: "Test"
    }

])

.then(({
    title, installation, instructions, credits, license, git, linkedin, email, usage, contribution
}) => {
    const plate = `# ${title}
    * [Installation](#installation)
    * [Usage](#usage)
    * [contribution](#contribution)
    * [Credits](#credits)
    * [License](#license)
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### instructions
    ${instructions}
    ## Credits 
    ${credits}
    ## license
    ${license}

    # Contact
    * GitHub :${git}
    * Linkedin :${linkedin}
    * E-mail :${email}`;

}
)

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data successfully written to ${fileName}`);
        }
    });
}
const content = "This is some content that will be written to the file.";

writeToFile("README.md", content);


 

function init() {
    inquirer
.prompt([
    {
        type: "input",
        message: "What is Your GitHub Username?",
        name: "username"
    },
    {
        type: "email",
        message: "What is your Email Address?",
        name: "email address"
    },
    {
        type: "input",
        message: "What is your Projects name?",
        name: "Project"
    },
    {
        type: "input",
        message: "please write a short description of your project",
        name: "Project Description"
    },
    {
        type: "license",
        message: "What type of licencse should this project have?",
        name: "License"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies",
        name: "command"
    },
    {
        type: "input",
        message: "What command should be run to run test",
        name: "Test"
    }
  
            // Add more prompts as needed for other data you want to collect
        ])
        .then((answers) => {
            const readmeContent = `# ${answers.title}\n\n${answers.description}\n\nAuthor: ${answers.author}`;
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error initializing the app:', error);
        });
}

// Function call to initialize app
init();
