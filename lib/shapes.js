//recommended that you place any common functionality and properties 
//shared by the Triangle, Circle, and Square classes in a parent Shape class and 
//use inheritance to reuse the code in the child classes.

//if i want to change colores of my console log
//console.log(`\x1b[36m${text}\x1b[0m`);

class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;//(150,18)point, (244,182), (56,182), (150,18)point
    } //polyline-combination of straight lines, polygon auto connects last point with first = triangle 
}