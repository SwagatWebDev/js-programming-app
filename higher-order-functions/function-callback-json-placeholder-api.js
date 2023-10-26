import fetch from 'node-fetch';

function fetchTodoData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data (Status ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Todo Data:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchTodoData();
