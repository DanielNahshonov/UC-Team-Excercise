import React, { useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleToggleUsers = () => {
    if (!showUsers) {
      fetchUsers();
    }
    setShowUsers(!showUsers);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <button
        onClick={handleToggleUsers}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
      >
        {showUsers ? "Hide Users" : "Show Users"}
      </button>
      {showUsers && (
        <ul className="mt-4 space-y-2">
          {users.map((user) => (
            <li
              key={user.user_id}
              className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <p className="font-semibold text-gray-800">{user.user_name}</p>
              <p className="text-gray-600">Age: {user.user_age}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}