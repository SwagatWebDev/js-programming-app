// Object.create
const personObj = Object.create(null);
personObj.name = 'John';
personObj.age = 30;
personObj.job = 'Engineer'

// Access Objects
const person = {name: 'John', age: 30, city: 'Bangalore'};
console.log(person.name);
console.log(person['name']);

// keys
const keys = Object.keys(person);
console.log(keys);

// values
const values= Object.values(person);
console.log(values);

//  entries
console.log(Object.entries(person));

Custom
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

Object Iteration
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
const fruits = ['Apple', 'Grapes', 'Orange', 'Guava'];

// to add elements at a specific index
fruits.splice(2, , 'kiwi', 'date');
console.log(fruits);

// to remove elements
fruits.splice(1, 2);
console.log(fruits);

// To replace elements at a specified index
fruits.splice(2, 1, 'strawberry');
console.log(fruits);












