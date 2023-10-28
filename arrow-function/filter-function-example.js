//higher-order-equivalent-filter-function
const numbers = [1, 2, 3, 4, 5];
function myFunction(arr, condition){
    const result = [];
    for(let i= 0; i < arr.length; i++){
        if(condition(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
const evenNumberResult = myFunction(numbers, (num) => num % 2 === 0);
/** const evenNumber = myFunction(numbers, function (num){
     return num % 2 === 0;
 });*/
console.log(evenNumberResult);

// Filter
const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);

// Specified Result
const names = ['Swagat', 'Deepak', 'Tridib', 'David'];
const namesStartingWithD = names.filter(name => name[0] === 'D');
console.log(namesStartingWithD);

// filter object from an array based on properties
const products = [
    {name: 'Watch', price: 1000},
    {name: 'Wallet', price: 100},
    {name: 'Sunglasses', price: 200}
];
const affordableProducts = products.filter(product => product.price > 500);
console.log(affordableProducts);

// transforming a complex data

const data = [
    {
        category: 'Fruits',
        items: ['Apple', 'Grapes', 'Orange']
    },
    {
        category: 'Vegetables',
        items: ['Carrot', 'Onion', 'Tomato']
    }
];
const filteredResult = data.filter(category => category.category === 'Fruits')
    .map(category => category.items.filter(item => item.startsWith('O')));
console.log(filteredResult);

// combine
// even and greater than 10
const number = [1, 7, 2, 3, 14, 5, 32];
const filteredNumber = number.filter(num => num % 2 === 0 && num > 10);
console.log(filteredNumber);

// custom functions
const students = [
    {name: 'Alice', grade: 'A'},
    {name: 'Swagat', grade: 'A'},
    {name: 'Bob', grade:  'B'},
    {name: 'David', grade: 'C'}
];
const highAchievers = students.filter(student => student.grade === 'A');
console.log(highAchievers);


