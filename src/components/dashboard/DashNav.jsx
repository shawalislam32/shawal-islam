'use client'
import { ActiveContext } from '@/providers/ActiveProvider';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const DashNav = () => {
    const [opened, setOpened] = useState(false);
    const { active, setActive } = useContext(ActiveContext);

    return (
        <div className="fixed z-40 flex w-full justify-center backdrop-blur-[10px} border-b-2 border-b-secondary bg-base-300 dark:bg-gray-900/50">
            <div className='relative p-2 md:p-5 flex items-center justify-between w-full'>
                {/* logo & menu button */}
                <div className='w-1/2  flex items-center gap-2 md:gap-5'>
                    <div onClick={() => setOpened(!opened)} className='block lg:hidden'>
                        <HiMenu className='font-bold text-[30px] dark:text-base-100  hover:scale-110' />
                    </div>
                    <Link onClick={() => setActive('home')} href={`/`} className='font-bold text-black dark:text-base-100 text-[20px] md:text-[26px] lg:text-3xl'>Shawal <span className='text-secondary'>Islam</span></Link>
                </div>

                <span onClick={() => setActive('home')} href={`/`} className='font-bold dark:text-base-100 text-[20px] md:text-[26px] lg:text-3xl text-secondary w-1/2'>Welcome To Dashboard </span>
            </div>
        </div>
    );
};

export default DashNav;