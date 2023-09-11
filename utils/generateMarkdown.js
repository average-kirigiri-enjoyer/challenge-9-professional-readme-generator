/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 9 Weekly Challenge - Professional README Generator
Created 2023/09/10
Last Edited 2023/09/11
*/

//function to generate README based on data input by user
function generateMarkdown(data)
{
  const licenseType = data.license; //retrieves which type of license the user chose for the application
  let licenseBadge = ""; //sets default license badge as an empty string
  let licenseSection = "This application does not operate under a license"; //sets default license section content

  if (!(licenseType === "None")) //checks if the user chose a license option other than "None"
  {
    let licenseLink; //defines variable to hold a link to a website which provides information on the application's chosen license

    if (licenseType === "Apache License 2.0") //if the user chose the Apache 2.0 license, update the license badge & link as such
    {
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
    }
    else if (licenseType === "GNU GPL v3.0") //if the user chose the GNU v3.0 general public license, update the license badge & link as such
    {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
    }
    else if (licenseType === "MIT License") //if the user chose the MIT license, update the license badge & link as such
    {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      licenseLink = "https://opensource.org/licenses/MIT"
    }
    else if (licenseType === "Creative Commons Zero v1.0 Universal") //if the user chose the Creative Commons Zero v1.0 Universal license, update the license badge & link as such
    {
      licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/"
    }
    else if (licenseType === "Mozilla Public License 2.0") //if the user chose the Mozilla v2.0 public license, update the license badge & link as such
    {
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      licenseLink = "https://opensource.org/licenses/MPL-2.0"
    }

    //constructs license section content as per the user's choice of license
    licenseSection = `Operates under the following license; ${licenseType}. Refer to the following link for more information; ${licenseLink}.`;
  }

//constructs & returns the README data based on the user's input
return `${licenseBadge}
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

${licenseSection}

## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions

If you have any questions, please contact me at ${data.email}, and I will get back to you as soon as I can. Additionally, my GitHub account can be found at https://github.com/${data.username}`;
}

//exports the generateMarkdown function for use in other JavaScript files
module.exports = generateMarkdown;