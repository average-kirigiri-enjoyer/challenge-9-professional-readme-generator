/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 9 Weekly Challenge - Professional README Generator
Created 2023/09/10
Last Edited 2023/09/11
*/

//retrieving packages & exported code needed for README generation
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//array containing questions for collecting data needed to generate README
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

//function which attempts to write README data to a markdown file
function writeToFile(readmeData)
{
  //attempts to write readmeData to a markdown file sampleREADME.md
  fs.writeFile("./sampleREADME.md", readmeData, function(err)
  {
    if (err) //if an error occurred in the process of creating / writing to the file, inform the user as such
    {
      console.log(`Error occurred while trying to create sampleREADME.md; ${err}`);
    }
    else //otherwise, inform the user that the README was successfully written to
    {
      console.log(`sampleREADME.md successfully created`);
    }
  });
}

//function to prompt the user with questions, the answers to which will be used to generate a README
function generateREADME()
{
  inquirer.prompt(questions)
  .then(function(data)
  {
    const readmeData = generateMarkdown(data);
    writeToFile(readmeData);
  });
}

//begins README generation process
generateREADME();