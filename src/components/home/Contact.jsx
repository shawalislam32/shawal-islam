'use client';
import Link from 'next/link';
import React from 'react';
import { TbSend2 } from 'react-icons/tb';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSend = (e) => {
    e.preventDefault();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sent Successfully',
      showConfirmButton: false,
      timer: 1500,
    });
    e.currentTarget.reset();
  };
  return (
    <div
      id='contact'
      className='mb-10 flex flex-col items-center justify-center rounded-xl bg-base-200 p-5 backdrop-blur-[2px] dark:bg-gray-800/50 dark:text-white md:p-10 lg:mb-16 lg:p-16'
    >
      <div className='pb-5 lg:pb-10'>
        <h2 className='mb-4 text-center text-2xl font-bold text-secondary lg:text-3xl'>
          Get In Touch
        </h2>
      </div>
      <hr className='bg-gray-300' />

      <div className='grid grid-cols-1 justify-between gap-10 lg:grid-cols-2'>
        {/* details section */}
        <div className='m-0 grid w-full grid-cols-1 items-center justify-center p-0'>
          <h1 className='hidden w-full border-b border-gray-300 text-center text-xl font-semibold capitalize lg:block lg:border-none lg:text-start'>
            Contact me for collaboration
          </h1>
          <div className='mt-6 flex w-full flex-col items-start space-y-8 md:mt-8'>
            <Link
              href={`https://maps.app.goo.gl/SDrHsJwDzPH4y5Nz5`}
              target='_blank'
              className='-mx-2 flex items-start duration-200 hover:scale-105'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-2 h-6 w-6 text-blue-500 dark:text-blue-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                ></path>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                ></path>
              </svg>
              <span className='mx-2 truncate text-gray-700 dark:text-gray-400 md:max-w-xs lg:max-w-md'>
                Monnafer More, Rajshahi, Bangladesh
              </span>
            </Link>
            <Link
              href={`https://wa.me/+8801608172430"`}
              target='_blank'
              className='-mx-2 flex items-start duration-200 hover:scale-105'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-2 h-6 w-6 text-blue-500 dark:text-blue-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                ></path>
              </svg>
              <span className='mx-2 truncate text-gray-700 dark:text-gray-400 md:max-w-xs lg:max-w-md'>
                (+880) 1608172430 (WhatsApp)
              </span>
            </Link>
            <Link
              href={`mailto:shawalislam606@gmail.com`}
              className='-mx-2 flex items-start duration-200 hover:scale-105'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-2 h-6 w-6 text-blue-500 dark:text-blue-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                ></path>
              </svg>
              <span className='mx-2 truncate text-gray-700 dark:text-gray-400 md:max-w-xs lg:max-w-md'>
                shawalislam606@gmail.com
              </span>
            </Link>
          </div>
          {/* social links */}
          <div className='mt-8 flex w-full items-center justify-start gap-4 md:mt-6'>
            <Link href={`https://github.com/shawalislam32`} target='_blank'>
              <FaGithub className='text-3xl text-gray-500 duration-200 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-secondary' />
            </Link>
            <Link
              href={`https://www.linkedin.com/in/shawal-islam`}
              target='_blank'
            >
              <FaLinkedinIn className='text-3xl text-gray-500 duration-200 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-secondary' />
            </Link>
            <Link href={`https://facebook.com/shawal.islam.32`} target='_blank'>
              <FaFacebook className='text-3xl text-gray-500 duration-200 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-secondary' />
            </Link>
            <Link
              href={`https://www.instagram.com/_does.nt_matter_`}
              target='_blank'
            >
              <FaInstagram className='text-3xl text-gray-500 duration-200 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-secondary' />
            </Link>
            {/* <Link href={`https://x.com/`} target="_blank">
                            <FaTwitter className="text-3xl text-gray-500 duration-200 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-secondary" />
                        </Link> */}
            {/* <Link
                            href={`https://www.youtube.com/@`}
                            target="_blank"
                        >
                            <FaYoutube className="text-3xl text-gray-500 duration-200 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-secondary" />
                        </Link> */}
            {/* <Link
                            href={`https://stackoverflow.com/`}
                            target="_blank"
                        >
                            <FaStackOverflow className="text-3xl text-gray-500 duration-200 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-secondary" />
                        </Link> */}
          </div>
        </div>

        {/* form section */}
        <div className='mt-10 w-full lg:mt-0'>
          <div className='flex flex-col items-center justify-center rounded-xl dark:text-white'>
            <form
              onSubmit={handleSend}
              className='mx-auto flex max-w-screen-lg flex-col gap-5'
            >
              <h1 className='mb-2 hidden border-b border-gray-300 text-center text-xl font-semibold lg:block lg:border-none lg:text-start'>
                Lets Work Togther!
              </h1>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='input w-full overflow-hidden rounded-xl border-2 border-transparent bg-base-100 outline-none transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(127,72,230,0.2)] dark:bg-black'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='input w-full overflow-hidden rounded-xl border-2 border-transparent bg-base-100 outline-none transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(127,72,230,0.2)] dark:bg-black'
                required
              />
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='input w-full overflow-hidden rounded-xl border-2 border-transparent bg-base-100 outline-none transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(127,72,230,0.2)] dark:bg-black'
                required
              />
              <textarea
                name='message'
                placeholder='Message'
                className='input h-24 w-full overflow-hidden rounded-xl border-2 border-transparent bg-base-100 pt-3 outline-none transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(127,72,230,0.2)] dark:bg-black'
                required
              ></textarea>
              <div className='flex flex-col items-center justify-between gap-5 lg:flex-row'>
                <button className='btn w-36 rounded-full border-none bg-[#0082C4] text-white hover:bg-[#1ab3ff]'>
                  Send <TbSend2 className='text-lg' />
                </button>
                <p className='text-center'>
                  * I promise the confidentiality of your personal information
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
