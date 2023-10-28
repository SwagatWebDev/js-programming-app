function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

const addTwoAndMultiplyByThree = compose(multiplyByThree, addTwo);

console.log(addTwoAndMultiplyByThree(5)); // (5 + 2) * 3 = 21
