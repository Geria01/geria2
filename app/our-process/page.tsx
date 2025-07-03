'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function OurProcessPage() {

    const [activeProcess, setActiveProcess] = useState<string | null>(null);

    const handleProcessClick = (divName: string) => {
    setActiveProcess(divName);
    };

    useEffect(() => {
    setActiveProcess('one');
    
    }, []);

    return (
        <div className="bg-white flex flex-col pt-10">
        <div className="bg-slate-50 self-stretch flex w-full flex-col items-center px-5 pt-10 py-9 max-md:max-w-full">
          <div className="w-full max-w-[1151px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch mt-20 w-[58%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-red-600 text-5xl font-semibold leading-[53px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                    <span className="text-zinc-800">
                    We select the <span className="text-red-600">top 1%</span> of remote technologists through rigorous vetting.
                    </span>
                  </div>
                  <div className="text-stone-900 text-xl leading-8 opacity-80 self-stretch mt-3.5 max-md:max-w-full">
                  Our thorough vetting process guarantees only exceptional candidates become part of our talent pool. This way, our talents hit the ground running from day one and bring immediate value to your team.
                  </div>
                  <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 text-white text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-stone-900 w-[127px] max-w-full mt-2.5 px-5 py-2.5 rounded-lg max-md:px-px transition-shadow shadow-md hover:shadow-none">
      <Link href={'/hire-talent'}>
        Hire Now
      </Link>
    </div>
    
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col overflow-hidden relative flex grow  pt-12  max-md:max-w-full max-md:mt-10 max-md:pl-5">
                 
      <div className="max-w-lg mx-auto">
     
        <Image
        width={700}
        height={700}
        src="https://geriasa.blob.core.windows.net/assets/world_Photo_Room_png_Photo_Room_dcb06ca61e.png" alt="world" />
    
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 self-stretch w-full mt-20 pl-20 pt-8 pb-12 rounded-none max-md:max-w-full max-md:mt-10 max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <div className="text-zinc-800 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                  Our vetting Process
                </div>
                <div className="text-stone-900 text-xl leading-8 opacity-80 mt-2.5 max-md:max-w-full">
                  Below are the steps we take in vetting our companies and Tech
                  Talents
                </div>
                {activeProcess === 'one' ? (
      <div className="flex justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 transition-all duration-500 transform hover:scale-105"> 
        <div className="flex basis-[0%] flex-col items-center">
          <div className="text-red-400 text-7xl font-semibold leading-[79px] self-stretch whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">
            01
          </div>
          <div className="bg-red-400 w-[5px] shrink-0 h-[300px] mt-2.5" />
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch self-end max-md:max-w-full">
          <div className="text-red-400 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
            Profile Screening and Shortlisting
          </div>
          <div className="text-stone-900 text-xl leading-8 opacity-80 mt-5 max-md:max-w-full">
            The process begins with prospective candidates submitting their applications and resumes through our online platform. Our team of skilled recruiters and experienced hiring managers carefully review the applications and resumes to ensure they meet the relevant requirements.
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 hover:cursor-pointer transition-all duration-500 transform hover:scale-105" onClick={() => handleProcessClick('one')}>
        <div className="text-stone-900 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">
          01
        </div>
        <div className="text-slate-600 text-5xl font-semibold leading-[53px] self-stretch grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
          Profile Screening and Shortlisting
        </div>
      </div>
    )}
             
    
    
             {activeProcess === 'two' ? (
      <div className="flex justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 transition-all duration-500 transform hover:scale-105">
        <div className="flex basis-[0%] flex-col items-center">
          <div className="text-red-400 text-7xl font-semibold leading-[79px] self-stretch whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">02</div>
          <div className="bg-red-400 w-[5px] shrink-0 h-[300px] mt-2.5" />
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end max-md:max-w-full">
          <div className="text-red-400 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
            Initial Assessment & Language Proficiency
          </div>
          <div className="text-stone-900 text-xl leading-8 opacity-80 mt-5 max-md:max-w-full pr-4">
            Once resumes are reviewed, selected candidates undergo an initial assessment. This involves evaluating proficiency in the language required for the job. At this stage, we gauge your ability to communicate effectively to ensure that you possess the necessary language skills to excel in the role.
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 hover:cursor-pointer transition-all duration-500 transform hover:scale-105" onClick={() => handleProcessClick('two')}>
        <div className="text-stone-900 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">02</div>
        <div className="text-slate-600 text-5xl font-semibold leading-[53px] self-stretch grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
          Initial Assessment & Language Proficiency
        </div>
      </div>
    )}
             
    
             {activeProcess === 'three' ? (
      <div className="flex justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 transition-all duration-500 transform hover:scale-105">
        <div className="flex basis-[0%] flex-col items-center">
          <div className="text-red-400 text-7xl font-semibold leading-[79px] self-stretch whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">03</div>
          <div className="bg-red-400 w-[5px] shrink-0 h-[300px] mt-2.5" />
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end max-md:max-w-full">
          <div className="text-red-400 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
            Technical Assessment
          </div>
          <div className="text-stone-900 text-xl leading-8 opacity-80 mt-5 max-md:max-w-full pr-4">
            Next, we delve into a detailed assessment of candidates&#39; technical capabilities. We&#39;ve designed some of the most challenging and advanced technical assessments to assess the capabilities of our talent. These role-specific tests are highly stringent, selecting only the top 10% of talents.
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 hover:cursor-pointer transition-all duration-500 transform hover:scale-105" onClick={() => handleProcessClick('three')}>
        <div className="text-stone-900 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">03</div>
        <div className="text-slate-600 text-5xl font-semibold leading-[53px] self-stretch grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
          Technical Assessment
        </div>
      </div>
    )}
             
                
             {activeProcess === 'four' ? (
      <div className="flex justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 transition-all duration-500 transform hover:scale-105">
        <div className="flex basis-[0%] flex-col items-center">
          <div className="text-red-400 text-7xl font-semibold leading-[79px] self-stretch whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">04</div>
          <div className="bg-red-400 w-[5px] shrink-0 h-[300px] mt-2.5" />
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end max-md:max-w-full">
          <div className="text-red-400 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px] pr-4 hover:text-red-400">
            Behavioral and Culture fit Assessment
          </div>
          <div className="text-stone-900 text-xl leading-8 opacity-80 mt-5 max-md:max-w-full pr-4">
            This assessment involves structured interviews, situational judgment tests, and scenario-based inquiries to gauge a candidate&#39;s behavioral tendencies and responses. We also carefully assess how well candidates align with the relevant organizational values and work culture through targeted questions and discussions. This two-fold evaluation allows us to understand not only the candidate&#39;s professional competencies but also their interpersonal skills and cultural compatibility.
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 hover:cursor-pointer transition-all duration-500 transform hover:scale-105" onClick={() => handleProcessClick('four')}>
        <div className="text-stone-900 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">04</div>
        <div className="text-slate-600 text-5xl font-semibold leading-[53px] self-stretch grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
          Behavioral and Culture fit Assessment
        </div>
      </div>
    )}
    
    
                                  
    {activeProcess === 'five' ? (
      <div className="flex justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 transition-all duration-500 transform hover:scale-105">
        <div className="flex basis-[0%] flex-col items-center">
          <div className="text-red-400 text-7xl font-semibold leading-[79px] self-stretch whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">05</div>
          <div className="bg-red-400 w-[5px] shrink-0 h-[300px] mt-2.5" />
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end max-md:max-w-full">
          <div className="text-red-400 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px] pr-4 hover:text-red-400">
            Final Interview
          </div>
          <div className="text-stone-900 text-xl leading-8 opacity-80 mt-5 max-md:max-w-full pr-4">
            Successful candidates move to the final stage, which serves to assess not only the candidate&#39;s technical competence but also their overall fit within the relevant organization. This is a crucial step towards making well-informed hiring decisions and ensuring that the selected candidate not only meets the job requirements but also contributes positively to the relevant team and company culture.
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 hover:cursor-pointer transition-all duration-500 transform hover:scale-105" onClick={() => handleProcessClick('five')}>
        <div className="text-stone-900 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">05</div>
        <div className="text-slate-600 text-5xl font-semibold leading-[53px] self-stretch grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[49px] hover:text-red-400">
          Final Interview
        </div>
      </div>
    )}
            
            
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 pr-4">
              <Image
                width={700}
                height={700}
                alt='workers in an office'
                loading="lazy"
                src="https://geriasa.blob.core.windows.net/assets/06196f301_c0fb_4328_8702_0bd04f3bd629_1_1_removebg_preview_b840109831.png"
                className="aspect-[0.92] object-contain object-center w-full overflow-hidden my-auto rounded-[50%] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        
    
        <div className="bg-white flex flex-col">
          <div className="bg-white self-stretch flex w-full flex-col justify-center items-center mt-20 px-5 py-12 max-md:max-w-full max-md:mt-10">
          <div className="flex w-full max-w-[1269px] flex-col items-stretch mt-8 mb-5 max-md:max-w-full">
            <div className="text-zinc-800 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
             Our Parameter
            </div>
            <div className="mt-24 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                    <div className="text-red-600 text-2xl font-semibold leading-7">
                    COMMUNICATION
                    </div>
                    <div className="text-slate-600 text-justify text-base font-medium leading-7 opacity-80 mt-2.5">
                    Assessing the ability to convey ideas clearly and
    effectively, both verbally and in writing.
                    </div>
                    <div className="text-yellow-400 text-2xl font-semibold leading-7 mt-40 max-md:mt-10">
                    COLLABORATION AND TEAMWORK
                    </div>
                    <div className="text-slate-600 text-justify text-base font-medium leading-7 opacity-80 mt-2.5">
                    Evaluating the capacity to work
    harmoniously with others, contribute to a team environment, and navigate
    collaborative tasks.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="justify-end items-stretch bg-red-50 flex grow flex-col w-full pt-5 rounded-lg max-md:max-w-full max-md:mt-7">
                    <Image
                      width={700}
                      height={700}
                      alt='generic image of professional looking woman'
                      loading="lazy"
                      src='https://geriasa.blob.core.windows.net/assets/c603f891_1caf_442e_890b_7ec831a6b9bc_1_a0f01ad418.png'
                      className="aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                    <div className="text-violet-500 text-2xl font-semibold leading-7">
                    ADAPTABILITY
                    </div>
                    <div className="text-slate-600 text-justify text-base font-medium leading-7 opacity-80 mt-2.5">
                    Gauging the flexibility and resilience to adjust to changing
    circumstances and embrace new challenges. To add, we have a talent
    available to accommodate your local time zone.
                    </div>
                    <div className="text-emerald-300 text-2xl font-semibold leading-7 mt-60 max-md:mt-10">
                    PROBLEM-SOLVING
                    </div>
                    <div className="text-slate-600 text-justify text-base font-medium leading-7 opacity-80 mt-2.5">
                    Analyzing the aptitude for critical thinking and creative
    problem-solving, essential for navigating complex issues and making
    informed decisions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    
    
          <div className="justify-center mb-7 items-center bg-slate-50 self-center flex w-full max-w-[1264px] flex-col mt-20 px-5 py-12 rounded-3xl max-md:max-w-full max-md:mt-10">
          <div className="w-full max-w-[1046px] mt-2.5 mb-2.5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                <Image
                  width={700}
                  height={700}
                  loading="lazy"
                  alt='woman working on computer'
                  src="https://geriasa.blob.core.windows.net/assets/upsdn_917fadf303.svg"
                  className="aspect-[0.98] object-contain object-center w-full overflow-hidden grow max-md:mt-10  transform rotate-180"
                />
              </div>
              <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0 ">
                <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-3xl font-semibold leading-10 self-stretch max-md:max-w-full">
                    Find Exciting remote roles that offer healthy work-life
                    balance.
                  </div>
                  <div className="text-slate-600 text-base leading-7 self-stretch mt-5 max-md:max-w-full">
                    We are bridging the gap between economies experiencing a
                    shortage in tech talents like the UK and other parts of Europe
                    and talents in developing countries with proper exposure to
                    exciting job opportunities.
                  </div>
                  <div className="items-stretch flex w-[321px] max-w-full gap-2.5 mt-5">
                    <div className="text-white text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-stone-900 grow px-5 py-2.5 rounded-lg max-md:px-px">
                    <Link
                href={'/hire-talent'}
                
              >
              Hire Talents
              </Link>
         
                    </div>
                    {/* <div className="text-stone-900 text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--brands-tertiary,#FECC00)] grow px-5 py-2.5 rounded-lg border-solid max-md:px-px">
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
    
          <div className="bg-white self-stretch flex w-full flex-col items-center mt-20 px-5 py-12 max-md:max-w-full max-md:mt-10">
            <div className="flex w-full max-w-[1180px] flex-col items-stretch mb-12 max-md:max-w-full max-md:mb-10">
             
            
           
            </div>
          </div>
            {/* This is an inline comment 
          <div className="text-stone-900 text-5xl font-semibold leading-[53px] self-center whitespace-nowrap mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] max-md:mt-10">
            FAQs
          </div>
          <div className="items-stretch self-center bg-gray-400 flex w-full max-w-[1272px] flex-col mt-5 max-md:max-w-full">
            <div className="bg-slate-50 flex justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="text-zinc-700 text-opacity-50 text-7xl font-semibold leading-[79px] max-md:text-4xl max-md:leading-[49px]">
                01
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col mt-1.5 max-md:max-w-full">
                <div className="flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                    What exactly does Geria do?
                  </div>
                  <div className="justify-center items-center bg-black self-stretch flex aspect-square flex-col p-3.5 rounded-3xl">
                    <Image
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b5232c-b00c-4c6d-aa64-be630b3f680c?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                      className="aspect-square object-contain object-center w-5 fill-white overflow-hidden"
                    />
                  </div>
                </div>
                <div className="text-zinc-700 text-opacity-80 text-lg leading-7 mt-6 max-md:max-w-full">
                  We help fast-track the creation of outstanding products through
                  collaboration with our meticulously chosen, expertly vetted remote
                  developer teams. We're committed to propelling your ideas to
                  reality swiftly and with cost-effective precision. With our team
                  of dedicated and skilled professionals, unlock the potential of
                  innovation and efficiency, crafting exceptional solutions that not
                  only meet but surpass your objectives.
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="items-start self-center bg-gray-300 bg-opacity-30 flex w-[1272px] shrink-0 h-[3px] flex-col max-md:max-w-full" />{" "}
          <div className="self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">
              02
            </div>{" "}
            <div className="items-stretch flex gap-4 mt-1.5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                What services do you offer in web and application development?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 flex aspect-square flex-col p-4 rounded-3xl self-start">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c81534a-cbbf-44bd-a779-526c27f103a3?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          <div className="items-start self-center bg-gray-300 bg-opacity-30 flex w-[1272px] shrink-0 h-[3px] flex-col max-md:max-w-full" />{" "}
          <div className="self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">
              03
            </div>{" "}
            <div className="items-stretch flex gap-4 mt-1.5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                Why do I need a Web designer for my websites? Can’t I go straight to
                development?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 flex aspect-square flex-col p-4 rounded-3xl self-start">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/119e5fd6-72ee-4422-9c5a-5b4ff2007e1d?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          <div className="items-start self-center bg-gray-300 bg-opacity-30 flex w-[1272px] shrink-0 h-[3px] flex-col max-md:max-w-full" />{" "}
          <div className="items-center self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] my-auto max-md:text-4xl max-md:leading-[49px]">
              04
            </div>{" "}
            <div className="flex gap-4 my-auto max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                Are your rates competitive?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 self-stretch flex aspect-square flex-col p-4 rounded-3xl">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9288f69-97d1-4a7c-9ee1-1a93cb740c7f?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          <div className="items-center self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] my-auto max-md:text-4xl max-md:leading-[49px]">
              05
            </div>{" "}
            <div className="flex gap-4 my-auto max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                Can you work with specific technologies or platforms?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 self-stretch flex aspect-square flex-col p-4 rounded-3xl">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5140367-3ccf-4a97-a0e4-22a631bfa3c2?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          <div className="items-center self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] my-auto max-md:text-4xl max-md:leading-[49px]">
              06
            </div>{" "}
            <div className="flex gap-4 my-auto max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                How do you handle project timelines and deadlines?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 self-stretch flex aspect-square flex-col p-4 rounded-3xl">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eef9b4d0-95b7-4f76-b0c5-1338905a9be3?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          <div className="self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">
              07
            </div>{" "}
            <div className="items-stretch flex gap-4 mt-1.5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                How do you handle changes or updates to the project scope during
                development?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 flex aspect-square flex-col p-4 rounded-3xl self-start">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/94002aaa-e968-4351-9d34-d1e70d976f54?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          <div className="items-center self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] my-auto max-md:text-4xl max-md:leading-[49px]">
              08
            </div>{" "}
            <div className="flex gap-4 my-auto max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                What is your quality assurance and testing process?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 self-stretch flex aspect-square flex-col p-4 rounded-3xl">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34dd875d-f0e8-4a0d-b1ee-886c1c6a73eb?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          <div className="self-center bg-white flex w-full max-w-[1272px] justify-between gap-5 px-16 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-zinc-700 text-opacity-50 text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">
              09
            </div>{" "}
            <div className="items-stretch flex gap-4 mt-1.5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto max-md:max-w-full">
                How do you handle maintenance and support after the project is
                completed?
              </div>{" "}
              <div className="justify-center items-center bg-gray-100 flex aspect-square flex-col p-4 rounded-3xl self-start">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/813b2beb-86b8-48f3-a445-c8ab541c907a?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-square object-contain object-center w-3.5 fill-black overflow-hidden"
                />
              </div>
            </div>
          </div>{" "}
          */}
        
    
                   
                    </div>
                    </div>
                     
                
                
                
       
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
          );
  }