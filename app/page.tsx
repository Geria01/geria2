import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Top Remote Talent. <span className="text-blue-600">One Global Team.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're hiring elite remote developers or need a full product team — Geria delivers.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/hire-talent" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Hire Developers
            </Link>
            <Link href="/web-development" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Build My Website
            </Link>
          </div>

          {/* Global Talent Visual */}
          <div className="relative">
            <img 
              src="https://geriasa.blob.core.windows.net/assets/b6d6ae87_a73b_4dd7_900e_be988d21df76_1_60f041b27b.png"
              alt="Global talent network"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Geria Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Geria
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Speed</h3>
              <p className="text-gray-600">Get matched with top talent in 48 hours or start your project within a week.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Every developer is vetted through our rigorous 5-step screening process.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">Trusted by 100+ companies worldwide with a 98% client satisfaction rate.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
              <p className="text-gray-600">Full-time, part-time, or project-based engagement models to fit your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="/icons/amazon.svg" alt="Amazon" className="h-8" />
            <img src="/icons/microsoft.svg" alt="Microsoft" className="h-8" />
            <img src="/icons/google.svg" alt="Google" className="h-8" />
            <img src="/icons/oracle.svg" alt="Oracle" className="h-8" />
            <img src="/icons/andela.svg" alt="Andela" className="h-8" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="/images/placholder_avatar1.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">CTO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-700">"Geria helped us scale our development team quickly with top-tier talent. The developers they provided were exceptional and integrated seamlessly with our existing team."</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="/images/placholder_avatar2.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Founder, GrowthCo</p>
                </div>
              </div>
              <p className="text-gray-700">"We needed a complete web development overhaul. Geria's team delivered a stunning, high-performance website that increased our conversions by 40%."</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="/images/placholder_avatar3.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">VP Engineering, ScaleUp</p>
                </div>
              </div>
              <p className="text-gray-700">"The quality of developers from Geria is unmatched. They understand modern development practices and deliver clean, maintainable code."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Spotlight */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Meet Our Top Developers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/avatar4.png" alt="Developer" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Alex Kumar</h3>
              <p className="text-gray-600 text-center mb-4">Full-Stack Developer</p>
              <div className="flex justify-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Python</span>
              </div>
              <p className="text-gray-700 text-sm text-center">5+ years building scalable web applications for fintech and e-commerce companies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/avatar5.png" alt="Developer" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Maria Santos</h3>
              <p className="text-gray-600 text-center mb-4">Mobile Developer</p>
              <div className="flex justify-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React Native</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Flutter</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">iOS</span>
              </div>
              <p className="text-gray-700 text-sm text-center">Expert in cross-platform mobile development with 50+ apps published to app stores.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/avatar6.png" alt="Developer" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">David Kim</h3>
              <p className="text-gray-600 text-center mb-4">DevOps Engineer</p>
              <div className="flex justify-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AWS</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Docker</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Kubernetes</span>
              </div>
              <p className="text-gray-700 text-sm text-center">Specialized in cloud infrastructure and CI/CD pipelines for high-traffic applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and find the perfect developers for your needs.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block">
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}