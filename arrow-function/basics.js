function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// parameter => expression
const result = (a, b) => a + b;
console.log(result(2, 3));

const square = a => a * a;
console.log(square(5));

// callback
setTimeout(function (){
    console.log("Callback Function called")
}, 2000);

setTimeout(() => {
    console.log("Callback Function called");
}, 2000);
