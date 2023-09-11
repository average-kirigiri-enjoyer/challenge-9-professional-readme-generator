// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
function writeToFile(userInputData)
{
  fs.writeFile("./sampleREADME.md", userInputData, function(err)
  {
    if (err)
    {
      console.log(`Error occurred while trying to create README.md; ${err}`);
    }
    else
    {
      console.log(`Sample README.md successfully created`);
    }
  });
}

// TODO: Create a function to initialize app
function generateREADME()
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

    const readmeData = 
    `
    # ${title}\n
    ## Description\n
    ${description}\n
    ## Table of Contents\n
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)\n
    ## Installation\n
    ${installation}\n
    ## Usage\n
    ${usage}\n
    ## License\n
    Operates under the following license; ${license}. See the LICENSE file the the repository for more information\n
    ## Contributing\n
    ${contribution}\n
    ## Tests\n
    ${testing}}\n
    ## Questions\n
    If you have any questions, please contact me at ${email}, and I will get back to you as soon as I can.
    Additionally, my GitHub account can be found at https://github.com/${username}
    `;

    writeToFile(readmeData);
  });
}

// Function call to initialize app
generateREADME();
