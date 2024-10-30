import React from 'react';
import UsersList from './UsersList';
import UserAddForm from './UserAddForm';
import UserUpdateForm from './UserUpdateForm';
import UserDeleteForm from './UserDeleteForm';

export default function MainPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Users Management</h1>
      <UsersList />
      <UserAddForm />
      <UserUpdateForm />
      <UserDeleteForm />
    </div>
  );
}