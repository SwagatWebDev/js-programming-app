function toastBread(callback) {
    console.log('Step 1: Toasting the bread...');
    setTimeout(function () {
        console.log('Bread toasted!');
        callback();
    }, 2000); // Simulating a 2-second toasting process
}

function makeSauce(callback) {
    console.log('Step 2: Making the sauce...');
    setTimeout(function () {
        console.log('Sauce made!');
        callback();
    }, 1500); // Simulating a 1.5-second sauce-making process
}


function addIngredients(callback) {
    console.log('Step 3: Adding ingredients...');
    setTimeout(function () {
        console.log('Ingredients added!');
        callback();
    }, 1000); // Simulating a 1-second ingredient-adding process
}

// Start the sandwich-making process
toastBread(function () {
    makeSauce(function () {
        addIngredients(function () {
            console.log('Sandwich is ready! Enjoy!');
        });
    });
});
