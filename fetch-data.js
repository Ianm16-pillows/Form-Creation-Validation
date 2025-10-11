// 1. Async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // 2. Fetch the data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 3. Clear the loading message
        dataContainer.innerHTML = '';

        // 4. Create a list
        const userList = document.createElement('ul');

        // 5. Loop through each user and add to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 6. Add the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// 8. Run the fetch after the page loads
document.addEventListener('DOMContentLoaded', fetchUserData);
