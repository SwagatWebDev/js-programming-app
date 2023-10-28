function createExponentialFunction(exponent){
    return function (base) {
        return Math.pow(base, exponent);
    }
}

const square = createExponentialFunction(2);
const cube = createExponentialFunction(3);

console.log(square(3));
console.log(cube(3));
