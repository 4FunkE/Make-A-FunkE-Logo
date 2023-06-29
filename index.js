//if i want to change colores of my console log
//console.log(`\x1b[36m${text}\x1b[0m`);

// Packages needed for this application
const { writeFile } = require("fs/promises")//to read and write files
const inquirer = require("inquirer")//the inquiry files from packageJSON
const { Traingle, Circle, Square} = require("./lib/shapes")//download shapes file
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
      name: 'shapeType',
      choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be? You can enter a name or hexadecimal number.',
        name: 'shapeColor',
      },
  ])

  //generate shape from input of shape type
  const shapeGenerate = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
  };
  //shape class will equal the shape type chosen by user from generate
  const ShapeClass = shapeGenerate[shapeType];
  if (!ShapeClass) {
    console.log('Invalid shape type');
    return;
  }
  //new shape
  const shape = new ShapeClass();  
  //add color from user input
  shape.setColor(shapeColor);


//error
.catch((error) => {
    console.error(error);
});