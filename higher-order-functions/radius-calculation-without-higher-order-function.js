const radius = [3, 1, 2, 4];

// calculate area for each radius
const calculateArea = function (radius) {
   const output = [];
   for (let i = 0; i < radius.length; i++){
       output.push(Math.PI * radius[i] * radius[i]);
   }
   return output;
}

console.log('Area is', calculateArea(radius));

// Calculate circumference for each radius

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log('Circumference is', calculateCircumference(radius));

// calculate diameter for each radius
const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log('Diameter is', calculateDiameter(radius));


