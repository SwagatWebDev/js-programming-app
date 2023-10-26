function createExponentiationFunction(exponent) {
    return function (base) {
        return Math.pow(base, exponent);
    };
}

const square = createExponentiationFunction(2);
const cube = createExponentiationFunction(3);

console.log(square(3)); // 9 (3^2)
console.log(cube(3));   // 27 (3^3)
