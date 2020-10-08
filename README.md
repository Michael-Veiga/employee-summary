# Project Title: Employee-Summary

![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licenses](#Licenses)
- [Contributors](#Contributors)
- [Testing](#Testing)
- [Questions](#Questions)
- [Instructional Media](#Instructional-Media)

## Description

This is an employee team generator command line application. The application will prompt the user for information about each team member. The user can input any number of team members, and they may be a mix of managers, interns and engineers. The application then creates an html page with cards for each individual team member.


## Installation

Run "npm install" in your terminal where the files are located.

## Usage

Start by opening your local terminal and typing "node app.js". The terminal will then prompt you to select which type of employee you would like to include. All employees will require a name, ID number and email address. Depending on the role chosen, you will also have to input the office number for the managers, school for the interns and github username for the engineers. Once the employee information has been entered, the cli will ask if you would like to add an additional team member. If you select yes (y key) then it will prompt you to enter in another employee. If you select no (n key) then the application will generate a team.html file in the output folder which you can then access. You will know if the document has been successfully created when prompted with the statement "Your team has been created."

## Licenses

ISC

## Contributors

Michael Veiga

## Testing

You can input "npm run test" to ensure that all files are running successfully.

## Questions

Michael Veiga

mvee333@gmail.com

## Instructional-Media
<p>Command Line Input Example</p>

![GifOfCli](https://github.com/Michael-Veiga/employee-summary/blob/master/Develop/Images/employee-sum-gif.gif?raw=true)

<p>HTML Output Example</p>

![GifofHTML](https://media.giphy.com/media/KKTZ7TuXsCsUi28SNK/giphy.gif)
