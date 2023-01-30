// TODO: Create a function that returns a license badge based on which license is passed in
const licenseArray = ["Apache License 2.0","GNU General Public License v3.0","MIT License"]
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license===licenseArray[0]){
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
} else if (license===licenseArray[1]){
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
} else if (license===licenseArray[2]){
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else {
  return ""
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license===licenseArray[0]){
    return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArray[1]){
    return `[${licenseArray[1]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license===licenseArray[2]){
    return `[${licenseArray[2]}](https://opensource.org/licenses/MIT)`
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license===licenseArray[0]){
    return licenseArray[0]
  } else if(license===licenseArray[1]){
    return licenseArray[1]
  } else if(license===licenseArray[2]){
    return licenseArray[2]
  } else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ### How to contribute
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  ### If you have any questions, contact me here:
  Email: ${data.email}

  Github: [${data.github}](https://github.com/${data.github})  
`;
}

module.exports = generateMarkdown;
