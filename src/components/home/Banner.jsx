'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiFacebook, FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";


const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between rounded-xl bg-base-200 dark:bg-gray-800/30 p-5 md:p-10 lg:px-5 lg:py-[85px] gap-5 backdrop-blur-[2px] '>
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                <div className="p-2 border-secondary border-[2px] hover:bg-blue-500/20 duration-300 rounded-2xl lg:rounded-full">
                    <Image src={`/shawal.png`} alt='Shawal Islam Photo' height={1080} width={1080} className='rounded-2xl lg:rounded-full w-[200px] md:w-[250px] lg:w-[300px] mx-auto' />
                </div>
                {/* links */}
                <div className="flex gap-3 items-center justify-center mt-10">
                    <Link href={`/`} className='p-2 rounded-full bg-white hover:bg-black hover:text-white duration-300'>
                        <FiGithub className='text-2xl' />
                    </Link>
                    <Link href={`/`} className='p-2 rounded-full bg-white hover:bg-blue-600 hover:text-white duration-300'>
                        <FiLinkedin className='text-2xl' />
                    </Link>
                    <Link href={`/`} className='p-2 rounded-full bg-white hover:bg-blue-500 hover:text-white duration-300'>
                        <FiTwitter className='text-2xl' />
                    </Link>
                    <Link href={`/`} className='p-2 rounded-full bg-white hover:bg-blue-700 hover:text-white duration-300'>
                        <FiFacebook className='text-2xl' />
                    </Link>
                    <Link href={`/`} className='p-2 rounded-full bg-white hover:bg-black hover:text-white duration-300'>
                        <FiMail className='text-2xl' />
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-2 lg:space-y-4">
                <h1 className='font-bold uppercase text-black dark:text-base-100 text-[15px] lg:text-2xl'>MD. Shawal Islam</h1>
                <div className='text-[22px] lg:text-4xl font-extrabold text-secondary'>
                    Department of CES in RUET
                </div>
                <p className='text-black dark:text-base-100 text-sm md:text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium doloremque alias minima dolores id iusto quasi qui magnam aliquid?</p>
                <div className="pt-3 flex gap-4">
                    <Link href={`https://drive.google.com/uc?export=download&id=1fXoyWDzFV_VS81ISMkK-G0vCHc7_nw8j`} className="btn btn-outline dark:border-white dark:text-white hover:dark:bg-base-100 hover:dark:text-black hover:bg-black duration-300lex gap-2 items-center">
                        <span>Download Resume</span>
                        <MdOutlineFileDownload />
                    </Link>
                    <Link href={`/about`} className="btn btn-outline dark:border-white dark:text-white hover:dark:bg-base-100 hover:dark:text-black hover:bg-black duration-300 flex gap-2 items-center">
                        <span>More</span>
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;