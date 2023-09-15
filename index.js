const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const data = {
  title: "Testing",
  description: "Descritpion Testing",
  installation: "Installion Testing",
  usage: "Usage Testing",
  contribution: "Contribution Testing",
  test: "Test Testing",
  license: "MIT",
  questions: "mateo.rodriguez85@gmail.com",
  gitHub: "AztekAsylum",
};
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

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
function init() {}

// Function call to initialize app
// init();
writeMD(data);
