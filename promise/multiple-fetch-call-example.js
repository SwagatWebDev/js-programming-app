import fetch from "node-fetch";

function makeAPICall(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP Error: " + response.status);
            }
            return response.json();
        });
}

function makeAPICall1() {
    return makeAPICall('https://jsonplaceholder.typicode.com/posts');
}

function makeAPICall2() {
    return makeAPICall('https://jsonplaceholder.typicode.com/users');
}


function makeAPICall3() {
    return makeAPICall('https://jsonplaceholder.typicode.com/comments');
}

makeAPICall1()
    .then((response1) => {
        console.log('Data from API Call 1:', response1);
        return makeAPICall2();
    })
    .then((response2) => {
        console.log('Data from API Call 2:', response2);
        return makeAPICall3();
    })
    .then((response3) => {
        console.log('Data from API Call 3:', response3);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
