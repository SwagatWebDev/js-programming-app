function delayedAction(callback, delay) {
    setTimeout(callback, delay);
}

function greet() {
    console.log('Hello, World!');
}

delayedAction(greet, 2000);
