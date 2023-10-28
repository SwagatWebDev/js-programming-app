// Square the elements of an array
const numbers = [1, 2, 3, 4, 5];

function transform(num) {
    return num * num;
}

function applyFunctionsToElements(arr, transformationFn) {
    const result = [];
    for (const element of arr) {
        result.push(transformationFn(element));
    }
    return result;
}

const transformedNumber = applyFunctionsToElements(numbers, transform);

console.log(transformedNumber);


