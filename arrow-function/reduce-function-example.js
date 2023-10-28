const numbers = [1, 2, 3, 4, 5];
function myReduce(arr, reducer, initialValue){
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = reducer(result, arr[i]);
    }
    return result;
}

const sumResult = myReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumResult);

// reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// concatenation strings in an array
const words = ['Hello', ' ', 'World', '!'];
const sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(sentence);

// Multi Dimensional Array [1, 2, 3, 4, 5, 6]
const nestedArray = [[1,2], [3,4], [5,6]];
// const flatArray = nestedArray.reduce((accumulator, currentValue) => {
//     const value = accumulator;
//     return accumulator.concat(currentValue);
// }, []);
const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray);

const products = [
    {name: 'Watch', price: 1000},
    {name: 'Wallet', price: 100},
    {name: 'Sunglasses', price: 200}
];

/**
 * const totalPrice = products.reduce((acc, curr) => {
    const value = acc + curr.price;
    return value;
}, 0);
 */

/**
 * const totalPrice = products.reduce((acc, curr) => {
    return acc + curr.price;
}, 0);
 */

const totalPrice = products.reduce((acc, curr) => acc + curr.price , 0);
console.log(totalPrice);

const values = [13, 5, 27, 34, 42, 17, 8];
const maximumNumber = function(){
    let max = values[0];
    for (let i = 0; i < values.length; i++) {
        if (values[i] > max){
            max = values[i];
        }
    }
    return max;
}
console.log(maximumNumber());

/**const result = values.reduce((acc, curr) => {
    if( curr > acc ) {
        return curr;
    } else {
        return acc;
    }
}, values[0]);
console.log(result);
 */

 /**
const result = values.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, values[0]);
 */

 const result = values.reduce((acc, curr) => curr > acc ? curr : acc, values[0]);

console.log(result);

// Grouping Objects
/**
{
    30: [
        {name: 'Alice', age: 30},
        {name: 'David', age: 30}
        ],
    25: [{name: 'Bob', age: 25}]
}
 */
const people = [
    {
        name: 'Alice',
        age: 30
    },
    {
        name: 'Bob',
        age: 25
    },
    {
       name: 'David',
       age: 30
    }
];

const peopleResult = people.reduce((acc, curr) => {
    const key = curr.age;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
}, {});
console.log(peopleResult);

const data = [
    {x: 10, y: 20, z: 5},
    {x: 15, y: 20, z: 10},
    {x: 20, y: 20, z: 15},
];

// Result: { x: 15, y: 20, z:10 }
let count = 0;
const averageValue = data.reduce((acc, curr)=> {
    for (const key in curr) {
        if (acc.hasOwnProperty(key)) {
            acc[key] += curr[key];
        } else {
            acc[key] = curr[key]
        }
    }
    count++;
    if (count === data.length) {
        for (const key in acc) {
            acc[key] /= data.length;
        }
    }
    return acc;
    },{});

console.log(averageValue);











