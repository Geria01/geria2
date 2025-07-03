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
import home_page_hero_img_1 from '../public/images/home_page_hero_img_1.png'; //'@/public/images/home_page_hero_img_1.png';
import home_page_hero_img_2 from '../public/images/home_page_hero_img_2.jpg';
import home_page_hero_img_3 from '../public/images/home_page_hero_img_3.jpg';
import bullet1 from '@/public/images/1.png';
import bullet2 from '@/public/images/2.png';
import bullet3 from '@/public/images/3.png';
import bullet4 from '@/public/images/4.png';
import ellipse from '@/public/images/ellipse_1.png';
import { useState, useEffect } from 'react';
//import TalentCard from './_components/TalentCard';
import FullPageLoader from './_components/FullPageLoader';
import { DUMMY_DEVS } from './_constants';
import { LandingAttributes, LandingHero, LandingSteps, LandingViewModel } from './landing.viewmodel';
import { DeveloperAvatar } from './_models/developerAvatar.model';
import TalentCard from './_components/TalentCard';

//import { GetStaticProps } from 'next';

// export const getStaticProps = (async (context) => {
//   //const res = await strapiApi.get('/api/home?populate[hero][populate]=*&populate[steps][populate]=*');

//   const viewModel = { 
//     attributes: {
//       hero: {
//         heading: 'a',
//         description: 'aa',
//         img_1_url: 'a',
//         img_1_alternativeText: '1',
//         img_2_url: 'a',
//         img_2_alternativeText: '1',
//         img_3_url: 'a',
//         img_3_alternativeText: '1'
//       } as LandingHero,
//       steps: {
//         title_1: 'string',
//         description_1: 'string',
//         title_2: 'string',
//         description_2: 'string',
//         title_3: 'string',
//         description_3: 'string',
//       } as LandingSteps
//     } as LandingAttributes
//   } as LandingViewModel

//   return {
//     props: {
//       data: viewModel
//     },
//   }
// }) satisfies GetStaticProps<{data: LandingViewModel}>


