// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseType, licenseLink)
{
  `Operates under the following license; ${licenseType}. Refer to the following link for more information; ${licenseLink}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
{
  const licenseType = data.license;
  let licenseBadge = "";
  let licenseSection = "This application does not operate under a license";

  if (!(licenseType === "None"))
  {
    let licenseLink;

    if (licenseType === "Apache License 2.0")
    {
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
    }
    else if (licenseType === "GNU GPL v3.0")
    {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
    }
    else if (licenseType === "MIT License")
    {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      licenseLink = "https://opensource.org/licenses/MIT"
    }
    else if (licenseType === "Creative Commons Zero v1.0 Universal")
    {
      licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/"
    }
    else if (licenseType === "Mozilla Public License 2.0")
    {
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      licenseLink = "https://opensource.org/licenses/MPL-2.0"
    }

    licenseSection = renderLicenseSection(licenseType, licenseLink);
  }

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

    If you have any questions, please contact me at ${data.email}, and I will get back to you as soon as I can. Additionally, my GitHub account can be found at https://github.com/${data.username}
  `;
}

module.exports = generateMarkdown;