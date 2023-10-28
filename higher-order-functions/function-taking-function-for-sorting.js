function customSort(arr, compareFn) {
    return arr.slice().sort(compareFn);
}

const fruits = ['banana', 'apple', 'cherry'];
const alphabeticalOrder = customSort(fruits, (a, b) => a.localeCompare(b));

console.log(alphabeticalOrder); // ['apple', 'banana', 'cherry']
