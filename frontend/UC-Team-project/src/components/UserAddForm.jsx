import React, { useState } from 'react';

export default function UserAddForm() {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { user_id: userId, user_name: userName, user_age: userAge };

        await fetch('http://127.0.0.1:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        // Clear form
        setUserId('');
        setUserName('');
        setUserAge('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                required
            />
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User Name"
                required
            />
            <input
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                placeholder="User Age"
                required
            />
            <button type="submit">Add User</button>
        </form>
    );
};