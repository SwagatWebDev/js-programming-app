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

makeAPICall('https://jsonplaceholder.typicode.com/posts')
    .then((response1) => {
        return makeAPICall('https://jsonplaceholder.typicode.com/users')
            .then((response2) => {
                return makeAPICall('https://jsonplaceholder.typicode.com/comments')
                    .then((response3) => {
                        console.log('Data from API Call 1:', response1);
                        console.log('Data from API Call 2:', response2);
                        console.log('Data from API Call 3:', response3);
                    });
            });
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
