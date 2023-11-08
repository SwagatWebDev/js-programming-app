import fetch from "node-fetch";
function fetchUser(){
    const USER_FETCH_API = 'https://jsonplaceholder.typicode.com/users/1';
    return fetch(USER_FETCH_API)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Failed to fetch user');
            }
            return response.json();
        });
}

function updateUser(user) {
    const UPDATE_USER_API = 'https://jsonplaceholder.typicode.com/users'
    user.id++;
    user.name = 'Swagat';
    return fetch(`${UPDATE_USER_API}/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset= UTF-8'
            }
        }).then((response) => {
        if (!response.ok){
            throw new Error('Failed to update');
        }
        return response.json();
    });
}

fetchUser()
    .then((user) => {
        console.log('User data retrieved', user);
        return updateUser(user);
    }).then((updatedUser) => {
    console.log('User Profile updated', updatedUser);
}).catch((error) => {
    console.log('An error occurred', error);
});
