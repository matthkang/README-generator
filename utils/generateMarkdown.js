// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  else if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]"
  }

  else if (license === 'GPL') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "(https://opensource.org/licenses/MIT)"
  }
  else if (license === 'Apache') {
    return "(https://opensource.org/licenses/Apache-2.0)"
  }

  else if (license === 'GPL') {
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return "You are using the MIT license. [Learn more about READMEs]https://docs.github.com/github/creating-cloning-and-archiving-repositories/licensing-a-repository"
  }
  else if (license === 'Apache') {
    return "You are using the Apache license. [Learn more about READMEs]https://docs.github.com/github/creating-cloning-and-archiving-repositories/licensing-a-repository"
  }

  else if (license === 'GPL') {
    return "You are using the GPL license. [Learn more about READMEs]https://docs.github.com/github/creating-cloning-and-archiving-repositories/licensing-a-repository"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)
  const licenseSection = renderLicenseSection(data.section)

  return `${licenseBadge}${licenseLink}
  
  # ${data.title}

  ## Description
  
  ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseSection}
  
  ---
  
  ## Contributions
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  
`;
}

module.exports = { generateMarkdown };
