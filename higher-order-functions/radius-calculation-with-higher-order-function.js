const radius = [3, 1, 2, 4];

const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}
const diameter = function(radius) {
    return 2 * radius;
}

console.log("Area is", calculate(radius, area));
console.log("Circumference is", calculate(radius, circumference));
console.log("Diameter is", calculate(radius, diameter));
