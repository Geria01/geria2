'use client'

import React from 'react';
import { useState} from 'react';
import { PopupModal } from 'react-calendly';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const CalendlyPopupWidget = dynamic(() => import('../_components/CalendlyPopupWidget'), { ssr: false });
const WebDevView = () => {
  const [open, setOpen] = useState(false);
    return (
<>
<div className="flex-col justify-end items-center overflow-hidden self-center relative flex min-h-[246px] w-full mt-6 pt-6 max-md:max-w-full max-md:mt-10">

      <div className="flex-col items-center overflow-hidden min-h-[600px] w-full py-20 max-md:max-w-full lg:pl-40">
        <img
          loading="lazy"
          src='https://geriasa.blob.core.windows.net/assets/b6d6ae87_a73b_4dd7_900e_be988d21df76_1_60f041b27b.png'
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative w-full max-w-[1240px] mt-2max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
              <div className="relative flex flex-col my-auto max-md:max-w-full max-md:mt-4">
                <div className="text-red-600 text-5xl font-semibold leading-[53px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                  <span className="text-zinc-800">Bringing Ideas to </span>
                  <span className="text-red-600">Life</span>
                </div>
                <div className="self-stretch text-slate-600 text-xl leading-8 opacity-80 mt-2.5 max-md:max-w-full">
                  At Geria, great digital products start with strong foundations.
                  We combine smart design and expert development to build solutions that work beautifully and deliver fast. Backed by a team of top tech talent, we bring creativity, functionality, and reliability together — so your project not only meets expectations, but exceeds them.
                </div>




                <div className="flex gap-4 mt-2.5">
                  <button
                    className='text-white text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-stone-900 px-5 py-2.5 rounded-lg hover:bg-stone-800 transition-colors'
                    onClick={() => setOpen(true)}
                  >
                    Lets Talk
                  </button>
                  <Link href="/projects" className='text-red-600 text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-white border-2 border-red-600 px-5 py-2.5 rounded-lg hover:bg-red-600 hover:text-white transition-colors'>
                    View Our Projects
                  </Link>
                </div>
                <CalendlyPopupWidget
                  open={open}
                  setOpen={setOpen}
                />







              </div>
            </div>

            <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0 transition-transform transform hover:scale-105">
  <img
    loading="lazy"
    src="https://geriasa.blob.core.windows.net/assets/773a744a_0782_4d70_89f6_62e89486ace7_1_1_94aebc516b.png"
    className="aspect-[1.08] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 transition-transform transform hover:scale-105"
  />
</div>

          </div>
        </div>
      </div>
      <div className="bg-slate-50 self-stretch flex w-full flex-col items-center mt-20 pb-9 px-5 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full max-w-[1269px] flex-col mb-10 max-md:max-w-full">
          <div className="self-stretch pr-px max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[83%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                  <div className="text-zinc-800 text-5xl mt-20 font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                    Our Process
                  </div>
                  <div className="flex flex-col mt-20 pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
  <div className="items-stretch flex w-[378px] max-w-full gap-2.5">
    <div className="text-red-400 text-7xl font-semibold leading-[59px] self-stretch max-md:text-4xl max-md:leading-[49px]">
      01
    </div>
    <div className="text-zinc-800 text-4xl font-semibold leading-[43px] self-center whitespace-nowrap my-auto max-md:text-3xl max-md:leading-[39px]">
      DISCOVERY
    </div>
  </div>
  <div className="text-slate-600 text-justify text-base md:text-xl font-medium leading-8 opacity-80 w-[800px] max-w-full mt-1.5 self-end">
    Our team of seasoned experts doesn&#39;t just develop; we sculpt. The Discovery process is our artisanal approach to ensure that every element of your web or application project is not just functional but finely tuned to your goals. We believe in collaboration, and the discovery phase is where your ideas and our expertise converge. Through in-depth consultations, workshops, and brainstorming sessions, we work side by side with you to crystallize your concepts.
  </div>
</div>
</div></div>
              <div className="flex flex-col items-stretch w-[17%] ml-5  mt-20 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/13481093-4d45-4ae8-b0a0-f0eca98972c1?apiKey=994d997208b34a26ad9d13da5074bcdd&"
                  className="aspect-[1.08] object-contain object-center w-[199px] stroke-[5px] stroke-red-400 overflow-hidden shrink-0 max-w-full grow mt-64 max-md:mt-10 hidden sm:hidden md:block lg:block xl:block"
                />
              </div>
            </div>
          </div>{" "}
          <div className="items-center flex w-[479px] max-w-full gap-2.5 mr-20 mt-11 self-end max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
  <div className="text-zinc-800 text-4xl font-semibold leading-[43px] self-center whitespace-nowrap my-auto max-md:text-3xl max-md:leading-[39px]">
    VISUAL DESIGN
  </div>
  <div className="text-sky-400 text-7xl font-semibold leading-[59px] self-stretch max-md:text-4xl max-md:leading-[49px]">
    02
  </div>
</div>
<div className="self-stretch mt-5 max-md:max-w-full">
  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[17%] mt-10 max-md:w-full max-md:ml-0">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b6fe71b-5ea0-4165-9822-0134fb7b7097?apiKey=994d997208b34a26ad9d13da5074bcdd&"
        className="aspect-[1.08] object-contain object-center w-[200px] stroke-[5px] stroke-emerald-300 overflow-hidden shrink-0 max-w-full grow mt-5 max-md:mt-10 hidden sm:hidden md:block lg:block xl:block"
      />
 </div>
    <div className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0">
      <div className="text-slate-600 text-justify text-base md:text-xl font-medium leading-8 opacity-80 max-md:max-w-full max-md:mt-10">
        In the crowded digital landscape, standing out isn&#39;t just an option; it&#39;s a necessity. We understand the transformative impact of visual design on your web and application projects. It&#39;s not just about aesthetics; it&#39;s about crafting an immersive experience that captivates and resonates. Our visual design approach revolves around your users, ensuring that every interaction is intuitive, engaging, and visually stunning.
      </div>
    </div>
  </div>
</div>{" "}
<div className="self-stretch flex flex-col mt-7 pl-20 max-md:max-w-full max-md:pl-5">
  <div className="items-stretch flex w-[485px] max-w-full gap-2.5 max-md:flex-wrap">
    <div className="text-sky-400 text-7xl font-semibold leading-[59px] max-md:text-4xl max-md:leading-[49px]">
      03
    </div>
    <div className="text-zinc-800 text-4xl font-semibold leading-[43px] self-center whitespace-nowrap my-auto max-md:text-3xl max-md:leading-[39px]">
      DEVELOPMENT
    </div>
  </div>
  <div className="self-center w-full max-w-[1088px] mt-4 max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
        <div className="text-slate-600 text-justify text-base md:text-xl font-medium leading-8 opacity-80 max-md:max-w-full max-md:mt-10">
          At Geria Limited, we bring development to life, transcending lines of code to build solutions that redefine possibilities. Our developers engineer solutions that don&#39;t just meet your current needs but anticipate future growth. Our solutions are not just functional; they are user-centric experiences. From intuitive interfaces to responsive design, every development choice is made with the end user in mind, ensuring a digital journey that captivates and delights.
        </div>
      </div>
      <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a68c70f7-e005-4052-941e-f90b340a26db?apiKey=994d997208b34a26ad9d13da5074bcdd&"
          className="aspect-[1.08] object-contain object-center w-[199px] stroke-[5px] stroke-sky-400 overflow-hidden shrink-0 max-w-full grow mt-12 max-md:mt-10 hidden sm:hidden md:block lg:block xl:block"
        />
      </div>
    </div>
  </div>



  <div className="items-center flex ml-5 w-[60%] max-w-full gap-2.5 mr-10 mt-11 self-end max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
  <div className="text-zinc-800 text-4xl font-semibold   leading-[43px] self-center whitespace-nowrap my-auto max-md:text-3xl max-md:leading-[39px]">
  TESTING AND INTEGRATION
  </div>
  <div className="text-amber-400 text-7xl font-semibold leading-[59px] self-stretch max-md:text-4xl max-md:leading-[49px]">
    04
  </div>
</div>
<div className="self-stretch mt-5 max-md:max-w-full">
  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[17%] mt-10 max-md:w-full max-md:ml-0">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a78a184-87eb-4490-8004-07073e33c6b3?apiKey=994d997208b34a26ad9d13da5074bcdd&"
        className="aspect-[1.08] object-contain object-center w-[200px] stroke-[5px] stroke-emerald-300 overflow-hidden shrink-0 max-w-full grow mt-5 max-md:mt-10 hidden sm:hidden md:block lg:block xl:block"
      />
 </div>
    <div className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0">
      <div className="text-slate-600 text-justify text-base md:text-xl font-medium leading-8 opacity-80 max-md:max-w-full max-md:mt-10">
      Beyond functionality, we prioritize the user experience in our testing protocols. User-centric testing is the cornerstone of our approach, ensuring that your audience encounters a seamless, intuitive, and delightful digital journey. Our testing encompasses robust security checks, ensuring that your web or application is fortified against potential threats.
            </div>
    </div>
  </div>
</div>




</div>
<div className="self-stretch flex flex-col mt-7 pl-20 max-md:max-w-full max-md:pl-5">
  <div className="items-stretch flex w-[485px] max-w-full gap-2.5 max-md:flex-wrap">
    <div className="text-sky-400 text-5xl font-semibold leading-[59px] max-md:text-4xl max-md:leading-[49px]">
      05
    </div>{" "}
    <div className="text-zinc-800 text-4xl font-semibold leading-[43px] self-center whitespace-nowrap my-auto max-md:text-3xl max-md:leading-[39px]">
      DEPLOYMENT
    </div>
  </div>{" "}
  <div className="self-center w-full max-w-[1088px] mt-4 max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
        <div className="text-slate-600 text-justify text-base md:text-xl font-medium leading-8 opacity-80 max-md:max-w-full max-md:mt-10">
          At Geria, we engineer solutions that scale effortlessly, ensuring that as your audience grows, your digital presence expands harmoniously. Our deployment strategies are designed to minimize disruption, ensuring that your audience experiences a seamless transition to the enhanced version of your digital solution. It&#39;s not just about launching; it&#39;s about launching without missing a beat.
        </div>
      </div>
      <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">

      </div>
    </div>
  </div>
</div>
</div>
</div>
      <div className="self-center w-full max-w-[1273px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">


      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 transform transition-transform hover:scale-105">
  <div className="justify-center items-stretch bg-slate-50 flex grow flex-col w-full mx-auto pl-5 pr-5 py-7 rounded-3xl max-md:mt-2 shadow-lg hover:shadow-2xl">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e423a7ad-b99d-423d-b7ef-ebe078874838?apiKey=994d997208b34a26ad9d13da5074bcdd&"
      className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full md:block lg:block xl:block"
    />
    <div className="text-stone-900 text-xl font-semibold leading-6 self-center pb-5 transition-colors hover:text-red-500">
      Cross Platform Compatible
    </div>
    <div className="text-slate-500 text-center text-base leading-7 opacity-80 ">
      We enhance your brand&#39;s digital presence through our specialized expertise in application development. Our solutions are crafted to meet the most rigorous design standards, ensuring flawless user interfaces and experiences on diverse platforms such as Chrome, Safari, and other web browsers. Partner with us for a strategic approach to optimizing your digital footprint.
    </div>
  </div>
</div>



          <div className="flex flex-col w-[33%] ml-5 max-md:w-full max-md:ml-0 transform transition-transform hover:scale-105">
          <div className="justify-center items-stretch bg-slate-50 flex grow flex-col w-full mx-auto pl-5 pr-5 py-7 rounded-3xl max-md:mt-5 shadow-lg hover:shadow-2xl">
    <img
      loading="lazy"
      src="https://geriasa.blob.core.windows.net/assets/csupport_747ab71638.png"
      className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
    />
    <div className="text-zinc-800 text-xl font-semibold leading-6 self-center pb-5 transition-colors hover:text-red-500">
      Best Customer Experience
    </div>
    <div className="text-slate-500 text-center text-base leading-7 opacity-80">
      Ascend beyond the competition with our consulting expertise as we shape your unique app concepts into cutting-edge visuals meticulously designed to captivate and sustain an unparalleled user experience. Elevate your brand by delivering not just a product but a seamless journey that fosters lasting connections with your customers. At every touchpoint, we prioritize excellence to ensure your users receive the best possible interaction with your application.
    </div>
  </div>
</div>

<div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 transform transition-transform hover:scale-105">
  <div className="justify-center items-stretch bg-slate-50 flex grow flex-col w-full mx-auto pl-5 pr-5 py-7 rounded-3xl max-md:mt-5 shadow-lg hover:shadow-2xl">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4690a51b-9e13-4a53-949d-cbde2780c986?apiKey=994d997208b34a26ad9d13da5074bcdd&"
      className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
    />
    <div className="text-stone-900 text-xl font-semibold leading-6 self-center transition-colors hover:text-red-500">
      Competitive Advantage
    </div>
    <div className="text-slate-500 text-center text-base leading-7 opacity-80 pb-5">
      Harness the potential of a distinctive competitive advantage that propels your business into a league of its own, surpassing competitors and claiming dominance in the market. Whether derived from groundbreaking innovation, cost-effectiveness, compelling branding, or a strategic blend of factors, it serves as the catalyst for unparalleled success and profitability. We elevate your business strategy, distinguish you, and help your business thrive in the marketplace!
    </div>
  </div>
</div>

        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1273px] mt-10 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">


        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 transform transition-transform hover:scale-105">
  <div className="justify-center items-stretch bg-slate-50 flex grow flex-col w-full mx-auto pl-5 pr-5 py-7 rounded-3xl max-md:mt-2 shadow-lg hover:shadow-2xl">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e323167-a5f0-4312-86d8-29e17de5db67?apiKey=994d997208b34a26ad9d13da5074bcdd&"
      className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
    />
    <div className="text-stone-900 text-xl font-semibold leading-6 self-center pb-5 transition-colors hover:text-red-500">
      Expand Reach Market
    </div>
    <div className="text-slate-500 text-center text-base leading-7 opacity-80">
      Prepare to enhance your business influence significantly. Break through limitations and expand into new markets with strategic precision. Whether you aim to reach untapped global audiences or cultivate stronger connections within your local community, rest assured, we possess the winning strategy for your success.
    </div>
  </div>
</div>
{" "}
<div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 transform transition-transform hover:scale-105">
  <div className="justify-center items-stretch bg-slate-50 flex grow flex-col w-full mx-auto pl-5 pr-5 py-12 rounded-3xl max-md:mt-5 shadow-lg hover:shadow-2xl">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eb60456-d0a1-474c-9c27-2aa8e99adeaf?apiKey=994d997208b34a26ad9d13da5074bcdd&"
      className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full mt-4"
    />
    <div className="text-zinc-800 text-xl font-semibold leading-6 self-center mt-5 transition-colors hover:text-red-500">
      Boost Usability
    </div>
    <div className="text-slate-500 text-center text-base leading-7 opacity-80 mt-5 mb-4">
      Transform your business landscape with our expertise in usability! By seamlessly integrating innovation and user-centric design, we elevate your brand to unprecedented heights. Unleash the power of effortless interaction, and witness a significant surge in customer satisfaction. This is the distinctive touch we bring to enhance the success of your business.
    </div>
  </div>
</div>
{" "}
<div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 transform transition-transform hover:scale-105">
  <div className="justify-center items-stretch bg-slate-50 flex grow flex-col w-full mx-auto pl-5 pr-5 py-12 rounded-3xl max-md:mt-5 shadow-lg hover:shadow-2xl">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd9e982a-dd48-464a-a45a-f4703e20bca2?apiKey=994d997208b34a26ad9d13da5074bcdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9e982a-dd48-464a-a45a-f4703e20bca2?apiKey=994d997208b34a26ad9d13da5074bcdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9e982a-dd48-464a-a45a-f4703e20bca2?apiKey=994d997208b34a26ad9d13da5074bcdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9e982a-dd48-464a-a45a-f4703e20bca2?apiKey=994d997208b34a26ad9d13da5074bcdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9e982a-dd48-464a-a45a-f4703e20bca2?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9e982a-dd48-464a-a45a-f4703e20bca2?apiKey=994d997208b34a26ad9d13da5074bcdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9e982a-dd48-464a-a45a-f4703e20bca2?apiKey=994d997208b34a26ad9d13da5074bcdd&"
      className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full mt-1"
    />
    <div className="text-stone-900 text-xl font-semibold leading-6 self-center mt-5 transition-colors hover:text-red-500">
      Flexible & Scalable
    </div>
    <div className="text-slate-500 text-center text-base leading-7 opacity-80 mt-5 mb-1">
      Enable your strategic vision through adaptable applications. Our tailored solutions are designed to flex and scale effortlessly, aligning with the dynamic evolution of your goals. Your success is not merely a milestone; it&#39;s an enduring journey. Are you prepared for a technological transformation that aligns with your aspirations? Let&#39;s collaborate to build, scale, and conquer new horizons!
    </div>
  </div>
</div>

        </div>
      </div>{" "}
      <div className="justify-center items-center bg-zinc-800 self-stretch flex w-full flex-col mt-20 px-5 py-6 max-md:max-w-full max-md:mt-10">
        <div className="items-stretch flex w-full max-w-[1220px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="items-center flex grow basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://geriasa.blob.core.windows.net/assets/angular_ac442b71e8.png"
              className="aspect-[1.09] object-contain object-center w-[72px] overflow-hidden"
            />{" "}            <div className="text-white text-xl font-semibold leading-7 self-stretch whitespace-nowrap mt-2.5 text-center">
              Angular
            </div>
          </div>{" "}
          <div className="items-center flex grow basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://geriasa.blob.core.windows.net/assets/kisspng_javascript_scalable_vect_6757a6f2da.png"
              className="aspect-square object-contain object-center w-[66px] overflow-hidden max-w-full"
            />{" "}
            <div className="text-white text-xl font-semibold leading-7 self-stretch whitespace-nowrap mt-2.5 text-center">
              JavaScript
            </div>
          </div>{" "}
          <div className="items-center flex grow basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://geriasa.blob.core.windows.net/assets/react_16de998532.png"
              className="aspect-square object-contain object-center w-[66px] overflow-hidden"
            />{" "}
            <div className="text-white text-xl font-semibold leading-7 self-stretch whitespace-nowrap mt-2.5 text-center">
              React
            </div>
          </div>{" "}
          <div className="items-center flex grow basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://geriasa.blob.core.windows.net/assets/sql_d0f41ba480.png"
              className="aspect-square object-contain object-center w-[66px] overflow-hidden max-w-full"
            />{" "}
            <div className="text-white text-xl font-semibold leading-7 self-stretch whitespace-nowrap mt-2.5 text-center">
              SQL Server
            </div>
          </div>{" "}
          <div className="items-center flex grow basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://geriasa.blob.core.windows.net/assets/net_3cca6ffd76.png"
              className="aspect-square object-contain object-center w-[66px] overflow-hidden"
            />{" "}
            <div className="text-white text-xl font-semibold leading-7 self-stretch whitespace-nowrap mt-2.5 text-center">
              Dotnet
            </div>
          </div>{" "}
          <div className="items-center flex grow basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://geriasa.blob.core.windows.net/assets/node_e20c81606a.png"
              className="aspect-[1.12] object-contain object-center w-[74px] overflow-hidden"
            />{" "}
            <div className="text-white text-xl font-semibold leading-7 self-stretch whitespace-nowrap mt-2.5 text-center">
              Node.JS
            </div>
          </div>
        </div>
      </div>{" "}



  </div> 

</>

    );}

    export default WebDevView;