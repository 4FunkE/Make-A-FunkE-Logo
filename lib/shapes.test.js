//The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest.


//Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.


const { Triangle } = require('./shapes');

describe('Triangle', () => {
  test('render() method should return the SVG string with the given shape color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});