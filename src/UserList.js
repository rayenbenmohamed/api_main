import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);
        })
            .catch(error => {
                console.error('An error occurred:', error);
        });
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
        ))}
            </ul>
        </div>
    );
}

export default UserList;
