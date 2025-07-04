
'use client';
import React, { useState } from 'react';
import { useAuth } from '../_context/AuthContext';
import CandidateLogin from '../_components/CandidateLogin';
import CandidateDashboard from '../_components/CandidateDashboard';

export default function CandidatePortalPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {user ? <CandidateDashboard /> : <CandidateLogin />}
    </div>
  );
}
