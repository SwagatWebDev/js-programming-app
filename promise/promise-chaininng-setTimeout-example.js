// Fetching user profile
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {name: 'Swagat', age: 29}
            resolve(user);
        }, 2000);
    })
}

// Update user Profile
function updateUserProfile(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.age += 1;
            user.name = 'Tridib';
            resolve(user);
        }, 1500)
    });
}

fetchUser()
    .then((user) => {
        console.log('User Profile Fetched for', user);
        return updateUserProfile(user);
    }).then((updateUser) => {
    console.log('User Profile is updated', updateUser);
}).catch((error) => {
    console.log('An error encountered:', error)
})

