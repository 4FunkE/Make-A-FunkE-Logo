class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
      }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;//(150,18)point, (244,182), (56,182), (150,18)point
    } //polyline-combination of straight lines, polygon auto connects last point with first = triangle
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; // x=150 y=100 radias=80
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;// x= top left corner y=top left corner width and height from that corner
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
};
