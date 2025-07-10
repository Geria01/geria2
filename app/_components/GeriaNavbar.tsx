"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GeriaNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "/about-us" },
    { name: "Hire Talent", href: "/hire-talent" },
    { name: "Web Development", href: "/web-development" },
    { name: "Projects", href: "/projects" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "For Engineers", href: "/for-engineers" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-[#4B4B4B]/20">
      {/* Backdrop to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/geria_logo.png"
              alt="Geria Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#1B1B1B] hover:text-[#FFD700] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center p-2 rounded-full hover:bg-[#FAFAFA] transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-[#4B4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#4B4B4B]/20 z-50">
                  <div className="py-2">
                    {/* CLIENT Section */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-[#1B1B1B] uppercase tracking-wide">CLIENT</h3>
                    </div>
                    <Link
                      href="/client-login"
                      className="flex items-center px-4 py-2 text-sm text-[#4B4B4B] hover:bg-[#FAFAFA] hover:text-[#FFD700] transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#4B4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Login
                    </Link>
                    <Link
                      href="/client-signup"
                      className="flex items-center px-4 py-2 text-sm text-[#4B4B4B] hover:bg-[#FAFAFA] hover:text-[#FFD700] transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#4B4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Sign Up
                    </Link>

                    {/* Divider */}
                    <div className="border-t border-[#4B4B4B]/20 my-2"></div>

                    {/* TALENT Section */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-[#1B1B1B] uppercase tracking-wide">TALENT PORTAL</h3>
                    </div>
                    <Link
                      href="/candidate-portal"
                      className="flex items-center px-4 py-2 text-sm text-[#4B4B4B] hover:bg-[#FAFAFA] hover:text-[#FFD700] transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#4B4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Sign In
                    </Link>
                    <Link
                      href="/candidate-portal?tab=signup"
                      className="flex items-center px-4 py-2 text-sm text-[#4B4B4B] hover:bg-[#FAFAFA] hover:text-[#FFD700] transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#4B4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button className="p-2 rounded-full hover:bg-[#FAFAFA] transition-colors duration-200">
              <svg className="w-6 h-6 text-[#4B4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* CTA Button */}
            <Link
              href="/request-talent"
              className="bg-[#FFD700] text-[#1B1B1B] px-6 py-2 rounded-lg font-semibold hover:bg-[#FF4500] hover:text-white transition-colors duration-200"
            >
              Request Talent
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1B1B1B] hover:text-[#FFD700] focus:outline-none focus:text-[#FFD700]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-[#4B4B4B]/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[#1B1B1B] hover:text-[#FFD700] font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 bg-[#FFD700] text-[#1B1B1B] rounded-lg font-semibold hover:bg-[#FF4500] hover:text-white transition-colors duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}