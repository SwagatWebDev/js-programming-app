// higher-order-equivalent-map-function
const numbers = [1, 2, 3, 4, 5];
function myMap(arr, transformation){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(transformation(arr[i]));
    }
    return result;
}
const multiply = function (num){
    return num * num;
};

const squareNumber = myMap(numbers, multiply);
console.log(squareNumber);

// map
const squareResult = numbers.map(num => num * num);
console.log(squareResult);

const addResult = numbers.map(num => num + num);
console.log(addResult);

const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

const fruits = ['apple', 'banana', 'grapes'];
const result1 = function () {
    const resultArr = [];
    for (let i = 0; i < fruits.length; i++) {
        resultArr.push(fruits[i].toUpperCase());
    }
    return resultArr;
}
console.log(result1());

const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits)

// Extracting Specific Properties of an object
// ['John', 'Alice', 'Bob']
const people = [
    {name: 'John', age: 30},
    {name: 'Alice', age: 35},
    {name: 'Bob', age: 40}
];

function xyz() {
    const result = [];
    for (let i = 0; i < people.length; i++) {
        result.push(people[i].name);
    }
    return result
}
console.log(xyz());

const names = people.map(p => p.name);
console.log(names);

const number =  [4, 9, 16, 25];
console.log(number.map(n => Math.sqrt(n)));

// Refactor Object
const data = [
    { id: 1, label :'swagat'},
    { id: 2, label: 'Dilip'},
    { id: 3, label: 'Deepak'}
];

const formattedDataRequirement = [
    { key: 1, value :'swagat'},
    { key: 2, value: 'Dilip'},
    { key: 3, value: 'Deepak'}
];

const formattedData = data.map(item => ({key: item.id, value: item.label}));
console.log(formattedData);

// [number, square, cube]

const inputNumber = [1, 2, 3, 4, 5];
const squareAndCube = inputNumber.map(input => {
    const square = input ** 2;
    const cube = input ** 3;
    return {input, square, cube};
});
console.log(squareAndCube);

// From an array of string calculate their character counts and reverse them
const words = ['apple', 'banana', 'cherry'];
const transformedWords = words.map(word => {
    const charCount = word.length;
    const reverseWord = word.split('').reverse().join('');
    return {word, charCount, reverseWord};
});
console.log(transformedWords);

// Mapping an array of dates to format them as strings
const dates = [new Date(), new Date('2023-01-15'), new Date ('2024-05-20')];
const formattedDates = dates.map(date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
})
console.log(formattedDates);

//Mapping an Array of Objects to extract particular properties
const products = [
    {name: 'Watch', price: 1000},
    {name: 'Wallet', price: 100},
    {name: 'Sunglasses', price: 200}
];
const modifiedProducts = products.map(product => {
    const discountedPrice = product.price * 0.9;
    return { name: product.name, product: discountedPrice}
});
console.log(modifiedProducts);











