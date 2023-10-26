function transform(num) {
    return num * num;
}

function applyFunctionToElements(arr, transformationFn) {
    const result = [];
    for (const element of arr) {
        result.push(transformationFn(element));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

const transformedNumbers = applyFunctionToElements(numbers, transform);

console.log(transformedNumbers); // [1, 4, 9, 16, 25]
