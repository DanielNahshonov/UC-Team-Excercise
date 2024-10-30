import React, { useState } from 'react';

export default function UserDeleteForm() {
    const [userId, setUserId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://127.0.0.1:5000/users/${userId}`, {
            method: 'DELETE',
        });
        setUserId('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Delete User</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
                type="submit"
                className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition"
            >
                Delete User
            </button>
        </form>
    );
}