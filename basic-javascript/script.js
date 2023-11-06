import fetch from "node-fetch";
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('HTTP Error: ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchUserData()
    .then((user) => {
        console.log('Fetched user data:', user);
    });
