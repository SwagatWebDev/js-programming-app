import fetch from 'node-fetch';

function makeAPICall(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('HTTP Error: ' + response.status);
            }
            return response.json();
        });
}

// Use Promise.race to fetch data from multiple APIs and resolve with the first response
Promise.race([
    makeAPICall('https://jsonplaceholder.typicode.com/posts'),
    makeAPICall('https://jsonplaceholder.typicode.com/users'),
    makeAPICall('https://jsonplaceholder.typicode.com/comments')
])
    .then((firstResponse) => {
        // Continue with data from the first API that responded
        console.log('Data from the first API to respond:', firstResponse);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
