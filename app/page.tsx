'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    // Check if the 'cookieConsent' cookie is set
    const hasConsent = document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent=true'));

    // If not set, show the cookie popup
    setShowCookiePopup(!hasConsent);
  }, [])

  const handleAgreeAndClose = () => {
    // Set the 'cookieConsent' cookie to 'true'
    document.cookie = 'cookieConsent=true; path=/; max-age=' + 365 * 24 * 60 * 60;

    // Hide the cookie popup
    setShowCookiePopup(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Top Remote Talent. <span className="text-blue-600">One Global Team.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Building the future? Get elite remote engineers or an end-to-end team — all with Geria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-talent" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Hire Talent Now
            </Link>
            <Link href="/for-engineers" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8">Get access to top-tier remote developers and scale your team today.</p>
          <Link href="/hire-talent" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Cookie Popup */}
      {showCookiePopup && (
        <div className="fixed bottom-0 left-0 right-0 p-4 sm:w-full md:w-full lg:w-100">
          <div className="bg-stone-900 flex flex-col pl-8 pr-8 rounded-xl max-md:pl-5 lg:w-100">
            <div className="self-stretch flex items-center gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                className="aspect-[2.29] object-contain object-center w-16 overflow-hidden shrink-0 max-w-full my-auto"
                alt="Geria Logo"
              />
            </div>
            <div className="text-white text-sm font-bold pt-2 leading-6 max-md:max-w-full">
              With your agreement, we and our partners use cookies or similar technologies to store, access, and process personal data like your visit on this website. You can withdraw your consent or object to data processing based on legitimate interest at any time by clicking on "Learn More" or in our Privacy Policy on this website.
              We and our partners do the following data processing based on your consent and/or our legitimate interest: Personalised ads and content, ad and content measurement, audience insights and product development, Precise geolocation data, and identification through device scanning, Store and/or access information on a device
            </div>
            <div className="items-stretch justify-end items-end ml-90 flex w-[250px] max-w-full gap-2.5 mt-2 mb-6 max-md:mb-2.5">
              <div className="justify-end text-white text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-2.5 py-1.5 rounded-lg border-solid max-md:px-px">
                <a href="/cookies-policy" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
              <div className="hover:cursor-pointer justify-end text-stone-900 text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-white grow px-2.5 py-1.5 rounded-lg ml-auto max-md:px-px" onClick={handleAgreeAndClose}>
                Agree & Close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}