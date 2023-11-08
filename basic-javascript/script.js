// const API_URL = 'https://jsonplaceholder.typicode.com/usrs/1';
// function getData(){
//     return new Promise((resolve, reject) => {
//         const flag = false;
//         if(flag) {
//             resolve('Welcome to MERN Stack');
//         }
//     })
// }
//
// const getDataValue = getData();
// console.log(getDataValue);
// getDataValue.then(data => console.log(data)).catch(error => console.log(error));
//
//
// const user = fetch(API_URL);
// console.log(user);
// user.then(data => {
//     if(!data.ok) {
//        throw new Error('Error Occurred');
//     }
//    return data.json();
// })
//     .then(result => console.log(result))
//     .catch(error => console.log('An Error Occurred', error));
//
// // Use Promise.all to fetch data from multiple APIs and wait for all of them to resolve
// Promise.race([
//     fetch('https://jsonplaceholder.typicode.com/pots'),
//     fetch('https://jsonplaceholder.typicode.com/users'),
//     fetch('https://jsonplaceholder.typicode.com/comments')
// ])
//     .then((responseValue) => {
//         // Continue with data from all three API calls
//         if(!responseValue.ok) {
//             throw new Error('Error Occurred')
//         }
//         console.log('Data from API Call 1:', responseValue);
//     })
//     .catch((error) => {
//         console.error('An error occurred:', error);
//     });
//
//
//

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

async function fetchData(){
    console.log('Welcome to MERN Stack');
    const p = await fetch(API_URL);
    const promiseData = await p.json();
    console.log(promiseData);
    console.log('Welcome to MERN Stack');
}
fetchData();
