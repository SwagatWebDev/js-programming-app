const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       const operationSuccessful = false;
       if(operationSuccessful){
           resolve('Success');
       } else {
           reject('Failure')
       }
    }, 2000)
});

myPromise.then((result) => {
    console.log('Promise resolved result', result);
}).catch((error) => {
    console.log('Promise rejected with error', error)
})
