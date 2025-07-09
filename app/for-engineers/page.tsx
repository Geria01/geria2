
import React from 'react';

export default function ForEngineersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Join the Global <span className="text-[#D0021B]">Elite</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Work with world-class companies, earn competitive rates, and grow your career 
                in our remote-first talent network.
              </p>
              <a href="https://geria-2-hello3273.replit.app/candidate-portal?tab=signup" className="bg-[#D0021B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F5A623] transition-colors inline-block">
                Apply Now
              </a>
            </div>
            <div>
              <img 
                src="/images/for-engineers-hero.jpg"
                alt="Remote engineers"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Top Engineers Choose Geria
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
              <p className="text-gray-600">Earn top-market rates with transparent pricing and regular rate reviews</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Clients</h3>
              <p className="text-gray-600">Work with innovative companies from startups to Fortune 500</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
              <p className="text-gray-600">Access to challenging projects and continuous learning opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Selective Vetting Process
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D0021B] font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Application</h3>
                <p className="text-sm text-gray-600">Submit your profile and portfolio</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D0021B] font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Technical Test</h3>
                <p className="text-sm text-gray-600">Complete coding challenges</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D0021B] font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Live Coding</h3>
                <p className="text-sm text-gray-600">Real-time problem solving</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D0021B] font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Soft Skills</h3>
                <p className="text-sm text-gray-600">Communication assessment</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D0021B] font-bold">5</span>
                </div>
                <h3 className="font-semibold mb-2">Welcome</h3>
                <p className="text-sm text-gray-600">Join our elite network</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-[#D0021B]">Only 3%</span> of applicants make it through our rigorous process
            </p>
          </div>
        </div>
      </section>

      {/* Remote Culture */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Remote-First Culture
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Built for Remote Excellence</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible working hours across all time zones
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Async communication and collaboration tools
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regular team building and knowledge sharing
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional development opportunities
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Work-life balance and mental health support
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/home_page_hero_img_2.jpg"
                alt="Remote work culture"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="/images/avatar6.png" alt="Engineer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Alex Chen</h4>
                  <p className="text-gray-600 text-sm">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Joining Geria transformed my career. I've worked on cutting-edge projects with top-tier companies 
                and increased my income by 60% while maintaining perfect work-life balance."
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Project:</span> Led development of AI-powered fintech platform
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="/images/placholder_avatar1.jpg" alt="Engineer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Maria Rodriguez</h4>
                  <p className="text-gray-600 text-sm">DevOps Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The quality of clients and projects at Geria is exceptional. I've grown from mid-level to senior 
                engineer in just 18 months, working with Fortune 500 companies."
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Achievement:</span> Scaled infrastructure to handle 10M+ users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#D0021B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Elite Network?</h2>
          <p className="text-xl text-red-100 mb-8">
            Take the first step towards working with world-class companies and advancing your career.
          </p>
          <a href="https://geria-2-hello3273.replit.app/candidate-portal?tab=signup" className="bg-white text-[#D0021B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
