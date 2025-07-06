
'use client';
import React, { useState } from 'react';

export default function HireTalentPage() {
  const [selectedRole, setSelectedRole] = useState('');

  const roles = [
    'Frontend Developer',
    'Backend Developer', 
    'Full-stack Developer',
    'DevOps Engineer',
    'Mobile Developer',
    'SEO Expert',
    'UI/UX Designer',
    'QA Engineer',
    'Software Architect'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Hire Top Remote <span className="text-blue-600">Developers</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Access vetted global talent through our rigorous 5-step screening process. 
                Get matched with elite developers in 48 hours.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Request Talent Now
              </button>
            </div>
            <div>
              <img 
                src="https://geriasa.blob.core.windows.net/assets/b6d6ae87_a73b_4dd7_900e_be988d21df76_1_60f041b27b.png"
                alt="Remote developers"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Rigorous Vetting Process
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Application Review</h3>
              <p className="text-gray-600 text-sm">Initial screening of experience and portfolio</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Assessment</h3>
              <p className="text-gray-600 text-sm">Coding challenges and technical knowledge evaluation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Coding</h3>
              <p className="text-gray-600 text-sm">Real-time problem solving and code quality assessment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
              <p className="text-gray-600 text-sm">Communication and collaboration abilities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Interview</h3>
              <p className="text-gray-600 text-sm">Cultural fit and project-specific evaluation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Roles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Roles We Support
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{role}</h3>
                <ul className="text-gray-600 space-y-2">
                  {role === 'Frontend Developer' && (
                    <>
                      <li>• React, Vue, Angular</li>
                      <li>• TypeScript, JavaScript</li>
                      <li>• CSS frameworks</li>
                      <li>• Responsive design</li>
                    </>
                  )}
                  {role === 'Backend Developer' && (
                    <>
                      <li>• Node.js, Python, Java</li>
                      <li>• API development</li>
                      <li>• Database design</li>
                      <li>• Server architecture</li>
                    </>
                  )}
                  {role === 'Full-stack Developer' && (
                    <>
                      <li>• End-to-end development</li>
                      <li>• Multiple tech stacks</li>
                      <li>• System integration</li>
                      <li>• Performance optimization</li>
                    </>
                  )}
                  {role === 'DevOps Engineer' && (
                    <>
                      <li>• AWS, Azure, GCP</li>
                      <li>• CI/CD pipelines</li>
                      <li>• Infrastructure as code</li>
                      <li>• Monitoring & scaling</li>
                    </>
                  )}
                  {role === 'Mobile Developer' && (
                    <>
                      <li>• React Native, Flutter</li>
                      <li>• iOS, Android native</li>
                      <li>• App store deployment</li>
                      <li>• Cross-platform expertise</li>
                    </>
                  )}
                  {role === 'SEO Expert' && (
                    <>
                      <li>• On-page & off-page optimization</li>
                      <li>• Keyword research & strategy</li>
                      <li>• Technical SEO audits</li>
                      <li>• Google Analytics & Search Console</li>
                    </>
                  )}
                  {role === 'UI/UX Designer' && (
                    <>
                      <li>• Wireframing & prototyping</li>
                      <li>• Figma, Sketch, Adobe XD</li>
                      <li>• User research & testing</li>
                      <li>• Design systems & accessibility</li>
                    </>
                  )}
                  {role === 'QA Engineer' && (
                    <>
                      <li>• Manual & automated testing</li>
                      <li>• Selenium, Cypress, Playwright</li>
                      <li>• Test case management</li>
                      <li>• CI/CD test integration</li>
                    </>
                  )}
                  {role === 'Software Architect' && (
                    <>
                      <li>• System design & architecture</li>
                      <li>• Microservices & scalability</li>
                      <li>• Technology strategy</li>
                      <li>• Code review & best practices</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Flexible Engagement Models
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Full-time</h3>
              <p className="text-gray-600">Dedicated developers who become part of your team</p>
              <ul className="mt-4 text-sm text-gray-600">
                <li>• 40 hours per week</li>
                <li>• Long-term commitment</li>
                <li>• Team integration</li>
              </ul>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Part-time</h3>
              <p className="text-gray-600">Flexible hours for ongoing projects and maintenance</p>
              <ul className="mt-4 text-sm text-gray-600">
                <li>• 20-30 hours per week</li>
                <li>• Flexible scheduling</li>
                <li>• Cost-effective</li>
              </ul>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Project-based</h3>
              <p className="text-gray-600">Fixed-scope projects with defined deliverables</p>
              <ul className="mt-4 text-sm text-gray-600">
                <li>• Clear milestones</li>
                <li>• Fixed timeline</li>
                <li>• Defined scope</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Developer?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your project and we'll match you with the ideal talent in 48 hours.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Request Talent Now
          </button>
        </div>
      </section>
    </div>
  );
}
