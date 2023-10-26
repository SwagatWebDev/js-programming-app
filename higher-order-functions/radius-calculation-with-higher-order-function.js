const radius = [3, 1, 2, 4];

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

const calculate = (radius, logic) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};
console.log("Area:", calculate(radius, area));
console.log("Circumference:", calculate(radius, circumference));
console.log("Diameter:", calculate(radius, diameter));
