import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <div className='space-y-3 text-center'>
        <Image
          src={`/404.png`}
          alt=''
          height={1080}
          width={1080}
          className='mx-auto w-1/2 lg:w-1/3'
        />
        <Link href='/'>
          <button className='btn mt-5 scale-90 border-2 border-secondary bg-secondary text-white duration-300 hover:border-black hover:bg-white hover:text-black'>
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
