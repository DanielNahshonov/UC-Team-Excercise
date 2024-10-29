import React, { useState } from 'react';

export default function UserUpdateForm() {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {};
        if (userName) user.user_name = userName;
        if (userAge) user.user_age = userAge;

        await fetch(`http://127.0.0.1:5000/users/${userId}`, {
            method: 'PUT',
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
            <h2>Update User</h2>
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
                placeholder="New User Name"
            />
            <input
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                placeholder="New User Age"
            />
            <button type="submit">Update User</button>
        </form>
    );
};

