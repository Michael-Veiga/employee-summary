const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Whats your name?",
        name: "name",
      },
      {
        type: "number",
        message: "Whats your ID number?",
        name: "ID",
      },
      {
        type: "input",
        message: "Whats your email address?",
        name: "email",
      },
      {
        type: "list",
        message: "Whats your job title?",
        name: "job",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(
      // and to create objects for each team member (using the correct classes as blueprints!)
      function ({ name, ID, email, job }) {
        switch (job) {
          case "Manager":
            inquirer
              .prompt({
                type: "input",
                message: "What is your office number??",
                name: "officeNumber",
              })
              .then(function ({ officeNumber }) {
                Manager(name, ID, email, officeNumber);
                addEmployee();
              });
            break;
          case "Intern":
            inquirer
              .prompt({
                type: "input",
                message: "What school did you attend?",
                name: "school",
              })
              .then(function ({ school }) {
                Intern(name, id, email, school);
                addEmployee();
              });
            break;
          case "Engineer":
            inquirer
              .prompt({
                type: "input",
                message: "What is your github username?",
                name: "github",
              })
              .then(function ({ github }) {
                Engineer(name, id, email, github);
                addEmployee();
              });
            break;
        }
      }
    );
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function addEmployee() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "addEmployee",
    })
    .then(function ({ addEmployee }) {
      console.log("add another employee", addEmployee);
      if (addEmployee) {
        questions();
      } else {
        render();
      }
    })

    .catch((err) => {
      console.log("Error adding employee", err);
      throw err;
    });
}
questions();
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
