function myReduce(arr, reducer, initialValue) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = reducer(result, arr[i]);
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const sum = myReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
