// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// const data = {
//   title: "Testing",
//   description: "Descritpion Testing",
//   installation: "Installion Testing",
//   usage: "Usage Testing",
//   contribution: "Contribution Testing",
//   test: "Test Testing",
//   license: "MIT",
//   questions: "mateo.rodriguez85@gmail.com",
//   gitHub: "AztekAsylum",
// };

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation steps?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is this used for?",
    name: "usage",
  },
  {
    type: "input",
    message: "How would users contribute to this?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How do you test this application?",
    name: "test",
  },
  {
    type: "list",
    message: "What license is this developed un?",
    choices: ["MIT", "GNU", "GPLv3"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your gitHub username?",
    name: "gitHub",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeMD(data) {
  fs.writeFile("./output/README.md", generateMarkdown(data), (error) =>
    error
      ? console.error(error)
      : console.log("created README in output folder")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeMD(data);
  });
}

// Function call to initialize app
init();
// writeMD(data);
