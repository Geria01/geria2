import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/geria_logo.png';
import Close from '@/public/icons/close.svg';

const SecondaryNav = ( { backLink }: { backLink: string }) => {
  return (
    <>
      <Link
        className='absolute top-2 left-5 md:left-10'
        href='/'
      >
        <Image
          src={logo}
          height={36}
          width={80}
          alt={'Logo'}
        />
      </Link>
      <Link
        href={backLink}
        type='button'
        className='absolute top-2 right-5 md:right-10 bg-white rounded-md p-2 inline-flex 
      items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 
      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
      >
        <span className='sr-only'>Close button</span>
        <Close className='h-[24px]' />
      </Link>
    </>
  );
}

export default SecondaryNav;
