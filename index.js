// Packages needed for this application
const fs = require("fs")//to read and write files
const inquirer = require("inquirer")//the inquiry files from packageJSON
const shapes = require("./lib/shapes")//download shapes file
const shapesTest = require("./lib/shapes.test")//download test shapes file

//array of questions for user input to generate README
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Choose type up to 3 text characters for you logo.',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Please choose one color for your logo. You can enter a name or hexadecimal number.',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape would you like for your logo:',
      name: 'shape',
      choices: ['circle', 'triangle', 'square'],//add more?
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be? You can enter a name or hexadecimal number.',
        name: 'shapeColor',
      },
  ])
//to move answers to generate
  .then((answers) => {
    const logoContent = shapes(answers);
//write README file
    fs.writeFile("logo.svg", logoContent, (err) => {
        if (err) throw err;
        console.log("You successfully created a logo!")
    });
})
//error
.catch((error) => {
    console.error(error);
});