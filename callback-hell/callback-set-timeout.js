function toastBread(callback) {
    console.log('Step-1: Toasting bread...');
    setTimeout(function(){
        console.log('Bread toasted!');
        callback();
    }, 2000);
}

function makeSauce(callback) {
    console.log('Step-2: Making sauce...');
    setTimeout(function(){
        console.log('Sauce made!');
        callback();
    }, 1500);
}

function addIngredients(callback) {
    console.log('Step-3: Adding Ingredients...');
    setTimeout(function(){
        console.log('Ingredients added!');
        callback();
    }, 1000);
}

// start sandwich making process
toastBread(function (){
    makeSauce(function (){
        addIngredients(function (){
            console.log('Sandwich is ready');
        })
    })
})
