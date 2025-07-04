
'use client';
import React, { useState } from 'react';
import { useAuth } from '../_context/AuthContext';
import AdminLogin from '../_components/AdminLogin';
import BlogManagement from '../_components/BlogManagement';

export default function AdminPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const isAdmin = user?.role === 'admin';

  return (
    <div className="min-h-screen bg-gray-50">
      {isAdmin ? <BlogManagement /> : <AdminLogin />}
    </div>
  );
}
