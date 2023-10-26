// Object.create
const personObj = Object.create(null);
personObj.name = 'John';
personObj.age = 30;
personObj.job = 'Engineer'

// Access Objects
const personData = {name: 'John', age: 30, city: 'Bangalore'};
console.log(personData.name);
console.log(personData['name']);

// keys
const keys = Object.keys(personData);
console.log(keys);

// values
const values= Object.values(personData);
console.log(values);

//  entries
console.log(Object.entries(personData));

//  Custom Functions
function Person(name, age){
    this.name = name;
    this.age = age;
}
const personObject = new Person("John", 30);
console.log(personObject.name);

// Built-in Object
const today = Date();
console.log(today);

const randomValues = Math.random();
console.log(randomValues);

const colors = new Array('green', 'red', 'blue');
console.log(colors);

colors.push('White');
console.log(colors);

// Object Iteration
const person = {name: 'john', age: 30};
for (let key in person){
    console.log(key, ':', person[key]);
}

const fruits = ['Apple', 'Grapes', 'Orange']
console.log(fruits);
fruits[1] = 'Cherry';
console.log(fruits);
fruits.push('kiwi', 'banana');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('Pears', 'Guava');
console.log(fruits);
fruits.shift();
console.log(fruits);

const moreFruits = ['Pineapple', 'Watermelon'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//join()
const fruitString = fruits.join(' / ');
console.log(fruitString);

// slice()
console.log(fruits);
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

// splice()
const fruitsArray = ['Apple', 'Grapes', 'Orange', 'Guava'];

// to add elements at a specific index
fruitsArray.splice(2, 0, 'kiwi', 'date');
console.log(fruitsArray);

// to remove elements
fruitsArray.splice(1, 2);
console.log(fruitsArray);

// To replace elements at a specified index
fruitsArray.splice(2, 1, 'strawberry');
console.log(fruitsArray);












