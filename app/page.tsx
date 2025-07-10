'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Amazon from '../public/icons/amazon.svg';
import Andela from '@/public/icons/andela.svg';
import Flutterwave from '@/public/icons/flutterwave.svg';
import Google from '@/public/icons/google.svg';
import Interswitch from '@/public/icons/interswitch.svg';
import Jumia from '@/public/icons/jumia.svg';
import Microsoft from '@/public/icons/microsoft.svg';
import Mtn from '@/public/icons/mtn.svg';
import Oracle from '@/public/icons/oracle.svg';
import Paystack from '@/public/icons/paystack.svg';
import stats from '@/public/images/stats.png';
import image1 from '@/public/images/img_1.jpg';
import image3 from '@/public/images/img_3.jpg';
import image4 from '@/public/images/img_4.jpg';
import home_page_hero_img_1 from '../public/images/home_page_hero_img_1.png';
import home_page_hero_img_2 from '../public/images/home_page_hero_img_2.jpg';
import home_page_hero_img_3 from '../public/images/home_page_hero_img_3.jpg';
import bullet1 from '@/public/images/1.png';
import bullet2 from '@/public/images/2.png';
import bullet3 from '@/public/images/3.png';
import bullet4 from '@/public/images/4.png';
import ellipse from '@/public/images/ellipse_1.png';
import { useState, useEffect } from 'react';
import FullPageLoader from './_components/FullPageLoader';
import { DUMMY_DEVS } from './_constants';
import { LandingAttributes, LandingHero, LandingSteps, LandingViewModel } from './landing.viewmodel';
import { DeveloperAvatar } from './_models/developerAvatar.model';
import TalentCard from './_components/TalentCard';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  const data = { 
    attributes: {
      hero: {
        heading: 'Your Long-Term Technical Partner',
        description: 'Build Smarter. Scale Faster. From top-tier vetted remote engineers to full-stack product teams — Geria fuels your next leap.',
        img_1_url: '/public/images/avatar4.png',
        img_1_alternativeText: '1aea',
        img_2_url: '/public/images/avatar4.png',
        img_2_alternativeText: '1',
        img_3_url: '/public/images/avatar4.png',
        img_3_alternativeText: '1'
      } as LandingHero,
      steps: {
        title_1: 'Talk to us about your needs',
        description_1: 'Fill out a short form to tell us about your specific requirements and a bit about your company.',
        title_2: 'Get matched with team',
        description_2: 'Our recruiters handpick the most relevant vetted tech experts based on your requirements. You assess and assemble your engineering team.',
        title_3: 'Onboard your tech experts',
        description_3: 'Seamlessly and quickly integrate your tech expert team to hit the ground running. Leave the tedious administrative tasks to us and focus on your core.',
      } as LandingSteps
    } as LandingAttributes
  } as LandingViewModel

  useEffect(() => {
    setMounted(true);
  }, [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setIsSubscribing(true);
    setSubscriptionMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setSubscriptionMessage(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubscriptionMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (!mounted) {
    return null;
  }

  if (data === null || typeof data !== 'object') {
    return (
      <div>
        <FullPageLoader />
      </div>
    );
  }



  const generateDevCards = (devs: DeveloperAvatar[]) => {
    return devs.map((dev: DeveloperAvatar, idx: number) => (
      <TalentCard
        key={idx}
        dev= {dev}
      />
    ));
  }

  const { hero, steps } = data.attributes;

  return (
     <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Your Long-Term</span>{' '}
                  <span className="block text-red-600 xl:inline">Technical Partner</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Build Smarter. Scale Faster.
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  From top-tier vetted remote engineers to full-stack product teams — Geria fuels your next leap.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/hire-talent"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      Hire Talent Now
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/our-process"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                    >
                      Let's build it
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-yellow-200 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </div>
              <p className="text-yellow-800 font-medium">Video Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <div className='container max-w-screen-xl px-5'>
        <div className='text-center py-4 lg:py-8 mx-auto'>
          <h3 className='text-fluid-xl mb-4'>Where our engineers have worked</h3>
          <div className='flex flex-row flex-wrap justify-center items-center py-1'>
            <div className='mr-3 p-2'>
              <Amazon
                className='inline-block'
                height={30}
                width={80}
              />
            </div>
            <div className='mr-3 p-2'>
              <Andela
                className='inline-block'
                height={30}
                width={30}
              />
            </div>
            <div className='mr-3 p-2'>
              <Flutterwave
                className='inline-block'
                height={30}
                width={80}
              />
            </div>
            <div className='mr-3 p-2'>
              <Google
                className='inline-block'
                height={30}
                width={80}
              />
            </div>
            <div className='mr-3 p-2'>
              <Interswitch
                className='inline-block'
                height={30}
                width={100}
              />
            </div>
            <div className='mr-3 p-2'>
              <Jumia
                className='inline-block'
                height={30}
                width={80}
              />
            </div>
            <div className='mr-3 p-2'>
              <Microsoft
                className='inline-block'
                height={30}
                width={80}
              />
            </div>
            <div className='mr-3 p-2'>
              <Mtn
                className='inline-block'
                height={30}
                width={30}
              />
            </div>
            <div className='mr-3 p-2'>
              <Oracle
                className='inline-block'
                height={30}
                width={80}
              />
            </div>
            <div className='mr-3 p-2'>
              <Paystack
                className='inline-block'
                height={30}
                width={80}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">CTO, TechStart</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Geria helped us scale our development team quickly with top-tier talent. The developers they provided were exceptional and integrated seamlessly with our existing team."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Founder, GrowthCo</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "We needed a complete web development overhaul. Geria's team delivered a stunning, high-performance website that increased our conversions by 40%."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                    <p className="text-sm text-gray-500">VP Engineering, ScaleUp</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The quality of developers from Geria is unmatched. They understand modern development practices and deliver clean, maintainable code."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Build Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Behind the Build: Our Developers
            </h2>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">Maria Santos</h3>
                <p className="text-gray-500 mb-2">Full-Stack Developer</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Python</span>
                </div>
                <p className="text-sm text-gray-600">
                  5+ years building scalable web applications for fintech and e-commerce companies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">Michael Eze</h3>
                <p className="text-gray-500 mb-2">Mobile Developer</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Flutter</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">iOS</span>
                </div>
                <p className="text-sm text-gray-600">
                  Expert in cross-platform mobile development with 50+ apps published to app stores.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">David Kim</h3>
                <p className="text-gray-500 mb-2">DevOps Engineer</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">AWS</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Docker</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Kubernetes</span>
                </div>
                <p className="text-sm text-gray-600">
                  Specialized in cloud infrastructure and CI/CD pipelines for high-traffic applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <div className='container max-w-screen-xl py-8 lg:py-fluid-8'>
        <h3 className='mx-auto text-fluid-xl max-w-[1200px] px-fluid-2 text-center font-semibold mb-fluid-2'>Skip the Talent Hunt. Start Building Fast.</h3>
        <p className='text-fluid-md text-center mb-fluid-5'>Why waste weeks searching? Get fully vetted engineers in days — through a hiring process we&#39;ve simplified into just 3 easy steps.</p>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='px-fluid-5 py-[40px] border border-x-transparent border-y-slate-200'>
            <span className='font-bold block text-[32px] text-red-600'>01</span>
            <h6 className='font-bold block my-3 text-[20px]'>Tell Us What You're Building</h6>
            <span className='block'>Share your goals in minutes. We'll handle the rest.</span>
          </div>
          <div className='px-fluid-5 py-[40px] border border-x-transparent md:border-slate-200'>
            <span className='font-bold block text-[32px] text-red-600'>02</span>
            <h6 className='font-bold block my-3 text-[20px]'>Meet Your Top Matches</h6>
            <span className='block'>We handpick vetted engineers tailored to your needs. You choose who joins your team.</span>
          </div>
          <div className='px-fluid-5 py-[40px] border border-x-transparent border-y-slate-200'>
            <span className='font-bold block text-[32px] text-red-600'>03</span>
            <h6 className='font-bold block my-3 text-[20px]'>Launch Without the Lag</h6>
            <span className='block'>Your team is onboarded and ready to build — fast. We handle contracts, compliance, and admin.</span>
          </div>
        </div>
      </div>

      {/* Meet Our Talents Section */}
      <div className='bg-[#F9FAFB] py-10 md:py-28'>
        <div className='container max-w-screen-xl px-5'>
          <h2 className='text-center text-fluid-3xl mb-8 md:mb-16'>Vetted. Proven. Ready to Build.</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5'>
            {generateDevCards(DUMMY_DEVS)}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-red-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Stay updated with</span>
            <span className="block">remote work insights</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-red-100">
            Get the latest tips on building and managing remote teams.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="mt-8 sm:flex sm:justify-center">
            <div className="w-full sm:max-w-xs sm:flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-white focus:ring-white"
                placeholder="Enter your email"
                required
                disabled={isSubscribing}
                autoComplete="email"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                disabled={isSubscribing || !email.trim()}
                className="block w-full rounded-md border border-transparent bg-red-500 px-4 py-3 font-medium text-white shadow hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white sm:px-10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
          {subscriptionMessage && (
            <p className={`mt-4 text-sm ${subscriptionMessage.includes('Success') ? 'text-green-200' : 'text-red-200'}`}>
              {subscriptionMessage}
            </p>
          )}
        </div>
      </section>

      {/* Additional Sections */}
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='h-auto md:h-[650px] flex bg-[#1C1B17] justify-center items-center px-4 md:px-8 lg:px-0 py-16 md:py-0'>
          <div className='max-w-[450px]'>
            <h2 className='text-fluid-3xl text-white mb-6'>Looking For Top Talents?</h2>
            <p className='text-white mb-20'>
              Why Wait Months? Get Top Tech Talent in Days.<br />We&#39;ve got the hands — you bring the vision.</p>
            <Link className='btn-primary' href={'/hire-talent'}>Hire Now!</Link>
          </div>
        </div>
        <div className='h-[352px] md:h-full w-full bg-[url("/images/img_2.jpg")] bg-no-repeat bg-cover'></div>
      </div>


    </>
  )
}