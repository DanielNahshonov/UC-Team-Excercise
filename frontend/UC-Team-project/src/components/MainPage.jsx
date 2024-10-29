import React from 'react';
import UsersList from './UsersList';
import UserAddForm from './UserAddForm';
import UserUpdateForm from './UserUpdateForm';
import UserDeleteForm from './UserDeleteForm';

export default function MainPage() {
  return (
    <div>
    <h1>Users Management</h1>
    <UsersList />
    <UserAddForm />
    <UserUpdateForm />
    <UserDeleteForm />
</div>  )
}
