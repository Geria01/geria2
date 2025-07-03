'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
//import { useAuth } from '@/context/auth';
import NavItem from './NavItem';
import logo from '@/public/images/geria_logo.png';
import { MENU_LIST as menuList } from '../_constants';
import MenuIcon from '@/public/icons/menu.svg';
import CloseIcon from '@/public/icons/close.svg';
import useOutsideClick from '../_hooks/useClickOutside';
import useViewport from '../_hooks/useViewport';
import { usePathname, useRouter } from 'next/navigation';


const Navbar = () => {
  const [open, setOpen] = useState<boolean | null>(null);
  //const { isAuthenticated, signout } = useAuth();
  const isAuthenticated = false;
  const handleClickOutside = () => setOpen(false);
  const { isMobile } = useViewport(768);
  const navRef = useOutsideClick(handleClickOutside, isMobile);

  const router = useRouter();
  const pathname = usePathname()

  // const handleSignout = (event) => {
  //   event.preventDefault();
  //   signout();
  // }
  
  return (
    <header className=''>
      <nav className='w-full bg-white fixed top-0  z-10'>
        <div className='container max-w-screen-xl px-5 items-center flex'>
          <div className='inline-block md:block'>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              <div className='md:hidden'>
                <button
                  className='p-2 border border-gray-400 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <CloseIcon
                      color='black'
                      height={16}
                      width={16}
                    />
                  ) : (
                    <MenuIcon
                      color='black'
                      height={16}
                      width={16}
                    />
                  )}
                </button>
              </div>
              <Link
                className='ml-3 md:ml-0'
                href='/'
              >
                <Image
                  src={logo}
                  height={36}
                  width={80}
                  alt={'logo'} />
              </Link>
            </div>
          </div>
          <div
            className={`md:transform-none md:flex-1 fixed md:static top-0 bottom-0 left-full w-[320px] md:w-auto px-5 py-10 md:py-3 md:p-0 md:h-auto transition duration-300 ease-in-out bg-white md:bg-transparent z-10 md:z-auto md:flex shadow-lg md:shadow-none space-y-8 md:space-y-0 md:gap-x-6 ${open ? '-translate-x-full' : 'translate-x-full'}`}
            ref={navRef} >
            <ul className='lg:text-lg items-center justify-center space-y-8 md:space-y-0 md:flex md:gap-x-6 ml-auto'>
        
      {menuList.map((menuItem, index) => {
        const isActive = pathname === menuItem.href;

        return (
<li key={index} className='text-slate-500 text-xl font-semibold leading-6 whitespace-nowrap hover:shadow-lg hover:border-gray-200 p-1 transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rounded-md'>
            <NavItem
              setOpen={setOpen}
              text={menuItem.text}
              href={menuItem.href}
              active={isActive}
            />
          </li>
        );
      })}
    </ul>
       
            <ul className='lg:text-lg items-center justify-center space-y-8 md:flex md:gap-x-6 md:space-y-0 md:ml-auto'>
              <li className=''>
                <Link
                
                  className='btn-secondary block text-center transform transition-transform duration-300 ease-in-out hover:scale-105'
                  onClick={() => setOpen(false)}
                  href='/hire-talent'>
                  Hire Talent
                </Link>
              </li>
              {/* {!isAuthenticated && (
                <li className='block'>
                  <Link
                    className='block text-fluid-sm text-black text-center font-bold border border-[#FECC00] py-fluid-1 px-fluid-3 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105'
                    // onClick={() => setNavActive(false)}
                    href='/signin'>
                    Sign in
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <>
                  <li className='block rounded-lg hover:bg-slate-100'>
                    <Link
                      className='block text-fluid-sm text-black py-fluid-1 px-fluid-3 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105'
                      // onClick={() => setNavActive(false)}
                      href={'/dashboard'}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className='block rounded-lg hover:bg-slate-100'>
                    <p
                      className='block text-fluid-sm text-black py-fluid-1 px-fluid-3 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105'
                      //onClick={handleSignout}
                    >
                      Sign out
                    </p>
                  </li>
                </>
              )} */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
