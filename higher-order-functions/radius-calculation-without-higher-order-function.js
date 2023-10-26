const radius = [3, 1, 2, 4];

// Calculate area for each radius
const calculateArea = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log("Area:", calculateArea(radius));

// Calculate circumference for each radius
const calculateCircumference = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};

console.log("Circumference:", calculateCircumference(radius));

// Calculate diameter for each radius
const calculateDiameter = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
};

console.log("Diameter:", calculateDiameter(radius));