export default function HomePage() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  const data = { 
    attributes: {
      hero: {
        heading: 'Top Developers Reserved For You',
        description: 'Build great products with top-vetted remote developer teams faster and cost-effectively.',
        //img_1_url: 'https://geriasa.blob.core.windows.net/assets/hero_img_2_283db5f279.jpg?w=384&q=75 1x, https://geriasa.blob.core.windows.net/assets/hero_img_2_283db5f279.jpg?w=640&q=75 2x',
        img_1_url: '/public/images/avatar4.png',
        img_1_alternativeText: '1aea',
        img_2_url: '/public/images/avatar4.png',
        img_2_alternativeText: '1',
        img_3_url: '/public/images/avatar4.png',
        //img_3_url: 'https://geriasa.blob.core.windows.net/assets/hero_img_2_283db5f279.jpg?w=384&q=75',
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
    // Check if the 'cookieConsent' cookie is set
    const hasConsent = document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent=true'));

    // If not set, show the cookie popup
    setShowCookiePopup(!hasConsent);
  }, [])

  if (data === null || typeof data !== 'object') {
    return (
      <div>
        <FullPageLoader />
      </div>
    );
  }


  const handleAgreeAndClose = () => {
    // Set the 'cookieConsent' cookie to 'true'
    document.cookie = 'cookieConsent=true; path=/; max-age=' + 365 * 24 * 60 * 60;

    // Hide the cookie popup
    setShowCookiePopup(false);
  };

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
      <div className='container max-w-screen-xl px-5 sm: pt-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center m:h-[650px] py-3 sm:py-5 md:py-10 lg:py-28'>
          <div className='order-2 md:order-1 max-w-[560px]'>
            <h1 className='font-bold text-fluid-5xl mt-fluid-3 md:mt-0 mb-fluid-3'>{hero.heading}</h1>
            <p className='text-fluid-md mb-fluid-5'>{hero.description}</p>
            <Link
              className='inline-block btn-primary'
              href={'/hire-talent'}>
              Hire Now!
            </Link>
          </div>
          <div className='order-1 md:order-2 grid grid-cols-2 gap-4'>
            <div className='flex justify-center items-center'>
              <div className='relative'>
                <Image
                  className='rounded-2xl'
                  //loader={strapiImageLoader}
                  //src={`${hero.img_1.data.attributes.url}`}
                  src={home_page_hero_img_1}
                  
                  height={336}
                  width={306}
                  //alt={`${hero.img_1.data.attributes.alternativeText}`}
                  alt={`${hero.img_1_alternativeText}`}
                />
              </div>
            </div>
            <div>
              <div className='relative'>
                <Image
                  className='rounded-2xl mb-4'
                  // loader={strapiImageLoader}
                  src={home_page_hero_img_2}
                  height={336}
                  width={306}
                  alt={`${hero.img_2_alternativeText}`}
                />
              </div>
              <div className='relative'>
                <Image
                  className='rounded-2xl'
                  // loader={strapiImageLoader}
                  src={home_page_hero_img_3}
                  height={336}
                  width={306}
                  alt={`${hero.img_3_alternativeText}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className='container max-w-screen-xl px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16'>
          <div className='flex flex-col justify-center align-center max-w-[480px] mb-5 md:mb-0'>
            <h2 className='text-fluid-3xl mb-6 text-center md:text-left'>Cut Down On Time Wasted With Traditional Hiring Process</h2>
          </div>
          <div className='ml-0 md:ml-auto'>
            <div className='relative ml-[65px] mr-[40px] md:ml-[100px] md:mr-[50px] lg:ml-[150px] lg:mr-[60px]'>
              <Image
                className='w-2/3 md:w-3/4 md:w-6/4 absolute top-1/2 -translate-y-1/2 -left-16 md:-left-20 lg:-left-36 rounded-2xl shadow-[0px_54px_100px_-10px_rgba(255,121,77,0.5)]'
                src={stats}
                height={380}
                width={337}
                alt={'Stats'} />
              <Image className='' src={image1} height={638} width={484} alt={'Man smiling'} />
              <Image className='w-1/3 absolute -right-10 md:-right-14 bottom-1/4' src={ellipse} height={145} width={200} alt={''} />
              <div ></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-screen-xl py-8 lg:py-fluid-8'>
        <h3 className='mx-auto text-fluid-xl max-w-[1200px] px-fluid-2 text-center font-semibold mb-fluid-2'>Skip the fruitless back-and-forth search for tech talents and get well-vetted talents in days</h3>
        <p className='text-fluid-md text-center mb-fluid-5'>We&#39;ve streamlined our process into 3 easy steps for you.</p>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='px-fluid-5 py-[40px] border border-x-transparent border-y-slate-200'>
            <span className='font-bold block text-[32px] text-red-600'>01</span>
            <h6 className='font-bold block my-3 text-[20px]'>{steps.title_1}</h6>
            <span className='block'>{steps.description_1}</span>
          </div>
          <div className='px-fluid-5 py-[40px] border border-x-transparent md:border-slate-200'>
            <span className='font-bold block text-[32px] text-red-600'>02</span>
            <h6 className='font-bold block my-3 text-[20px]'>{steps.title_2}</h6>
            <span className='block'>{steps.description_2}</span>
          </div>
          <div className='px-fluid-5 py-[40px] border border-x-transparent border-y-slate-200'>
            <span className='font-bold block text-[32px] text-red-600'>03</span>
            <h6 className='font-bold block my-3 text-[20px]'>{steps.title_3}</h6>
            <span className='block'>{steps.description_3}</span>
          </div>
        </div>
      </div>
      
  <div className='bg-[#F9FAFB] py-10 md:py-28'>
  <div className='container max-w-screen-xl px-5'>
    <h2 className='text-center text-fluid-3xl mb-8 md:mb-16'>Meet some of our Talents</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5'>

      {
      generateDevCards(DUMMY_DEVS)
      }
  
    </div>
  </div>
</div>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='h-auto md:h-[650px] flex bg-[#1C1B17] justify-center items-center px-4 md:px-8 lg:px-0 py-16 md:py-0'>
          <div className='max-w-[450px]'>
            <h2 className='text-fluid-3xl text-white mb-6'>Looking For Top Talents?</h2>
            <p className='text-white mb-20'>Jump to the front of the queue and get vetted tech talents in days, not months. We&#39;ve got the hands you need to build the product you want.</p>
            <Link className='btn-primary' href={'/hire-talent'}>Hire Now!</Link>
          </div>
        </div>
        <div className='h-[352px] md:h-full w-full bg-[url("/images/img_2.jpg")] bg-no-repeat bg-cover'></div>
      </div>
      <div className='py-20 md:py-30 lg:py-40 px-5 bg-[#F9F9F9]'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
          <div className='mx-auto md:ml-auto md:mr-fluid-10 mb-20 md:mb-0'>
            <Image className='rounded-[10px]' src={image3} height={431} width={416} alt={'Developer using computer'} />
          </div>
          <div className='max-w-[518px] px-4 lg:px-0'>
            <h2 className='text-fluid-3xl mb-6'>Looking For Opportunities?</h2>
            <p className='mb-10 md:mb-20'>The demand is greater than ever before. Join our talent pool and get poached by tech companies that know your worth.</p>
            <Link className='btn-secondary' href={'/signup'}>Join our Talent Pool</Link>
          </div>
        </div>
      </div>
      <div>
        <div className='container max-w-screen-xl px-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 py-32'>
            <div className='mb-16 md:mb-0'>
              <h3 className='mx-auto text-fluid-xl mb-6'>Let&#39;s help you to put together your dream team to make your dream work</h3>
              <p className='md:max-w-[550px] mb-20'>Our special perks put us on speed dial for many companies looking to hire gifted tech talents.</p>
              <div className='mb-12 flex flex-row'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet1} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Top Quality</h5>
                  <p className=''>We believe that there is no substitute for quality. Our engineers are seasoned and vetted with excellent track records and great interpersonal skills.</p>
                </div>
              </div>
              <div className='mb-12 flex'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet2} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Unbeatable Prices</h5>
                  <p className=''>You don&#39;t have to break the bank to get top tech experts to your team. We have a flexible engagement model with a starting developer rate of £30/hour, enabling you build smartly.</p>
                </div>
              </div>
              <div className='mb-12 flex'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet3} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Excellent Communication Skills</h5>
                  <p className=''>We understand the importance of communication and only provide you with talents that are fluent in the English language.</p>
                </div>
              </div>
              <div className='flex'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet4} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Comfortable Timezone</h5>
                  <p className=''>
                    Our engineers work when you work. Right within the comfort of your time zone, we help you find talents that are available in real time.
                  </p>
                </div>
              </div>
            </div>
            <div className='ml-0 md:ml-auto self-end'>
              <Image className='rounded-[10px] w-full h-auto md:h-[732px] md:w-[620px] object-cover' src={image4} height={732} width={620} alt={'Computer on table'} />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#EBF5FF] py-20'>
        <div className='container max-w-screen-xl px-5'>
          <div className='flex flex-col md:flex-row w-full'>
            <h2 className='text-fluid-3xl max-w-[400px] mb-6 md:mb-0'>Give Life To That Project Today</h2>
            <p className='max-w-[350px] opacity-70 mb-10 md:mb-0 md:pl-fluid-5'>
              With the right team, anything is achievable. Let’s furnish you with the right hands to make your dreams work.</p>
            <span className='ml-0 md:ml-auto'>
              <Link
                className='btn-primary'
                href={'/hire-talent'}>
                Hire Now!
              </Link>
            </span>
          </div>
        </div>
      </div>


      {showCookiePopup && (
        <div className="fixed bottom-0 left-0 right-0 p-4 sm:w-full md:w-full lg:w-100">
  <div className="bg-stone-900 flex flex-col pl-8 pr-8 rounded-xl max-md:pl-5 lg:w-100">
    <div className="self-stretch flex items-center gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98d70e37-7a67-4af2-be71-b7ddc84bb456?apiKey=994d997208b34a26ad9d13da5074bcdd&"
        className="aspect-[2.29] object-contain object-center w-16 overflow-hidden shrink-0 max-w-full my-auto"
      />
    </div>
    <div className="text-white text-sm font-bold pt-2 leading-6  max-md:max-w-full">
    With your agreement, we and our partners use cookies or similar technologies to store, access, and process personal data like your visit on this website, You can withdraw your consent or object to data processing based on legitimate interest at any time by clicking on &quot;Learn More&quot; ot in our Privacy Policy on this website.
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
