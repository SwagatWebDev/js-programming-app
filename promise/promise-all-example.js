import fetch from "node-fetch";

function makeAPICalls(url){
    return fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error('HTTP Error', response.status);
            }
            return response.json();
        })
}

Promise.all([
    makeAPICalls('https://jsonplaceholder.typicode.com/posts'),
    makeAPICalls('https://jsonplaceholder.typicode.com/users'),
    makeAPICalls('https://jsonplaceholder.typicode.com/comments')
]).then(([response1, response2, response3]) => {
    console.log(response1);
    console.log(response2);
    console.log(response3);
}).catch((error) => {
    console.log('An error occurred', error);
})
