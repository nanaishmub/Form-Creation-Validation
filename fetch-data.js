async function fetchUserData() {
    const apiUrl = fetch('https://jsonplaceholder.typicode.com/users');

    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = "";

        const userList = document.createElement('ul');
        users.forEach(user => {
            const userElement = document.createElement('li');
            userElement.textContent = users.name;
            userList.push(userElement);
        })

        dataContainer.innerHTML =`${userList}`;
    } 
    catch{
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);