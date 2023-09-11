// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
  type: "input",
  message: "Enter repository title",
  name: "title",
},
{
  type: "input",
  message: "Enter repository description",
  name: "description",
},
{
  type: "input",
  message: "Enter installation instructions",
  name: "installation",
},
{
  type: "input",
  message: "Enter usage instructions",
  name: "usage",
},
{
  type: "input",
  message: "Enter contribution guidelines",
  name: "contribution",
},
{
  type: "input",
  message: "Enter testing instructions",
  name: "testing",
},
{
  type: "list",
  message: "Choose a repository license",
  name: "license",
  choices: ["Apache License 2.0", "GNU GPL v3.0", "MIT License", "Creative Commons Zero v1.0 Universal", "Mozilla Public License 2.0", "None"],
},
{
  type: "input",
  message: "Enter GitHub username",
  name: "username",
},
{
  type: "input",
  message: "Enter email address",
  name: "email",
}];

// TODO: Create a function to write README file
function writeToFile(readmeData)
{
  fs.writeFile("./sampleREADME.md", readmeData, function(err)
  {
    if (err)
    {
      console.log(`Error occurred while trying to create sampleREADME.md; ${err}`);
    }
    else
    {
      console.log(`sampleREADME.md successfully created`);
    }
  });
}

// TODO: Create a function to initialize app
function generateREADME()
{
  inquirer.prompt(questions)
  .then(function(data)
  {
    const readmeData = generateMarkdown(data);
    writeToFile(readmeData);
  });
}

// Function call to initialize app
generateREADME();