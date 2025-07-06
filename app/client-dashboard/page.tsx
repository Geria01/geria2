
"use client";
import React, { useState } from 'react';
import { useAuth } from '../_context/AuthContext';
import Link from 'next/link';

export default function ClientDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'projects', name: 'Projects', icon: '💼' },
    { id: 'talent', name: 'Talent Pool', icon: '👥' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in</h2>
          <Link href="/client-login" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user.firstName || user.email}</span>
              <button
                onClick={logout}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3 text-lg">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-900">Active Projects</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">3</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-900">Hired Talent</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">12</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-900">Total Spent</h3>
                    <p className="text-3xl font-bold text-purple-600 mt-2">$45,200</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link
                      href="/hire-talent"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                    >
                      Hire New Talent
                    </Link>
                    <Link
                      href="/web-development"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition-colors"
                    >
                      Start New Project
                    </Link>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      View Reports
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600">Project management features coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'talent' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Talent Pool</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600">Browse and manage your talent pool...</p>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Billing & Invoices</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600">Billing management features coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600">Account settings and preferences...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
