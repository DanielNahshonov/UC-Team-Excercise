import React, { useState } from 'react';

export default function UserDeleteForm() {
    const [userId, setUserId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://127.0.0.1:5000/users/${userId}`, {
            method: 'DELETE',
        });

        // Clear form
        setUserId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Delete User</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                required
            />
            <button type="submit">Delete User</button>
        </form>
    );
};
