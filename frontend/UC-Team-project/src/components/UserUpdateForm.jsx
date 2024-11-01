import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function UserUpdateForm({ fetchUsers }) {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {};
        if (userName) user.user_name = userName;
        if (userAge) user.user_age = userAge;

        toast.promise(
            fetch(`http://127.0.0.1:5000/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    if (response.status === 404) {
                        throw new Error('User not found'); 
                    }
                    throw new Error(errorData.error || 'Failed to update user');
                }
                fetchUsers(); 
                return 'User updated successfully!'; 
            }),
            {
                loading: 'Updating...',
                success: (message) => <b>{message}</b>, 
                error: (error) => <b>{error.message}</b>, 
            }
        );

        setUserId('');
        setUserName('');
        setUserAge('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Update User</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="New User Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                placeholder="New User Age"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
            >
                Update User
            </button>
        </form>
    );
}