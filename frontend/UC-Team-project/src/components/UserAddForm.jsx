import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function UserAddForm({ fetchUsers }) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { user_id: userId, user_name: userName, user_age: userAge };

    toast.promise(
      fetch("http://127.0.0.1:5000/add_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 400) {
            throw new Error('Invalid user data');
          }
          if (response.status === 409) {
            toast.error('User already exists'); 
            throw new Error('User already exists'); 
          }
          throw new Error(errorData.error || "Failed to add user"); 
        }
        
        setUserId("");
        setUserName("");
        setUserAge("");
        fetchUsers();
      }),
      {
        loading: "Saving...",
        success: <b>User added successfully!</b>,
        error: (error) => <b>{error.message}</b>, 
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">Add User</h2>
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
        placeholder="User Name"
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
        placeholder="User Age"
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
      >
        Add User
      </button>
    </form>
  );
}