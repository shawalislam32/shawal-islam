import Image from 'next/image';
import React from 'react';

const WhatIDo = () => {
  return (
    <div className=''>
      <h2 className='mb-4 text-center text-2xl font-bold text-secondary lg:text-3xl'>
        What I Do
      </h2>
      <p className='mx-auto w-full text-center text-gray-600 dark:text-gray-300 md:w-2/3 lg:w-3/6'>
        I specialize in Full-Stack Web Development, crafting intuitive UI/UX
        designs, and building robust APIs, delivering seamless, scalable, and
        user-focused digital solutions.
      </p>

      <div className='flex flex-col items-center justify-center gap-6 pt-14 md:flex-row lg:gap-24'>
        <div className=''>
          <div className='flex h-60 w-60 flex-col items-center justify-center gap-1 rounded-xl border-2 border-transparent bg-base-200 shadow backdrop-blur-[2px] transition-all duration-300 hover:scale-[1.05] hover:border-blue-400 hover:shadow-lg dark:bg-gray-800/50'>
            <Image
              src={`/web-dev.png`}
              alt=''
              height={1080}
              width={1080}
              className='mx-auto mb-5 h-14 w-14 scale-150'
            />
            <h1 className='font-semibold text-black dark:text-base-100'>
              Web Development
            </h1>
            <p className='text-sm text-black dark:text-base-100'>33 Projects</p>
            <h1 className='text-2xl font-bold text-secondary'>3+</h1>
            <p className='text-sm text-gray-500 dark:text-base-300'>
              Years of Experience
            </p>
          </div>
        </div>
        <div className=''>
          <div className='flex h-60 w-60 flex-col items-center justify-center gap-1 rounded-xl border-2 border-transparent bg-base-200 shadow backdrop-blur-[2px] transition-all duration-300 hover:scale-[1.05] hover:border-blue-400 hover:shadow-lg dark:bg-gray-800/50'>
            <Image
              src={`/ui-ux.png`}
              alt=''
              height={1080}
              width={1080}
              className='mx-auto mb-5 h-12 w-12 scale-150'
            />
            <h1 className='font-semibold text-gray-500 dark:text-base-300'>
              UI/UX Design
            </h1>
            <p className='text-sm text-gray-500 dark:text-base-300'>
              51 Projects
            </p>
            <h1 className='text-2xl font-bold text-secondary'>3+</h1>
            <p className='text-sm text-gray-500 dark:text-base-300'>
              Years of Experience
            </p>
          </div>
        </div>
        <div className=''>
          <div className='flex h-60 w-60 flex-col items-center justify-center gap-1 rounded-xl border-2 border-transparent bg-base-200 shadow backdrop-blur-[2px] transition-all duration-300 hover:scale-[1.05] hover:border-blue-400 hover:shadow-lg dark:bg-gray-800/50'>
            <Image
              src={`/api-dev.png`}
              alt=''
              height={1080}
              width={1080}
              className='mx-auto mb-2 h-[70px] w-[70px] scale-150'
            />
            <h1 className='font-semibold text-gray-500 dark:text-base-300'>
              API Development
            </h1>
            <p className='text-sm text-gray-500 dark:text-base-300'>
              11 Projects
            </p>
            <h1 className='text-2xl font-bold text-secondary'>3+</h1>
            <p className='text-sm text-gray-500 dark:text-base-300'>
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
