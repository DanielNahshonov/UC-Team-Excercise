import React, { useState, useEffect } from "react";
import UsersList from './UsersList';
import UserAddForm from './UserAddForm';
import UserUpdateForm from './UserUpdateForm';
import UserDeleteForm from './UserDeleteForm';

export default function MainPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/users");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Users Management</h1>
      <UsersList users={users} fetchUsers={fetchUsers} />
      <UserAddForm fetchUsers={fetchUsers}/>
      <UserUpdateForm fetchUsers={fetchUsers} />
      <UserDeleteForm fetchUsers={fetchUsers} />
    </div>
  );
}