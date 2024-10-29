import React, { useState, useEffect } from 'react';

export default function UsersList() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('http://127.0.0.1:5000/users');
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <button onClick={fetchUsers}>Show Users</button>
            <ul>
                {users.map(user => (
                    <li key={user.user_id}>{user.user_name} (Age: {user.user_age})</li>
                ))}
            </ul>
        </div>
    );
}
