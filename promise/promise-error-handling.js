function fetchUserData() {
    // Simulate fetching user data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "John", age: 10 };
            resolve(user);
        }, 2000); // Simulating a delay of 2 seconds
    });
}
function updateUserProfile(user) { // Simulate updating user profile
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.age += 1;
            resolve(user);
        }, 1500); // Simulating a delay of 1.5 seconds
    });
}
// Usage of Promises to fetch and update user data with error handling
fetchUserData()
    .then((user) => {
        if (user.age < 18) {
            throw new Error("User is underage.");
        }
        return updateUserProfile(user);
    })
    .then((updatedUser) => {
        console.log("User profile updated:", updatedUser);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
