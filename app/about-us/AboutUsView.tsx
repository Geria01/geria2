'use client'

import Image from 'next/image';
import Link from 'next/link';
import AboutUsImg from '@/public/images/about_us_img.jpg';
import AboutUsImg1 from '@/public/images/about_us_img_1.png';
import Stats from '@/public/images/about_stat_figure.png';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import TalentCard from '@/_components/TalentCard';
import placholderAvatar4 from '@/public/images/avatar4.png';
import placholderAvatar5 from '@/public/images/avatar5.png';
import placholderAvatar6 from '@/public/images/avatar6.png';
//import TalentCard from '../_components/TalentCard';
import { DeveloperAvatar } from '../_models/developerAvatar.model';

// function MemberCarousel({ members }) {


//   return (

//     <div className="">
//     <Carousel
//     showThumbs={true}
//     showStatus={false}
//     useKeyboardArrows={true}
//     infiniteLoop={true}
//     emulateTouch={true}
//     showArrows={false}
//     dynamicHeight={true}
//     renderThumbs={() =>
//       members.map((member) => (
       
//         <div key={member.id} className=" thumb-container mx-2">
//           <img
//               src={member.image}
//               alt={member.name}
//               className="w-90 h-90 border-none cursor-pointer"// Apply Tailwind CSS classes
//             />
//         </div>
       
//       ))
//     }
   
//   >
//     {members.map((member) => (
//   <div key={member.id} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//     <div className="p-4">
//       <img
//         src={member.image}
//         alt={member.name}
//         className="object-contain w-full h-auto"
//       />
//     <div className="text-3xl font-semibold text-stone-900">
//         {member.name}
//       </div>
//       <div className="text-xl font-medium text-slate-600 mb-2">
//         {member.position}
//       </div>
//       <ul className="text-base text-slate-600 font-semibold">
//         {member.skills.map((skill) => (
//           <li key={skill}>{skill}</li>
//         ))}
//       </ul>
//       <a
//         href={member.contactLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-white text-sm font-bold leading-6 bg-stone-900 py-2.5 px-5 rounded-lg mt-4 inline-block"
//       >
//         Hire {member.name}
//       </a>    
//     </div>

//     <div className="p-4 md:pl-0"> {/* Remove left padding on medium screens and larger */}
//       <div className="text-3xl font-semibold text-stone-900">
//         {member.name}
//       </div>
//       <div className="text-xl font-medium text-slate-600 mb-2">
//         {member.position}
//       </div>
//       <ul className="text-base text-slate-600 font-semibold">
//         {member.skills.map((skill) => (
//           <li key={skill}>{skill}</li>
//         ))}
//       </ul>
//       <a
//         href={member.contactLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-white text-sm font-bold leading-6 bg-stone-900 py-2.5 px-5 rounded-lg mt-4 inline-block"
//       >
//         Hire {member.name}
//       </a>
//     </div>
//   </div>
// ))}

//     </Carousel>
//     </div>
//   );
// }

