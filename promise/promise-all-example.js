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

// Use Promise.all to fetch data from multiple APIs and wait for all of them to resolve
Promise.all([
    makeAPICall('https://jsonplaceholder.typicode.com/posts'),
    makeAPICall('https://jsonplaceholder.typicode.com/users'),
    makeAPICall('https://jsonplaceholder.typicode.com/comments')
])
    .then(([response1, response2, response3]) => {
        // Continue with data from all three API calls
        console.log('Data from API Call 1:', response1);
        console.log('Data from API Call 2:', response2);
        console.log('Data from API Call 3:', response3);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
