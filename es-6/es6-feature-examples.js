// Destructuring Objects
const person = {firstName: 'John', lastName: 'Doe'};
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// nested Destructuring
const employee = {
    name: {
        first: 'Swagat',
        last: 'Mishra'
    }
}
const {name: {first, last}} = employee;
console.log(first);
console.log(last);

// default values
const student = { studentFirstName: 'Ram'};
const { studentFirstName, studentLastName = 'Dave'} = student;
console.log(studentFirstName);
console.log(studentLastName);

// Renaming variables
const teacher = {teacherFirstName: 'John', teacherLastName: 'Doe'};
const {teacherFirstName: firstNameTeacher, teacherLastName: lastNameTeacher } = teacher;
console.log(firstNameTeacher);
console.log(lastNameTeacher);
console.log(teacher);

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [firstVariable, , , forthVariable] = numbers;
console.log(firstVariable);
console.log(forthVariable);

// swapping value
let a = 5;
let b = 10;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

// rest element
const [firstVar, ...rest] = numbers;
console.log(firstVar);
console.log(rest);

// For of
const items = [['apple', 3], ['banana', 2], ['cherry', 5]]
for (const [fruit, quantity] of items) {
    console.log(`Fruit is: ${fruit}, Quantity is: ${quantity}`);
}

// Function Parameter
function getUserInfo([name, age]) {
    console.log('Name is:', name);
    console.log(`Age is: ${age}`);
}
const userData = ['Swagat', 29]
getUserInfo(userData);

// Nested Array Destructuring
const data  = [1, [2, 3], 4];
const [firstData, [secondData, thirdData], fourthData] = data;
console.log(firstData);
console.log(secondData);
console.log(thirdData);
console.log(fourthData);





