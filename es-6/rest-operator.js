// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

// function Arguments
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 8, 7));

// combine rest and Spread
const numbers = [1, 2, 3, 4, 5];
const [first, ...middle] = numbers;
console.log(first);
console.log(middle);
const [second, ...rest] = middle;
console.log(second);
console.log(rest);
