// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");

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
  choices: ["Apache License 2.0", "GNU GPL v3.0", "MIT License", "Creative Commons Zero v1.0 Universal", "Mozilla Public License 2.0"],
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init()
{
  inquirer.prompt(questions)
  .then(function(data)
  {
    const title = data.title;
    const description = data.description;
    const installation = data.installation;
    const usage = data.usage;
    const contribution = data.contribution;
    const testing = data.testing;
    const license = data.license;
    const username = data.username;
    const email = data.email;
    
    console.log(title);
    console.log(description);
    console.log(installation);
    console.log(usage);
    console.log(contribution);
    console.log(testing);
    console.log(license);
    console.log(username);
    console.log(email);

    //const name = `Name: ${data.name}`;
    //const userInputData = name + "\n" + languages + "\n" + communication;
  });
}

// Function call to initialize app
init();
