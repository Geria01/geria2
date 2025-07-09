
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-50 to-red-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-red-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful web development projects. From e-commerce platforms to enterprise solutions, 
              we've helped businesses transform their digital presence.
            </p>
          </div>
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/web-development" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Web Development
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 - Inna3D */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">3D Rendering</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Inna3D Project</h3>
                <p className="text-gray-600 mb-4">
                  Providing top-quality 3D rendering services to property developers, interior designers, yacht design studios, and architects across every continent.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Web Design</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Lead Generation</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Gallery</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Architecture CGI</span>
                  <a href="https://webdesign.geria.io/inna3d" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Case Study
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - MCB Trees */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Tree Management</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">MCB Trees Management</h3>
                <p className="text-gray-600 mb-4">
                  Professional tree surgeon business offering essential services such as tree removal, pruning, stump grinding, and emergency tree care.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Service Pages</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Quote System</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Tree Services</span>
                  <a href="https://webdesign.geria.io/mcbtrees" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Case Study
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Riddance App */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Cleaning Management</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Riddance App</h3>
                <p className="text-gray-600 mb-4">
                  Automated system that brings all guest bookings together into one centralized dashboard for managing cleaning schedules with ease.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Web App</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Automation</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Dashboard</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Vacation Rental</span>
                  <a href="https://webdesign.geria.io/riddance" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Case Study
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Projects - Placeholder for future projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">E-commerce Platform</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">E-commerce Solution</h3>
                <p className="text-gray-600 mb-4">
                  A full-featured e-commerce platform with payment integration, inventory management, and responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Online Store</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Projects - Fintech */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Fintech Platform</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Digital Banking Solution</h3>
                <p className="text-gray-600 mb-4">
                  A secure fintech platform with payment processing, account management, and compliance features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">.NET Core</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">SQL Server</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Banking</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Projects - Healthcare */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Healthcare Platform</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Telemedicine Solution</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive healthcare platform with appointment scheduling, video consultations, and patient records.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Django</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Healthcare</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured <span className="text-red-600">Case Studies</span></h2>
            <p className="text-xl text-gray-600">Detailed insights into our most successful projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Inna3D</h3>
              <p className="text-gray-600 mb-4">CGI services platform with lead generation focus</p>
              <div className="text-sm text-gray-500 mb-3">✓ Simplified website design<br/>✓ Enhanced lead generation<br/>✓ Easy render request system</div>
              <a href="https://webdesign.geria.io/inna3d" target="_blank" className="text-red-600 hover:text-red-700 font-medium">View Full Case Study →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">MCB Trees</h3>
              <p className="text-gray-600 mb-4">Tree management services with modern design</p>
              <div className="text-sm text-gray-500 mb-3">✓ Professional design<br/>✓ Intuitive navigation<br/>✓ Detailed service pages</div>
              <a href="https://webdesign.geria.io/mcbtrees" target="_blank" className="text-red-600 hover:text-red-700 font-medium">View Full Case Study →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Riddance App</h3>
              <p className="text-gray-600 mb-4">Automated cleaning management system</p>
              <div className="text-sm text-gray-500 mb-3">✓ Calendar synchronization<br/>✓ Centralized management<br/>✓ Real-time tracking</div>
              <a href="https://webdesign.geria.io/riddance" target="_blank" className="text-red-600 hover:text-red-700 font-medium">View Full Case Study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Project <span className="text-red-600">Statistics</span></h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-red-100">
            Let's discuss how we can help bring your vision to life with our proven development process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-talent" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
            <Link href="/web-development" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
