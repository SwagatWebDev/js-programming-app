class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    area() {
        return this.width * this. height
    }
}

// module.exports = Rectangle;
class Square extends Rectangle {
    constructor(param) {
        super(param, param);
    }
}
const square = new Square(4);
console.log(square.area());



