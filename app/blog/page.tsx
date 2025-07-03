'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import postsJson from './posts.json';
import Image from 'next/image';
import SearchIcon from '../../public/icons/search_icon.svg';

export default function BlogPage() {

   var { post1, posts } = postsJson;

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleCategoryClick = (divName: string) => {
      setActiveCategory(divName);
    };
  
    useEffect(() => {
      setActiveCategory('all');
    }, []);
  
  
  
  
      return (
   
  
      <>
  
  
  
  <div className="flex-col justify-end items-center overflow-hidden self-center relative flex w-full mt-20 px-4 lg:pl-10 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
  <Image
    alt="black background"
    loading="lazy"
    width={400}
    height={400}
    src="https://geriasa.blob.core.windows.net/assets/1c85d6f9_95e0_4a18_ba35_f7b2dc660237_2_modified_1_22d50dbe82.png"
    className="hidden lg:block absolute z-[-1] h-full w-full object-center inset-0 rounded-lg lg:p-10 sm:rounded-none"
  />
    <div className="relative self-center flex w-full max-w-full grow flex-col lg:pt-10">
      <div className="text-white text-4xl md:text-7xl font-semibold lg:pt-20 leading-[55.2px] self-center whitespace-nowrapmax-md:text-4xl">
        Our Blog
      </div>
      <div className="text-stone-900 text-4xl md:text-7xl font-semibold lg:pt-20 leading-[55.2px] self-center whitespace-nowrap max-md:text-4xl sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
    Our Blog
  </div>
  
  
      <div className="items-start border-[color:var(--neutrals-20,#D6DDEB)] bg-gray-200 self-stretch flex justify-between gap-2 md:gap-5 mt-2 md:mt-10 pl-2 md:pl-5 pr-2 md:pr-[270px] py-2 md:py-4 rounded-[20px] md:rounded-[40px] border-[1px] md:border-[3px] border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5 sm:w-90 sm:mx-auto">
  
        {/* <Image
          alt="search icon"
          loading="lazy"
          width={200}
          height={200}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ad2fcf-d861-44b5-8ad4-686925f8f452?apiKey=994d997208b34a26ad9d13da5074bcdd&"
          className="aspect-square object-contain object-center w-4 md:w-8 justify-center items-center overflow-hidden self-stretch max-w-full"
        /> */}
        <div className="aspect-square object-contain object-center w-4 md:w-8 justify-center items-center overflow-hidden self-stretch max-w-full">
        <SearchIcon
          width={200}
          height={200}
        />
        </div>
        
        <div className="flex items-center space-x-1 md:space-x-2">
     
          <input type="text" placeholder="Search" className="text-sm md:text-base font-semibold leading-4 md:leading-6 self-center whitespace-nowrap my-auto bg-transparent outline-none border-none focus:ring-0" />
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
      <div className="mx-auto lg:w-1/2">
  
  
  
  
      <div className="bg-white flex justify-center flex-col">
    <div className="overflow-x-auto items-start whitespace-nowrap max-w-screen gap-2.5 mt-5 px-5 max-md:flex-wrap max-md:justify-center max-md:mt-5">
    <div
    className={`${
      activeCategory === 'all'
        ? 'text-white lg:ml-20 mr-4 text-center text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center bg-stone-900 inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for active state
        : 'text-stone-900  lg:ml-20 text-center mr-4 text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border border-[color:var(--brands-tertiary,#FECC00)] inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for inactive state
    } transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer`}
    onClick={() => handleCategoryClick('all')}
  >
        All
      </div>
  
   
      <div
    className={`${
      activeCategory === 'Remote Work'
        ? 'text-white mr-4 text-center text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center bg-stone-900 inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for active state
        : 'text-stone-900 text-center mr-4 text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border border-[color:var(--brands-tertiary,#FECC00)] inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for inactive state
    } transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer`}
    onClick={() => handleCategoryClick('Remote Work')}
  >
       Remote Work
    </div>
    
    <div
    className={`${
      activeCategory === 'Technology'
        ? 'text-white mr-4 text-center text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center bg-stone-900 inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for active state
        : 'text-stone-900 text-center mr-4 text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border border-[color:var(--brands-tertiary,#FECC00)] inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for inactive state
    } transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer`}
    onClick={() => handleCategoryClick('Technology')}
  >
    Technology
  </div>
  
  
  
  <div
    className={`${
      activeCategory === 'Hiring'
        ? 'text-white mr-4 text-center text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center bg-stone-900 inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for active state
        : 'text-stone-900 text-center mr-4 text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border border-[color:var(--brands-tertiary,#FECC00)] inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for inactive state
    } transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer`}
    onClick={() => handleCategoryClick('Hiring')}
  >
    Hiring
    </div>
  
   
    <div
    className={`${
      activeCategory === 'Build'
        ? 'text-white mr-4 text-center text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center bg-stone-900 inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for active state
        : 'text-stone-900 text-center mr-4 text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border border-[color:var(--brands-tertiary,#FECC00)] inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for inactive state
    } transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer`}
    onClick={() => handleCategoryClick('Build')}
  >
    Build 
    </div>
  
    <div
    className={`${
      activeCategory === 'eng'
        ? 'text-white mr-4 text-center text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center bg-stone-900 inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for active state
        : 'text-stone-900 text-center mr-4 text-xs sm:text-sm font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border border-[color:var(--brands-tertiary,#FECC00)] inline-block max-w-full px-3 py-2 rounded-lg sm:px-5 sm:py-2.5 max-md:px-5 max-sm:text-xs' // Responsive styles for inactive state
    } transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer`}
    onClick={() => handleCategoryClick('eng')}
  >
    Engineering
    </div>
      
    </div>
  </div>
  
  
  
  
  </div>
  
  
  
  
  
  
      <div className="bg-white flex flex-col sm:pt-5 lg:pt-20">
  
  
        
        <div className="self-center w-full max-w-[1364px] px-2 max-md:max-w-full max-md:mt-0">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
  
  
            <Link as={`/blog/${post1.id}`} href="/blog/[id]">
               
         
       
               
            <Image
                alt="none"
                loading="lazy"
                width={400}
                height={400}
                src= {post1.image}
                className="aspect-[1.15] object-center w-full self-stretch overflow-hidden grow max-md:max-w-full max-md:mt-5 w-full max-w-full rounded-[10%]"
             />
         
         
         </Link>
    
  
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <Link as={`/blog/${post1.id}`} href="/blog/[id]">
                <div className="text-red-600 text-sm font-semibold leading-6 self-start max-md:max-w-full">
  
                {post1.category}
                </div>
                <div  className=" cursor-pointer text-stone-900 text-3xl font-semibold leading-10 self-start max-md:max-w-full">
                {post1.title}
                </div>
                <div className="text-slate-500 text-base font-medium leading-6 mt-5 self-start max-md:max-w-full">
                {post1.previewText}
                </div>
             </Link>
                <div className="items-start flex w-[268px] max-w-full gap-2.5 mt-5 self-start">
                  <Image
                    alt="generic person"
                    loading="lazy"
                    width={400}
                    height={400}
                    src={post1.authorAvatarUrl}
                    className="aspect-square object-contain object-center w-[50px] overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                  />
                  <div className="items-start content-start flex-wrap self-stretch flex flex-col">
                    <div className="text-stone-900 text-xl font-semibold leading-6 self-stretch whitespace-nowrap">
                    {post1.authorName}
                    </div>
                    <div className="self-stretch flex items-start justify-between gap-5 mt-2.5">
                      <div className="text-slate-500 text-sm font-semibold leading-6">
                       {post1.date} 10:30am
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
   
        <div className="items-start self-center flex w-full max-w-[1361px] flex-col mt-20  max-md:max-w-full max-md:mt-10">
          <div className="text-stone-900 text-5xl font-semibold leading-[52.8px] sm: px-5 self-stretch whitespace-nowrap -mr-5 max-md:max-w-full max-md:text-4xl">
            Other Articles
          </div>
  
  
  
        <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  
  
        {
        
        
        posts
    .filter((post) => post.category === activeCategory || activeCategory === 'all' )
    .map((post) => (
         <div className="m-3" key={post.id}>
         <Link as={`/blog/${post.id}`} href="/blog/[id]">
        
         <div className="items-start flex grow flex-col max-md:mt-5 transform transition-transform duration-300 hover:scale-105">
    <Image
      alt=""
      loading="lazy"
      src={post.image}
      width={400}
      height={400}
      className="aspect-[1.18] w-full overflow-hidden self-stretch rounded-[10%]"
    />
    <div className="items-start self-stretch flex grow flex-col mt-5">
      <div className="self-stretch text-violet-500 text-sm font-semibold leading-6">
        {post.category}
      </div>
      <div className="self-stretch text-stone-900 text-2xl font-semibold leading-7 mt-2.5">
        {post.title}
      </div>
      <div className="self-stretch text-slate-500 text-base font-medium leading-6 mt-2.5">
        {post.previewText}
      </div>
      <div className="items-start self-stretch flex justify-between gap-2.5 mt-2.5 pr-36 max-md:pr-5">
        <Image
          alt="generic person"
          loading="lazy"
          width={400}
          height={400}
          src={post1.authorAvatarUrl}
          className="aspect-square object-contain object-center w-[50px] overflow-hidden self-center max-w-full my-auto rounded-[50%]"
        />
        <div className="items-start content-start flex-wrap self-stretch flex flex-col">
          <div className="text-stone-900 text-xl font-semibold leading-6 self-stretch whitespace-nowrap">
            {post.authorName}
          </div>
          <div className="self-stretch flex items-start justify-between gap-5 mt-2.5">
            <div className="text-slate-500 text-sm font-semibold leading-6">
              {post.date} 10:30am
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
       
         </Link>
  </div>
     ))}
  
        </div>
      </div>
     
        </div>
       
         
       
      </div>
   
  
  
  
      </>
   
  
  
  
  
      )

  }