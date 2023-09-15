// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `Developed under ![license badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT link](https://choosealicense.com/licenses/mit/)";
  }
  if (license === "GNU") {
    return "[GNU link](https://choosealicense.com/licenses/gpl-3.0/)";
  }
  if (license === "GPLv3") {
    return "[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  }
  if (license === "GNU") {
    return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
  }
  if (license === "GPLv3") {
    return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution
  
  ${data.contribution}
  
  ## Test
  
  ${data.test}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseLink(data.license)}
  
  ## Questions
  
  Submit questions to ${data.questions}

  View my Github profile at https://github.com/${data.gitHub}
  
`;
}

module.exports = generateMarkdown;
