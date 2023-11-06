const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        const operationSuccessful = true; // Change to false to simulate failure
        if (operationSuccessful) {
            resolve("Success!");
        }
        else {
            reject("Failure!");
        }
    }, 2000); // Simulating a 2-second delay
});



myPromise
    .then((result) => {
        console.log("Promise resolved with result:", result);
    })
    .catch((error) => {
        console.error("Promise rejected with error:", error);
    });

