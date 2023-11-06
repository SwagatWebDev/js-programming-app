const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (resolve) {
            resolve('First Promise Statement');
        }
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (resolve) {
            resolve('First Promise Statement');
        }
    }, 10000);
});

async function handlePromise() {
    console.log('handlePromise call started');
    const resolveValue1 = await p1;
    console.log('first promise resolved',)
    console.log(resolveValue1);
    const resolveValue2 = await p2;
    console.log('second promise resolved',)
    console.log(resolveValue2);
}
handlePromise();
