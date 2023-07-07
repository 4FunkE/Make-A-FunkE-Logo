//The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest.


//Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.


const { Triangle } = require('./shapes');

const { Circle } = require('./shapes');

const { Square } = require('./shapes');


describe('Triangle', () => {
  test('render() method should return the SVG string with the given shape color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
    test('render() method should return the SVG string with the given shape color', () => {
      const shape = new Circle();
      shape.setColor('red');
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });

  describe('Square', () => {
    test('render() method should return the SVG string with the given shape color', () => {
      const shape = new Square();
      shape.setColor('yellow');
      expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="yellow" />');
    });
  });