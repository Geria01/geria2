'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function HomePageComponent() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Long-Term <span className="text-red-600">Technical Partner</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Build Smarter. Scale Faster.
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            From top-tier vetted remote engineers to full-stack product teams — Geria fuels your next leap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-talent" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Hire Talent Now
            </Link>
            <Link href="/for-engineers" className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Let's build it
            </Link>
          </div>
        </div>

        {/* Hero Image/Video Placeholder */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-yellow-100 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="w-16 h-16 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p>Video Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CTO, TechStart</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Geria helped us scale our development team quickly with top-tier talent. The developers they provided were exceptional and integrated seamlessly with our existing team."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-gray-600">Founder, GrowthCo</div>
                </div>
              </div>
              <p className="text-gray-700">
                "We needed a complete web development overhaul. Geria's team delivered a stunning, high-performance website that increased our conversions by 40%."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Emily Rodriguez</div>
                  <div className="text-sm text-gray-600">VP Engineering, ScaleUp</div>
                </div>
              </div>
              <p className="text-gray-700">
                "The quality of developers from Geria is unmatched. They understand modern development practices and deliver clean, maintainable code."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Build: Our Developers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Behind the Build: Our Developers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Maria Santos</h3>
              <p className="text-gray-600 mb-4">Full-Stack Developer</p>
              <div className="flex justify-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Python</span>
              </div>
              <p className="text-sm text-gray-600">5+ years building scalable web applications for fintech and e-commerce companies.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Michael Eze</h3>
              <p className="text-gray-600 mb-4">Mobile Developer</p>
              <div className="flex justify-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React Native</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">Flutter</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">iOS</span>
              </div>
              <p className="text-sm text-gray-600">Expert in cross-platform mobile development with 50+ apps published to app stores.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">David Kim</h3>
              <p className="text-gray-600 mb-4">DevOps Engineer</p>
              <div className="flex justify-center gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">AWS</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Docker</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Kubernetes</span>
              </div>
              <p className="text-sm text-gray-600">Specialized in cloud infrastructure and CI/CD pipelines for high-traffic applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8">Get access to top-tier remote developers and scale your team today.</p>
          <Link href="/hire-talent" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}

export default function HomePage() {
  return <HomePageComponent />;
}