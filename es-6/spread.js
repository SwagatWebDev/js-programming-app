// Array Concatenation
const numbers = [1, 2, 3];
const additionalNumbers = [4, 5];
console.log(numbers.concat(additionalNumbers));

const merged = [...numbers, ...additionalNumbers];
console.log(merged);

// Copying Array
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);

// Spreading an Object
const person = {name: "Alice"};
const details = {age: 40, city: 'Delhi'};
const mergedObject = {...person, ...details};
console.log(mergedObject);

// clone a object
const originalObject = {name: 'Alice', age: 40};
const clonedObject = {...originalObject};
console.log(clonedObject);

// copying Array of Objects
const originalArray = [{id: 1}, {id: 2}]
const copiedArray = [...originalArray];
console.log(copiedArray);
