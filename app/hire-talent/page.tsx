"use client";

import React, { ChangeEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import SecondaryNav from '../_components/SecondaryNav';
import { ToastContainer } from 'react-toastify';
import { useFormStatus, useFormState } from 'react-dom';
import { submitForm } from './actions';
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit"
    aria-disabled={pending}
    className='ml -auto inline-block font-bold rounded-lg bg-[#1C1B17] text-[#FFFFFF] py-3 px-16 disabled:opacity-80'
    disabled={ pending }
    >
    Send
  </button>
  );
}


const initialState = {
  message: 'no msg',
  formSubmitted: false
};

export default function HireTalentPage() {
  
  const [state, formAction] = useFormState(submitForm, initialState);

  console.log('state', state);
  if (state?.formSubmitted) {
    return (
      <div className='mx-auto max-w-[620px] pt-52 pb-52 px-6'>
     <div className='text-[#515B6F]'>
     <div className='flex justify-center'>
              <div className='mx-auto'>
                <p className='text-base pb-8 mx-auto'>Form has been submitted successfully!</p>
                <div className='flex justify-center'>
                  <Link href={"/"} passHref={true}>
                    <button
                    className='mx-auto inline-block font-bold rounded-lg bg-[#1C1B17] text-[#FFFFFF] py-3 px-16 disabled:opacity-80'
                    >
                    Return home
                    </button>
                  </Link>
                </div>
              </div>
      </div>
      </div>
    </div>
    )
  }

  return (
    <div className='mx-auto max-w-[620px] pt-32 pb-20 px-6'>
    <h1 className='text-fluid-4xl'>Hire Talent</h1>
   <div className='text-[#515B6F]'>
    </div>
    <form action={formAction}>
    <div className='mb-3 mt-8'>
      <label 
      htmlFor="hiringCompany" 
      className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
        Your Company
      </label>
      <input type="text" id="hiringCompany" name="hiringCompany" placeholder='Hiring Company' className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]' />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </div>
    <div className='mb-3'>
      <label 
      htmlFor="contactName" 
      className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
        Contact Name
        <span className='text-[#ff0000]'>*</span>
      </label>
      <input type="text" id="contactName" name="contactName" required placeholder='Contact Name' className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]' />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </div>
    <div className='mb-3'>
      <label 
      htmlFor="email" 
      className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
        Email Address
        <span className='text-[#ff0000]'>*</span>
      </label>
      <input type="text" id="email" name="email" required placeholder='Email' className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]' />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </div>
    <div className='mb-3'>
      <label 
      htmlFor="needs" 
      className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
        Tell us your needs
      </label>
      <textarea  id="needs" name="needs" placeholder='e.g. full stack developer with 5 years experience...' className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]' />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </div>
    <SubmitButton />
  </form>
  </div>
  )

  }