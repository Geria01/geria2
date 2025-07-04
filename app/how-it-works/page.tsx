
import React from 'react';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How Geria <span className="text-blue-600">Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Two simple paths to success: hire elite developers or get a complete development team
          </p>
        </div>
      </section>

      {/* Dual Funnel */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hire Developers Flow */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Hire Developers
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tell Us Your Needs</h3>
                    <p className="text-gray-600">Share your project requirements, tech stack, and timeline</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI-Powered Matching</h3>
                    <p className="text-gray-600">Our algorithm finds the perfect developers from our vetted talent pool</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Interview & Select</h3>
                    <p className="text-gray-600">Meet your matched developers and choose the best fit</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Start Building</h3>
                    <p className="text-gray-600">Your new team member integrates and starts contributing immediately</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/hire-talent" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Hire Developers
                </Link>
              </div>
            </div>

            {/* Build With Our Team Flow */}
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
                Build With Our Team
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Discovery Call</h3>
                    <p className="text-gray-600">We understand your vision, goals, and technical requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Design & Planning</h3>
                    <p className="text-gray-600">Create wireframes, architecture, and detailed project roadmap</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Development</h3>
                    <p className="text-gray-600">Our expert team builds your solution with regular updates</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Launch & Support</h3>
                    <p className="text-gray-600">Deploy to production with ongoing maintenance and support</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/web-development" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How quickly can I get started?</h3>
              <p className="text-gray-600">For hiring developers, we can match you with candidates within 48 hours. For full project development, we can start within one week after the discovery call.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What if I'm not satisfied with the developer?</h3>
              <p className="text-gray-600">We offer a risk-free trial period. If you're not completely satisfied within the first two weeks, we'll find you a replacement at no additional cost.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How do you ensure code quality?</h3>
              <p className="text-gray-600">All our developers follow industry best practices including code reviews, testing, documentation, and continuous integration. We also provide ongoing quality assurance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What time zones do your developers work in?</h3>
              <p className="text-gray-600">Our global talent pool spans all major time zones. We can match you with developers who have significant overlap with your working hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Guarantees
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">If you're not satisfied with the work quality, we'll make it right at no additional cost.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Time Delivery</h3>
              <p className="text-gray-600">We commit to delivering your project on time, or we'll compensate you for any delays.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-gray-600">Your code and data are protected with enterprise-grade security and confidentiality agreements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
