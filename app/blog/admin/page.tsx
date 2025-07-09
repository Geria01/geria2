
'use client';

import { useState } from 'react';
import { useAuth } from '../../_context/AuthContext';
import BlogCMS from '../../_components/BlogCMS';
import AdminLogin from '../../_components/AdminLogin';

export default function BlogAdminPage() {
  const { user } = useAuth();
  const isAuthenticated = user?.role === 'admin';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Administration</h1>
          <p className="text-gray-600 mt-2">Manage your blog content and posts</p>
        </div>

        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <AdminLogin />
          </div>
        ) : (
          <BlogCMS isAuthenticated={isAuthenticated} />
        )}
      </div>
    </div>
  );
}
