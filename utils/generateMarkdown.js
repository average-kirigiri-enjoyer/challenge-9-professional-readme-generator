// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
{

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)
{

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
{
  /*if (licenseType === "None")
  {

  }
  else
  {
    let licenseBadge = renderLicenseBadge(licenseType)
  }*/

  return `
    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    Operates under the following license; ${data.license}. See the LICENSE file the the repository for more information

    ## Contributing

    ${data.contribution}

    ## Tests

    ${data.testing}

    ## Questions

    If you have any questions, please contact me at ${data.email}, and I will get back to you as soon as I can. Additionally, my GitHub account can be found at https://github.com/${data.username}
  `;
}

module.exports = generateMarkdown;