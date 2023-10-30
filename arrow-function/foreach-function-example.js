// Higher Order Equivalent Function
const numbers = [1, 2, 3, 4, 5];
function myForEach(arr, action){
    for (let i = 0; i< arr.length; i++) {
        action(arr[i]);
    }
}

myForEach(numbers, num => console.log(num));

//forEach
numbers.forEach(num => {
    console.log(num)
});

const names = ['Swagat', 'Alice', 'Bob'];
names.forEach((name,index,array) => {
    array[index] = name.toUpperCase();
});
console.log(names);
// const result = [];
// names.forEach(name => {
//     return result.push(name.toUpperCase());
// });
//console.log(result);

// sum all the elements
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum);

const product = [
    {name: 'widget', price: 10},
    {name: 'gadget', price: 20},
    {name: 'misc', price: 5}
];
product.forEach(product => {
    if(product.price > 15){
        product.discounted = true
    }
});
console.log(product);