const AboutUsView = () => {

  const [selectedMember, setSelectedMember] = useState(null);

// const generateDevCards = (devs) => {
//   return devs.map((dev, idx) => (
//     <TalentCard
//       key={idx}
//       dev={dev}
//     />
//   ));
// }



const DUMMY_DEVS = [
{
  'id': 1,
  'avatarUrl': placholderAvatar6,
  'name': 'Adrian Smith',
  'location': 'Warsaw, Poland',
  'skills': ['python', 'laravel', 'react.js', 'linux'],
  'experience': '8 years +',
  'timeZone': 'GMT +01:00',
},
{
  'id': 2,
  'avatarUrl': placholderAvatar4,
  'name': 'Lindiwe Lethabo',
  'experience': '8 years +',
  'location': 'Johannesburg, South Africa',
  'skills': ['html', 'css', 'react.js', 'jQuery'],
  'timeZone': 'GMT +02:00',
},
{
  'id': 3,
  'avatarUrl': placholderAvatar5,
  'name': 'Obinna Jackson',
  'location': 'Lagos, Nigeria',
  'skills': ['django', 'ai/ml', 'react.js', 'css'],
  'experience': '10 years +',
  'timeZone': 'GMT +02:00',
}];

  //let a = { avatarUrl, name, location, skills, experience, timeZone } as DeveloperAvatar

const DevCard = (avatar: DeveloperAvatar) => (
<div className='mx-auto p-5 rounded-2xl bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-[#E1ECF0] max-w-[405px]'>
  <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
    <div className='col-span-1 sm:col-span-3'>
      <Image
        className='w-full mb-3'
        src={avatar.avatarUrl}
        height={400}
        width={400}
        alt='Avatar'
      />
      <h3 className='text-2xl sm:text-3xl mb-3'>{avatar.name}</h3>
      <div className='mb-3'>
        <p className='text-sm sm:text-base'>{avatar.location}</p>
        <p className='text-sm sm:text-base'>{avatar.timeZone}</p>
      </div>
      <div className='mb-2'>
        <p className='text-slate-400'>Experience</p>
        <p className='text-sm sm:text-base'>{avatar.experience}</p>
      </div>
      <div className='mb-5'>
        <p className='text-slate-400'>Skills</p>
        {avatar.skills.map((skill: string, index: number) => (
          <span
            key={index}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            {skill}
          </span>
        ))}
      </div>
      <Link className='btn-secondary' href='/hire-talent'>
        Hire {avatar.name.split(' ')[0]}
      </Link>
    </div>
  </div>
</div>

  
  );
  return (
        <div className="bg-white flex-col justify-end items-center overflow-hidden self-center relative flex min-h-[246px] w-full rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="bg-white self-stretch flex w-full flex-col items-center px-5 py-3.5 border-b-white border-b-opacity-30 border-b border-solid max-md:max-w-full" />
          <div className="self-center w-full max-w-[1264px] mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">

                  <div className="text-stone-900 text-5xl font-semibold leading-[52.8px] self-stretch -mr-5 max-md:max-w-full max-md:text-4xl">
                    Brilliance is distributed, opportunity is not.
                  </div>
                  <div className="self-stretch text-stone-900 text-xl leading-8 opacity-80 -mr-5 mt-6 max-md:max-w-full">
                    We believe that borders shouldn’t prevent ambitious
                    organizations from building world-class teams. That’s why we go
                    far and beyond in building outstanding engineering teams -
                    remote, diverse, and sometimes distributed for progressive
                    organisations. Our developer talent network spans Africa, Asia,
                    and Europe, and can plug into your team seamlessly in your
                    preferred time zone.
                  </div>
                  <div className="text-white text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-stone-900 w-[106px] max-w-full mt-6 px-5 py-2.5 rounded-lg max-md:px-px transform transition-transform duration-300 ease-in-out hover:scale-105">
                    <Link
                                     href={'/hire-talent'}
                                     
                                   >
                                   Hire Now
                                   </Link>
                           
                   
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0 transition-transform transform hover:scale-105">
  <img
    loading="lazy"
    src="https://geriasa.blob.core.windows.net/assets/31cebac7_4135_482e_88a1_7824ffef008b_008125756d.svg"
    className="aspect-[0.97] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-5 transition-transform transform hover:scale-105"
  />
</div>

            </div>
          </div>
        
       
      
    <div className="flex flex-col items-center bg-blue-50 self-stretch flex w-full flex-col items-center mt-10 pb-9 px-5 max-md:max-w-full max-md:mt-10">
      <h1 className="text-5xl font-semibold text-stone-900 mb-4 md:text-4xl pt-8">
        Hire vetted tech talents in days
      </h1>
      <p className="text-base text-slate-500 mb-8 md:w-[600px] md:text-center">
        Explore our talent network and find your best match talent.
      </p>
    




    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
    {DUMMY_DEVS.map((dev) => (
      
      <DevCard key={dev.id} {...dev} />
    ))}
  </div>

  

  




</div>



          
          <div className="justify-center items-center bg-slate-50 self-stretch flex w-full flex-col mt-10 pb-10 px-5 max-md:max-w-full max-md:mt-10">
            <div className="w-full max-w-[1034px] max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-row max-md:items-stretch max-md:gap-0">
              <div className="flex flex-row items-stretch w-30 max-w-full md:w-auto md:ml-0">
                  <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-amber-400 text-center text-7xl font-semibold tracking-tighter whitespace-nowrap max-md:text-4xl max-sm:text-sm">
  20+
</div>
<div className="text-slate-600 text-center text-xl font-semibold leading-8 opacity-80 self-center whitespace-nowrap  max-md:text-base sm:text-xs max-sm:text-sm sm:text-xs max-md:text-xs max-sm:text-xxs">
  Technologies
</div>

                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[43%] mx-auto px-2 max-md:w-full max-md:ml-0">
                  <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-amber-400 text-center text-7xl font-semibold tracking-tighter whitespace-nowrap max-md:text-4xl max-sm:text-sm">
                      2000+
                    </div>
                    <div className="text-slate-600 text-center text-xl font-semibold leading-8 opacity-80 self-center  max-md:text-base sm:text-xs max-sm:text-sm sm:text-xs max-md:text-xs max-sm:text-xxs">
                      Tech talents
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[27%] mx-auto px-2 max-md:w-full max-md:ml-0">
                  <div className="justify-center items-center flex grow flex-col max-md:mt-10">
                  <div className="text-amber-400 text-center text-7xl font-semibold tracking-tighter max-md:text-4xl max-sm:text-sm">
                      100+
                    </div>
                    <div className="text-slate-600 text-center text-xl font-semibold leading-8 opacity-80 self-center max-md:text-base sm:text-xs max-sm:text-sm sm:text-xs max-md:text-xs max-sm:text-xxs">
                      Programming Languages
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-900 self-stretch flex w-full flex-col items-center mt-20 pb-9 px-5 mt-10">
            <div className="w-full max-w-[1284px] max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

              <div className="flex mt-5 flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0 relative ">
  <img 
    loading="lazy"
src="https://geriasa.blob.core.windows.net/assets/5c77bfcd_0629_43ac_8cfd_0e79bd594067_2_1_f7053a1731.png"
    className="aspect-[0.93] imgup object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10 transform -translate-y-10/12"
  />
</div>

          
                <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col mt-9 max-md:max-w-full max-md:mt-10">
                    <div className="text-white text-5xl font-semibold leading-[52.8px] max-md:max-w-full max-md:text-4xl">
                      We Are On A Mission
                    </div>
                    <div className="text-white text-justify text-base leading-6 opacity-80 mt-6 max-md:max-w-full">
                      At our core, we&#39;re committed to bridging the gap between
                      organizations seeking diverse talent from across the globe and
                      skilled individuals in pursuit of top-tier job prospects
                      internationally. Our platform is designed to facilitate this
                      connection, fostering a dynamic exchange that drives
                      innovation and fosters growth in the global job market.
                    </div>{" "}
                    <div className="text-red-600 text-3xl font-semibold leading-10 whitespace-nowrap mt-5 max-md:max-w-full">
                      Our Values
                    </div>{" "}
                    <div className="items-stretch flex flex-col mt-5 max-md:max-w-full">
                      <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap max-md:max-w-full">
                        Collaboration
                      </div>{" "}
                      <div className="text-white text-base leading-6 opacity-80 mt-2 max-md:max-w-full">
                        We build better when we work together.
                      </div>
                    </div>{" "}
                    <div className="items-stretch flex flex-col mt-5 max-md:max-w-full">
                      <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap max-md:max-w-full">
                        Integrity
                      </div>{" "}
                      <div className="text-white text-base leading-6 opacity-80 mt-2 max-md:max-w-full">
                        We build trust through responsible actions and honest
                        relationships.
                      </div>
                    </div>{" "}
                    <div className="items-stretch flex flex-col mt-5 max-md:max-w-full">
                      <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap max-md:max-w-full">
                        Diversity
                      </div>{" "}
                      <div className="text-white text-base leading-6 opacity-80 mt-2 max-md:max-w-full">
                        We promote a respectful, vibrant, and open culture.
                      </div>
                    </div>{" "}
                    <div className="items-stretch flex flex-col mt-5 max-md:max-w-full">
                      <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap max-md:max-w-full">
                        Passion
                      </div>{" "}
                      <div className="text-white text-base leading-6 opacity-80 mt-2 max-md:max-w-full">
                        We build and develop teams that care about what they do.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="justify-center items-center bg-orange-50 self-center flex w-full max-w-[1264px] flex-col mt-20 px-5 mb-6 py-16 rounded-3xl max-md:max-w-full max-md:mt-10">
            <div className="w-full max-w-[1046px] max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    src="https://geriasa.blob.core.windows.net/assets/upsdn_917fadf303.svg"
                    className="aspect-[0.98] object-contain object-center w-full overflow-hidden max-md:mt-10 transform rotate-180"
                  />
                </div>{" "}
                <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                    <div className="text-black text-3xl font-semibold leading-10 self-stretch max-md:max-w-full">
                      Find Exciting remote roles that offer healthy work-life
                      balance.
                    </div>{" "}
                    <div className="text-slate-600 text-base font-medium leading-6 self-stretch mt-5 max-md:max-w-full">
                      Join the Geria Talent Network to discover exciting tech roles,
                      from great companies with interesting projects and advance
                      your career.
                    </div>{" "}
                    <div className="items-stretch flex w-[321px] max-w-full gap-2.5 mt-5">
                      <div className="text-white text-center text-sm font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-stone-900 grow px-5 py-2.5 rounded-lg max-md:px-px">
               
                     
          <Link
            href={'/hire-talent'}
            
          >
          Hire Talents
          </Link>
                      </div>{" "}
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
          </div>{" "}
        </div>
            
       
       
   
      )
}

export default AboutUsView;