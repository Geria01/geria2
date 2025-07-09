
'use client';
import React, { useState } from 'react';

export default function RequestTalentPage() {
  const [formData, setFormData] = useState({
    workEmail: '',
    phoneNumber: '',
    message: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thanks!</h2>
          <p className="text-gray-600">Our team will get in touch shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Textual Intro */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Request Talent Now
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Looking to scale your team with top global talent? Our experts will help you find skilled professionals that match your needs, fast. Request a call and we'll take care of the rest.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">150K+</div>
                <div className="text-sm text-gray-600">
                  Top rated,<br />
                  highly skilled<br />
                  global talent
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">33%</div>
                <div className="text-sm text-gray-600">
                  Faster project<br />
                  delivery
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">66%</div>
                <div className="text-sm text-gray-600">
                  Faster time<br />
                  to hire
                </div>
              </div>
            </div>

            
          </div>

          {/* Right Side - Form Card */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  WORK EMAIL: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  PHONE NUMBER: <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  MESSAGE: <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your talent needs: roles, skill sets, timelines, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                  I UNDERSTAND THAT GERIA WILL PROCESS MY INFORMATION IN ACCORDANCE WITH THEIR{' '}
                  <a href="/terms" className="text-blue-600 underline hover:text-blue-800">
                    TERMS OF USE
                  </a>
                  . I MAY WITHDRAW MY CONSENT THROUGH UNSUBSCRIBE LINKS AT ANY TIME.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
