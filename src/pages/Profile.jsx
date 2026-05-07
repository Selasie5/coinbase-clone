import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Your Profile</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6 border-bottom pb-6">
          <label className="text-sm font-medium text-gray-500">Name</label>
          <p className="mt-1 text-xl font-semibold text-gray-900">{user?.name}</p>
        </div>
        <div className="mb-8">
          <label className="text-sm font-medium text-gray-500">Email Address</label>
          <p className="mt-1 text-xl font-semibold text-gray-900">{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="rounded-lg bg-red-50 px-6 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
