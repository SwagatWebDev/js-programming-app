// Simulate fetching user data
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "John", age: 30 };
            resolve(user);
        }, 2000); // Simulating a delay of 2 seconds
    });
}
// Simulate updating user profile
function updateUserProfile(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.age += 1;
            resolve(user);
        }, 1500); // Simulating a delay of 1.5 seconds
    });
}
// Usage of Promises to fetch and update user data
fetchUserData()
    .then((user) => {
        console.log("User data fetched:", user);
        return updateUserProfile(user);
    })
    .then((updatedUser) => {
        console.log("User profile updated:", updatedUser);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
