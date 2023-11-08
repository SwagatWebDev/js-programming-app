// async function fetchData(){
//     return 'Data Fetched';
// }
//
// const data = fetchData();
// data.then(res => console.log(res));

// const p = new Promise((resolve, reject) => {
//     resolve('Data Fetched');
// });
// async function getData(){
//     return p;
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then(res => console.log(res));

import fetch from "node-fetch";

const API_URL = 'https://api.github.com/users/SwagatWebDev';

async function fetchData(){
    console.log('Welcome to MERN Stack');
    const p = await fetch(API_URL);
    const promiseData = await p.json();
    console.log('Welcome to MERN Stack');
    console.log(promiseData);
}
fetchData();
