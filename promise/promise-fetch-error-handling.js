import fetch from "node-fetch";

// Function to fetch user data from JSONPlaceholder API
function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            return response.json();
        })
        .then((user) => {
            if (user.age < 18) {
                throw new Error('User is underage.');
            }
            return user;
        });
}

// Function to update user profile (simulated)
function updateUserProfile(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            user.age += 1;
            resolve(user);
        }, 1500); // Simulating a delay of 1.5 seconds
    });
}

// Usage of Promises to fetch and update user data with error handling
fetchUserData()
    .then((user) => {
        console.log('User Info Fetched', user);
        return updateUserProfile(user);
    })
    .then((updatedUser) => {
        console.log('User profile updated:', updatedUser);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });

