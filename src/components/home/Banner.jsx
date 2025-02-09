'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-5 rounded-xl bg-base-200 p-5 backdrop-blur-[2px] dark:bg-gray-800/50 md:p-10 lg:flex-row lg:px-5 lg:py-[85px]'>
      <div className='flex w-full flex-col items-center justify-center lg:w-1/2'>
        <div className='rounded-2xl border-[2px] border-secondary p-2 duration-300 hover:bg-blue-500/20 lg:rounded-full'>
          <Image
            src={`/shawal.png`}
            alt='Shawal Islam Photo'
            height={1080}
            width={1080}
            className='mx-auto w-[200px] rounded-[10px] md:w-[250px] lg:w-[300px] lg:rounded-full'
          />
        </div>
        {/* links */}
        <div className='mt-10 flex items-center justify-center gap-3'>
          <Link
            href={`/`}
            className='tooltip tooltip-bottom rounded-full bg-white p-2 duration-300 hover:bg-black hover:text-white'
            data-tip='GitHub'
          >
            <FiGithub className='text-2xl' />
          </Link>
          <Link
            href={`/`}
            className='tooltip tooltip-bottom rounded-full bg-white p-2 duration-300 hover:bg-blue-600 hover:text-white'
            data-tip='LinkedIn'
          >
            <FiLinkedin className='text-2xl' />
          </Link>
          <Link
            href={`/`}
            className='tooltip tooltip-bottom rounded-full bg-white p-2 duration-300 hover:bg-blue-500 hover:text-white'
            data-tip='X'
          >
            <FiTwitter className='text-2xl' />
          </Link>
          <Link
            href={`/`}
            className='tooltip tooltip-bottom rounded-full bg-white p-2 duration-300 hover:bg-blue-700 hover:text-white'
            data-tip='Facebook'
          >
            <FiFacebook className='text-2xl' />
          </Link>
          <Link
            href={`/`}
            className='tooltip tooltip-bottom rounded-full bg-white p-2 duration-300 hover:bg-black hover:text-white'
            data-tip='Mail'
          >
            <FiMail className='text-2xl' />
          </Link>
        </div>
      </div>
      <div className='w-full space-y-2 lg:w-1/2 lg:space-y-4'>
        <h1 className='text-[15px] font-bold uppercase text-black dark:text-base-100 lg:text-2xl'>
          MD. Shawal Islam
        </h1>
        <div className='text-[22px] font-extrabold text-secondary lg:text-4xl'>
          <Typewriter
            words={['Department of CES in RUET']}
            loop={0} // Infinite loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </div>
        <p className='text-sm text-black dark:text-base-100 md:text-[18px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          laudantium doloremque alias minima dolores id iusto quasi qui magnam
          aliquid?
        </p>
        <div className='flex gap-4 pt-3'>
          <Link
            href={`https://drive.google.com/uc?export=download&id=1fXoyWDzFV_VS81ISMkK-G0vCHc7_nw8j`}
            className='duration-300lex btn btn-outline items-center gap-2 hover:bg-black dark:border-white dark:text-white hover:dark:bg-base-100 hover:dark:text-black'
          >
            <span>Download Resume</span>
            <MdOutlineFileDownload />
          </Link>
          <Link
            href={`/about`}
            className='btn btn-outline flex items-center gap-2 duration-300 hover:bg-black dark:border-white dark:text-white hover:dark:bg-base-100 hover:dark:text-black'
          >
            <span>More</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
