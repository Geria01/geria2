import { useRouter } from 'next/router';

import successImage from '@/public/images/success.png';
import Image from 'next/image';

const Success = () => {
  const { push } = useRouter();

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='w-[500px] text-center p-8'>
        <Image
          className='mb-3'
          src={successImage}
          alt={'Success image'}
          height={293}
          width={408}
        />
        <h3 className='mb-3 text-4xl'>
          Thank you for submitting your request
        </h3>
        <p className='text-[#515B6F] mb-6'>
          Our team is reviewing your request and will be in touch with you shortly to discuss your needs further.
        </p>
        <button
          className='w-full border border-[#FECC00] font-bold rounded-lg py-3'
          onClick={() => push('/')}
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

export default Success;
