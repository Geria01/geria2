'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { PopupModal } from 'react-calendly';
import CheckList from '@/public/icons/checklist.png';
import Check from '@/public/icons/check.svg';
import { ENGR_LEVELS as engrLevels } from '../_constants';

const CalendlyPopupWidget = dynamic(() => import('../_components/CalendlyPopupWidget'), { ssr: false });

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  
  const [isFlipped, setFlipped] = useState(false);
  // const renderEngrLevels = (levels) => levels?.map((level, idx: number) => (

  
  //   <div key={idx} className='p-[24px]'>
  //     <Image
  //       className='mb-fluid-3'
  //       src={level.image}
  //       height={80}
  //       width={80}
  //       alt={''}
  //     />
  //     <p className='font-bold text-fluid-md mb-fluid-2 text-[#333333]'>{level.title}</p>
  //     <ul className=''>
  //       {level.items?.map((item, indx) => (<li className='mb-fluid-1' key={indx}>
  //         <Check
  //           className='inline-block align-[-5px] mr-fluid-1'
  //           height={15}
  //           width={15}
  //         />
  //         <span className='inline-block'>{item}</span>
  //       </li>))}
  //     </ul>
  //   </div>
  // ));

  const [activeDiv, setActiveDiv] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [activeInnerDiv, setActiveInnerDiv] = useState<string | null>(null);

  const handleClick = (divName: string) => {
    setActiveDiv(divName);
  };

  const handleInnerDivClick = (divName: string) => {
    setActiveInnerDiv(divName);
  };

  const handleRoleClick = (divName: string) => {
    setActiveRole(divName);
  };



 


  const handleContainerClick = () => {
    setFlipped(!isFlipped);
  };





  useEffect(() => {
    setActiveDiv('red');
    setActiveRole('front');
    setActiveInnerDiv('fs');
  }, []);



  return (
    <div className=''>
      
 <div className="bg-white flex flex-col flex-col justify-end items-center pt-10 overflow-hidden self-center relative flex min-h-[246px] w-full  rounded-3xl max-md:max-w-full max-md:mt-10">
 <div className="text-zinc-800 text-center font-semibold pl-5 pr-5 leading-[52.8px] self-center  mt-24 max-md:max-w-full text-5xl max-md:text-4xl max-md:mt-10">
  Great Value for much Less
</div>

      <div className="text-stone-900 text-center text-xl pl-5 pr-5 leading-8 opacity-80 self-center max-w-[631px] mt-2 max-md:max-w-full">
        Scale your team speedily with our transparent and flexible pricing. We
        make it easy for you to select the best option for your organisation.
      </div>
      <div className="items-center bg-zinc-800 flex w-full flex-col mt-28 pt-5 pb-28 px-5 max-md:max-w-full max-md:mt-10 max-md:pb-24">
       
       
      <div className="flex mb-0 w-full max-w-[1270px] flex-col items-center max-md:max-w-full max-md:mb-2.5 overflow-x-auto">
  <div className="flex w-full max-w-[1121px] gap-5 max-md:max-w-full">
  <div
  className={`${
    activeRole === 'front'
      ? 'text-stone-900 text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] bg-yellow-400 grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
      : 'hover:cursor-pointer text-white text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
  } flex-shrink-0`}
  onClick={() => handleRoleClick('front')}
>
  Front End Developer
</div>

   
<div
  className={` ${
    activeRole === 'back'
      ? 'text-stone-900 sm:text-sm text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] bg-yellow-400 grow px-5 py-2.5 rounded-lg border-solid sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
      : 'hover:cursor-pointer text-white text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
  } flex-shrink-0`}
  onClick={() => handleRoleClick('back')}
>
  Back End Developer
</div>


            <div
        className={` ${
          activeRole === 'pd' ? 'text-stone-900 text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] bg-yellow-400 grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
          : 'hover:cursor-pointer text-white text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
      } flex-shrink-0`}
        onClick={() => handleRoleClick('pd')}
      >
              Product Designer
            </div>
            <div
        className={` ${
          activeRole === 'ds' ? 'text-stone-900 text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] bg-yellow-400 grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
          : 'hover:cursor-pointer text-white text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
      } flex-shrink-0`}
        onClick={() => handleRoleClick('ds')}
      >
              Data Scientist
            </div>
            <div
        className={` ${
          activeRole === 'ce' ? 'text-stone-900 text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] bg-yellow-400 grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
          : 'hover:cursor-pointer text-white text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
      } flex-shrink-0`}
        onClick={() => handleRoleClick('ce')}
      >
              Cybersecurity Engineer
            </div>
            
            <div
        className={` ${
          activeRole === 'me' ? 'text-stone-900 text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] bg-yellow-400 grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
          : 'hover:cursor-pointer text-white text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid md:max-w-md lg:max-w-lg xl:max-w-xl md:px-px'
      } flex-shrink-0`}
        onClick={() => handleRoleClick('me')}
      >
              ML Engineer
            </div>
  </div>
</div>




       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        <div className="flex mb-0 w-full max-w-[1270px] flex-col items-center max-md:max-w-full max-md:mb-2.5">
         

          {activeRole === 'front' && (
                
          <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-2">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

            {activeInnerDiv === 'mf' ? (
  // JSX content for active 'front' div
  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
  <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
    <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
      Mid Level Front End Developer
    </div>
    <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
      <div className="flex justify-between gap-4">
      
        <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
          Vetted by Geria
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
      
        <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
          4+ Years of Expeience
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
        
        <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
          Experience in Shipping Software
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
          Experience in working remotely
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
        
        <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
          English Language Proficiency
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
    </div>
    <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
    <Link
            href={'/hire-talent'}
            
          >
         Hire Now
    </Link>
    </div>
  </div>
</div>
) : (
  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
  <div onClick={() => handleInnerDivClick('mf')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
    <div className="text-stone-900 text-3xl font-semibold leading-10">
      Mid Level Front End Developer
    </div>
    <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
      <div className="items-center flex justify-between gap-4">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
          Vetted by Geria
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="items-center flex justify-between gap-4">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          4+ Years of Expeience
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          Experience in Shipping Software
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
      
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
          Experience in working remotely
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          English Language Proficiency
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
    </div>
    <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
    <Link
            href={'/hire-talent'}
            
          >
          Hire Now
          </Link>
    </div>
  </div>
</div>
)}



             
     
     
     
     
     
{activeInnerDiv === 'fs' ? (
  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
                    Senior Front End Developer
                  </div>
                  <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
                    <div className="flex justify-between gap-4">
                    
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                        Vetted by Geria
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                    
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                        4+ Years of Expeience
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                      
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                        Experience in Shipping Software
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                     
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                        Experience in working remotely
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                      
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                        English Language Proficiency
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                  </div>
                  <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
                  <Link
                          href={'/hire-talent'}
                          
                        >
                       Hire Now
                  </Link>
                  </div>
                </div>
              </div>
) : (
  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
  <div onClick={() => handleInnerDivClick('fs')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
    <div className="text-stone-900 text-3xl font-semibold leading-10">
      Senior Front End Developer
    </div>
    <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
      <div className="items-center flex justify-between gap-4">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
          Vetted by Geria
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="items-center flex justify-between gap-4">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          4+ Years of Expeience
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          Experience in Shipping Software
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
      
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
          Experience in working remotely
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          English Language Proficiency
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
    </div>
    <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
    <Link
            href={'/hire-talent'}
            
          >
          Hire Now
          </Link>
    </div>
  </div>
</div>
)}
     





     {activeInnerDiv === 'pf' ? (
  



  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch bg-stone-900 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="text-yellow-400  text-3xl font-semibold leading-10">
                    Principal Front End Developer
                  </div>
                  <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
                    <div className="flex justify-between gap-4">
                    <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                        Vetted by Geria
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                    
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                        8+ Years of Expeience
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                      
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                        Experience in Shipping Software
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                     
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                        Experience in working remotely
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                      
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                        English Language Proficiency
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="items-center flex justify-between gap-4 mt-2.5">
                     
                     <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                       Multiple Domain Expert
                     </div>
                     <img
                       loading="lazy"
                       src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                       className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                     />
                   </div>





                   <div className="items-center flex justify-between gap-4 mt-2.5">
                      
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                        Technical Leadership Experience
                      </div>
                      <img
                        loading="lazy"
                        src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                    </div>



                  </div>

                  <div className="text-stone-900 text-center text-sm font-bold leading-6  justify-center items-center bg-white mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
                  <Link
                          href={'/hire-talent'}
                          
                        >
                        Hire Now
                        </Link>
                  </div>
                </div>
              </div>






) : (
  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
  <div  onClick={() => handleInnerDivClick('pf')} className="justify-center items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
    <div className="text-stone-900 text-3xl font-semibold leading-10">
      Principal Front End Developer
    </div>
    <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
      <div className="flex justify-between gap-4">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          Vetted by Geria
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          8+ Years of Expeience
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
          Experience in Shipping Software
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          Experience in working remotely
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          English Language Proficiency
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
       
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          Multiple Domain Expert
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="items-center flex justify-between gap-4 mt-2.5">
        
        <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
          Technical Leadership Experience
        </div>
        <img
          loading="lazy"
          src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
    </div>
    <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
    <Link
            href={'/hire-talent'}
            
          >
          Hire Now
          </Link>
    </div>
  </div>
</div>
)}              
            </div>
          </div>
      

      )}







































{activeRole === 'back' && (
                
                <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-2">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      
                  {activeInnerDiv === 'mf' ? (
        // JSX content for active 'front' div
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
            Mid Backend End Developer
          </div>
          <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
            <div className="flex justify-between gap-4">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
               Hire Now
          </Link>
          </div>
        </div>
      </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('mf')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Mid Level Backend End Developer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
      
      
      
                   
           
           
           
           
           
      {activeInnerDiv === 'fs' ? (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
                          Senior Back End Developer
                        </div>
                        <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              4+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                        </div>
                        <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                             Hire Now
                        </Link>
                        </div>
                      </div>
                    </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('fs')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Senior Back End Developer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
           
      
      
      
      
      
           {activeInnerDiv === 'pf' ? (
        
      
      
      
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch bg-stone-900 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400  text-3xl font-semibold leading-10">
                          Principal Back End Developer
                        </div>
                        <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              8+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                           <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                             Multiple Domain Expert
                           </div>
                           <img
                             loading="lazy"
                             src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                             className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                           />
                         </div>
      
      
      
      
      
                         <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Technical Leadership Experience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
      
      
      
                        </div>
      
                        <div className="text-stone-900 text-center text-sm font-bold leading-6  justify-center items-center bg-white mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                              Hire Now
                              </Link>
                        </div>
                      </div>
                    </div>
      
      
      
      
      
      
      ) : (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div  onClick={() => handleInnerDivClick('pf')} className="justify-center items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Principal Backend End Developer
          </div>
          <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
            <div className="flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                8+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Multiple Domain Expert
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Technical Leadership Experience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}              
                  </div>
                </div>
            
      
            )}
      


















      {activeRole === 'pd' && (
                
                <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-2">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      
                  {activeInnerDiv === 'mf' ? (
        // JSX content for active 'front' div
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
            Mid Level Product Designer
          </div>
          <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
            <div className="flex justify-between gap-4">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
               Hire Now
          </Link>
          </div>
        </div>
      </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('mf')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Mid Level Product designer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
      
      
      
                   
           
           
           
           
           
      {activeInnerDiv === 'fs' ? (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400 text-3xl font-semibold leading-10">
                          Senior Product  Designer
                        </div>
                        <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              4+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                        </div>
                        <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                             Hire Now
                        </Link>
                        </div>
                      </div>
                    </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('fs')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Senior Product Designer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
           
      
      
      
      
      
           {activeInnerDiv === 'pf' ? (
        
      
      
      
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch bg-stone-900 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400  text-3xl font-semibold leading-10">
                          Principal Product Designer
                        </div>
                        <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              8+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                           <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                             Multiple Domain Expert
                           </div>
                           <img
                             loading="lazy"
                             src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                             className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                           />
                         </div>
      
      
      
      
      
                         <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Technical Leadership Experience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
      
      
      
                        </div>
      
                        <div className="text-stone-900 text-center text-sm font-bold leading-6  justify-center items-center bg-white mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                              Hire Now
                              </Link>
                        </div>
                      </div>
                    </div>
      
      
      
      
      
      
      ) : (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div  onClick={() => handleInnerDivClick('pf')} className="justify-center items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Principal Product Designer
          </div>
          <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
            <div className="flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                8+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Multiple Domain Expert
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Technical Leadership Experience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}              
                  </div>
                </div>
            
      
            )}
      


      

     







          

      {activeRole === 'ds' && (
                
                <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-2">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      
                  {activeInnerDiv === 'mf' ? (
        // JSX content for active 'front' div
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
            Mid Level Data Scientist
          </div>
          <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
            <div className="flex justify-between gap-4">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
               Hire Now
          </Link>
          </div>
        </div>
      </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('mf')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Mid Level Data Scientist
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
      
      
      
                   
           
           
           
           
           
      {activeInnerDiv === 'fs' ? (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
                          Senior Data Scientist
                        </div>
                        <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              4+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                        </div>
                        <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                             Hire Now
                        </Link>
                        </div>
                      </div>
                    </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('fs')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Senior Data Scientist
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
           
      
      
      
      
      
           {activeInnerDiv === 'pf' ? (
        
      
      
      
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch bg-stone-900 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400  text-3xl font-semibold leading-10">
                          Principal Data Scientist
                        </div>
                        <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              8+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                           <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                             Multiple Domain Expert
                           </div>
                           <img
                             loading="lazy"
                             src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                             className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                           />
                         </div>
      
      
      
      
      
                         <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Technical Leadership Experience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
      
      
      
                        </div>
      
                        <div className="text-stone-900 text-center text-sm font-bold leading-6  justify-center items-center bg-white mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                              Hire Now
                              </Link>
                        </div>
                      </div>
                    </div>
      
      
      
      
      
      
      ) : (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div  onClick={() => handleInnerDivClick('pf')} className="justify-center items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Principal Data Scientist
          </div>
          <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
            <div className="flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                8+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Multiple Domain Expert
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Technical Leadership Experience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}              
                  </div>
                </div>
            
      
            )}
      
      
      


























     
      {activeRole === 'ce' && (
                
                <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-2">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      
                  {activeInnerDiv === 'mf' ? (
        // JSX content for active 'front' div
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
            Mid Level Cybersecurity Engineer
          </div>
          <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
            <div className="flex justify-between gap-4">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
               Hire Now
          </Link>
          </div>
        </div>
      </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('mf')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Mid Level Cybersecurity Engineer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
      
      
      
                   
           
           
           
           
           
      {activeInnerDiv === 'fs' ? (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400 text-3xl font-semibold leading-10">
                          Senior Cybersecurity Engineer
                        </div>
                        <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              4+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                        </div>
                        <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                             Hire Now
                        </Link>
                        </div>
                      </div>
                    </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('fs')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Senior Cybersecurity Engineer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
           
      
      
      
      
      
           {activeInnerDiv === 'pf' ? (
        
      
      
      
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch bg-stone-900 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400  text-3xl font-semibold leading-10">
                          Principal Cybersecurity Engineer
                        </div>
                        <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              8+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                           <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                             Multiple Domain Expert
                           </div>
                           <img
                             loading="lazy"
                             src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                             className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                           />
                         </div>
      
      
      
      
      
                         <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Technical Leadership Experience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
      
      
      
                        </div>
      
                        <div className="text-stone-900 text-center text-sm font-bold leading-6  justify-center items-center bg-white mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                              Hire Now
                              </Link>
                        </div>
                      </div>
                    </div>
      
      
      
      
      
      
      ) : (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div  onClick={() => handleInnerDivClick('pf')} className="justify-center items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Principal Cybersecurity Engineer
          </div>
          <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
            <div className="flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                8+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Multiple Domain Expert
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Technical Leadership Experience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}              
                  </div>
                </div>
            
      
            )}
      




























      
    
      {activeRole === 'me' && (
                
                <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-2">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      
                  {activeInnerDiv === 'mf' ? (
        // JSX content for active 'front' div
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-yellow-400 text-3xl font-semibold leading-10 w-[341px] self-start">
            Mid Level ML Engineer
          </div>
          <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
            <div className="flex justify-between gap-4">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
               Hire Now
          </Link>
          </div>
        </div>
      </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('mf')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Mid Level ML Engineer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
      
      
      
                   
           
           
           
           
           
      {activeInnerDiv === 'fs' ? (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-end items-stretch shadow-2xl bg-stone-900 flex grow flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400 text-3xl font-semibold leading-10">
                          Senior ML Engineer
                        </div>
                        <div className="items-stretch flex w-full flex-col mt-12 self-start max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              4+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                        </div>
                        <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-center bg-white mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                             Hire Now
                        </Link>
                        </div>
                      </div>
                    </div>
      ) : (
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div onClick={() => handleInnerDivClick('fs')} className="justify-end items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 pt-12 pb-8 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Senior ML Engineer
          </div>
          <div className="items-stretch flex w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                4+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
            
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-28 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}
           
      
      
      
      
      
           {activeInnerDiv === 'pf' ? (
        
      
      
      
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch bg-stone-900 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
                        <div className="text-yellow-400  text-3xl font-semibold leading-10">
                          Principal ML Engineer
                        </div>
                        <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
                          <div className="flex justify-between gap-4">
                          <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Vetted by Geria
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                          
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              8+ Years of Expeience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch ">
                              Experience in Shipping Software
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Experience in working remotely
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              English Language Proficiency
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
                          <div className="items-center flex justify-between gap-4 mt-2.5">
                           
                           <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                             Multiple Domain Expert
                           </div>
                           <img
                             loading="lazy"
                             src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                             className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                           />
                         </div>
      
      
      
      
      
                         <div className="items-center flex justify-between gap-4 mt-2.5">
                            
                            <div className="text-white text-center text-lg font-semibold leading-7 self-stretch">
                              Technical Leadership Experience
                            </div>
                            <img
                              loading="lazy"
                              src="https://geriasa.blob.core.windows.net/assets/e0522f12_70f6_4208_9cdc_66b804f358a2_59b0e5fd84.png"
                              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                          </div>
      
      
      
                        </div>
      
                        <div className="text-stone-900 text-center text-sm font-bold leading-6  justify-center items-center bg-white mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
                        <Link
                                href={'/hire-talent'}
                                
                              >
                              Hire Now
                              </Link>
                        </div>
                      </div>
                    </div>
      
      
      
      
      
      
      ) : (
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div  onClick={() => handleInnerDivClick('pf')} className="justify-center items-stretch bg-stone-300 flex flex-col w-full mx-auto pl-7 pr-7 py-9 rounded-3xl max-md:mt-5 max-md:px-5">
          <div className="text-stone-900 text-3xl font-semibold leading-10">
            Principal ML Engineer
          </div>
          <div className="items-stretch flex flex-col mt-12 max-md:mt-10">
            <div className="flex justify-between gap-4">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Vetted by Geria
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                8+ Years of Expeience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch ">
                Experience in Shipping Software
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Experience in working remotely
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                English Language Proficiency
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
             
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Multiple Domain Expert
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-center flex justify-between gap-4 mt-2.5">
              
              <div className="text-zinc-800 text-center text-lg font-semibold leading-7 self-stretch">
                Technical Leadership Experience
              </div>
              <img
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/8635e8e7_e53b_4495_b8e8_91213cb4a4d4_06bf991061.png"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="text-white text-center text-sm font-bold leading-6  justify-center items-center bg-stone-900 mt-12 px-5 py-2.5 rounded-lg max-md:mt-10">
          <Link
                  href={'/hire-talent'}
                  
                >
                Hire Now
                </Link>
          </div>
        </div>
      </div>
      )}              
                  </div>
                </div>
            
      
            )}
      


















         </div>
         </div>
      <div className="justify-end items-center bg-slate-50 self-center flex w-[1268px] flex-col mt-16 px-5 py-9 rounded-3xl max-md:max-w-full max-md:mt-10">
        <div className="w-full max-w-[1192px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-5">

        <div
        className={` ${
          activeDiv === 'red' ? 'justify-center items-center flex flex-col px-20 py-10 rounded-xl max-md:max-w-full max-md:px-5 bg-red-400' : 'hover:cursor-pointer justify-center items-center border-[color:var(--accents-green,#56CDAD)] flex flex-col mt-7 px-20 py-10 rounded-xl border-2 border-solid max-md:max-w-full max-md:px-5'
        }`}
        onClick={() => handleClick('red')}
      >


         <div 
        className={` ${
          activeDiv === 'red' ? 'text-white text-center text-xl leading-8 ' : 'text-zinc-800 text-center text-xl leading-8'
        }`}>
      
          Contractual Engagement
        </div>
        <div 
        className={` ${
          activeDiv === 'red' ? 'text-white text-center text-6xl font-semibold leading-[66px] self-stretch  mt-2.5 max-md:max-w-full max-md:text-4xl max-md:mr-0.5' : 'text-zinc-800 text-center text-6xl font-semibold leading-[66px] self-stretch mt-2.5 max-md:max-w-full max-md:text-4xl max-md:mr-0.5'
        }`}>
          Freelance
        </div>
      </div>






      <div
        className={` ${
          activeDiv === 'green' ? 'justify-center items-center bg-emerald-300 flex flex-col mt-7 px-20 py-10 rounded-xl border-2 border-solid border-emerald-300 max-md:max-w-full max-md:px-5' : 'hover:cursor-pointer justify-center items-center border-[color:var(--accents-green,#56CDAD)] flex flex-col mt-7 px-20 py-10 rounded-xl border-2 border-solid max-md:max-w-full max-md:px-5'
        }`}
        onClick={() => handleClick('green')}
      >
        <div 
        className={` ${
          activeDiv === 'green' ? 'text-white text-center text-xl leading-8' : 'text-zinc-800 text-center text-xl leading-8'
        }`}>
        
          Part Time Engagement
        </div>

        <div 
        className={` ${
          activeDiv === 'green' ? 'text-white text-center text-6xl font-semibold leading-[66px] self-stretch  mt-2.5 max-md:max-w-full max-md:text-4xl max-md:mr-0.5' : 'text-zinc-800 text-center text-6xl font-semibold leading-[66px] self-stretch  mt-2.5 max-md:max-w-full max-md:text-4xl max-md:mr-0.5'
        }`}>
          20Hrs Weekly
        </div>
      </div>


      <div
        className={` ${
          activeDiv === 'blue' ? 'justify-end items-center border-[color:var(--accents-blue,#26A4FF)] bg-sky-400 flex flex-col mt-7 pl-20 pr-20 py-10 rounded-xl border-2 border-solid max-md:max-w-full max-md:px-5' : 'hover:cursor-pointer justify-center items-center border-[color:var(--accents-green,#56CDAD)] flex flex-col mt-7 px-20 py-10 rounded-xl border-2 border-solid max-md:max-w-full max-md:px-5'
        }`}
        onClick={() => handleClick('blue')}
      >
        <div 
        className={` ${
          activeDiv === 'blue' ? 'text-white text-center text-xl leading-8 ' : 'text-zinc-800 text-center text-xl leading-8'
        }`}>
          Full Time Engagement
        </div>
        <div 
        className={` ${
          activeDiv === 'blue' ? 'text-white text-center text-6xl font-semibold leading-[66px] self-stretch  mt-2.5 max-md:max-w-full max-md:text-4xl max-md:mr-0.5' : 'text-zinc-800 text-center text-6xl font-semibold leading-[66px] self-stretch mt-2.5 max-md:max-w-full max-md:text-4xl max-md:mr-0.5'
        }`}>
          40Hrs Weekly
        </div>
      </div>
 
 
               </div>
            </div>

            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch bg-white flex grow flex-col w-full mx-auto px-10 py-9 rounded-3xl max-md:max-w-full max-md:mt-5 max-md:px-5">
                <div className="text-zinc-800 text-center text-6xl font-semibold leading-[66px] max-md:max-w-full max-md:text-4xl">
                  Benefits{" "}
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <div className="text-zinc-800 text-center text-lg font-semibold leading-7">
                   Low Cost Rates
                  </div>
                  <img
                    loading="lazy"
                    src="https://geriasa.blob.core.windows.net/assets/ticked_a1fa11ef7b.svg"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <div className="text-zinc-800 text-center text-lg font-semibold leading-6 whitespace-nowrap">
                  Dedication Without Overcommiting
                  </div>


                  {activeDiv === 'blue' || activeDiv === 'green' ? (
                    <img
                      loading="lazy"
                      src="https://geriasa.blob.core.windows.net/assets/ticked_a1fa11ef7b.svg"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      src="https://geriasa.blob.core.windows.net/assets/untiked_78451cdeba.svg"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  )}

                </div>
                <div className="justify-between items-stretch flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <div className="text-zinc-800 text-center text-lg font-semibold leading-7">
                    More Flexibility
                  </div>
                  {activeDiv === 'blue' || activeDiv === 'green' ? (
                    <img
                      loading="lazy"
                      src="https://geriasa.blob.core.windows.net/assets/ticked_a1fa11ef7b.svg"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      src="https://geriasa.blob.core.windows.net/assets/untiked_78451cdeba.svg"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  )}
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <div className="text-zinc-800 text-center text-lg font-semibold leading-7">
                    Maximum Stability
                  </div>
                  <img
                    loading="lazy"
                    src="https://geriasa.blob.core.windows.net/assets/ticked_a1fa11ef7b.svg"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <div className="text-zinc-800 text-center text-lg font-semibold leading-7">
                    Total Commitment
                  </div>
                 

                  {activeDiv === 'blue' ? (
                    <img
                      loading="lazy"
                      src="https://geriasa.blob.core.windows.net/assets/ticked_a1fa11ef7b.svg"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      src="https://geriasa.blob.core.windows.net/assets/untiked_78451cdeba.svg"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  )}



                </div>
                <div className="justify-between items-stretch flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <div className="text-zinc-800 text-center text-lg font-semibold leading-7">
                    Full Availability
                  </div>
                  <img
                    loading="lazy"
                    src="https://geriasa.blob.core.windows.net/assets/ticked_a1fa11ef7b.svg"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-orange-50 self-center flex w-full max-w-[1264px] flex-col mt-20 px-5 py-16 rounded-3xl max-md:max-w-full max-md:mt-10">
        <div className="w-full max-w-[1046px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
            <img
  loading="lazy"
  src="https://geriasa.blob.core.windows.net/assets/upsdn_917fadf303.svg"
  className="aspect-[0.98] object-contain object-center w-full overflow-hidden max-md:mt-10 transform rotate-180"
/>
            </div>
            <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-3xl font-semibold leading-10 self-stretch max-md:max-w-full">
                  Find Exciting remote roles that offer healthy work-life
                  balance.
                </div>
                <div className="text-slate-600 text-base leading-6 self-stretch mt-5 max-md:max-w-full">
                  Join the Geria Talent Network to discover exciting tech roles,
                  from great companies with interesting projects and advance
                  your career.
                </div>
                <div className="items-stretch flex w-[321px] max-w-full gap-2.5 mt-5">
                  <Link href="/for-engineers" className="bg-[#D0021B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F5A623] transition-colors">
                    Apply Now
                  </Link>
                </div>
                

                  <div className="text-white text-center text-sm font-bold leading-6  justify-center items-stretch bg-stone-900 grow px-5 py-2.5 rounded-lg max-md:px-px">
                    
                  <Link
                          href={'/hire-talent'}
                          
                        >
                        Hire Talents
                        </Link>
                   
                  </div>
                  {/* <div className="text-stone-900 text-center text-sm font-bold leading-6 justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid max-md:px-px">
                  

                          <Link
                          href={'/signup'}
                          
                        >
                        Register as a Talent
                        </Link>
                  

                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 





      </div>
      <div className='py-[100px] px-10 py-10'>
        <div className='md:mx-auto md:max-w-[830px]'>
          <h2 className='font-bold text-[48px] mb-[24px]'>Not Sure What You Need?</h2>
          <p className='mb-[24px]'>Schedule a 15 minute discovery call with us and together we can figure out how best to satisfy your needs.</p>
          <button
            className='btn-primary'
            onClick={() => setOpen(true)}
          >
            Book an Appointment
          </button>
          <CalendlyPopupWidget
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
    </div>
  )
}
