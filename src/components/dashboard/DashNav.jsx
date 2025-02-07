'use client'
import { ActiveContext } from '@/providers/ActiveProvider';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import ThemeToggle from '../shared/ThemeToggle';
import { MdOutlineClose, MdOutlineManageHistory } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const DashNav = () => {
    const [opened, setOpened] = useState(false);
    const { active, setActive } = useContext(ActiveContext);
    const pathName = usePathname()

    return (
        <div className="fixed z-40 flex w-full justify-center backdrop-blur-[10px} lg:border-b-2 border-b-secondary bg-base-300 dark:bg-gray-900/50">
            <div className='relative p-2 md:p-5 flex items-center justify-between w-full'>
                {/* logo & menu button */}
                <div className='w-1/2  flex items-center gap-2 md:gap-5'>
                    <div onClick={() => setOpened(true)} className='block lg:hidden'>
                        <HiMenu className='font-bold text-[30px] dark:text-base-100  hover:scale-110' />
                    </div>
                    <Link onClick={() => setActive('home')} href={`/`} className='font-bold text-black dark:text-base-100 text-[20px] md:text-[26px] lg:text-3xl'>Shawal <span className='text-secondary'>Islam</span></Link>
                </div>

                <span className='font-bold dark:text-base-100 text-[20px] md:text-[26px] lg:text-3xl text-black w-1/2'>Welcome <span className="text-secondary">Chief!</span> </span>

                {/* for mobile */}
                {opened && <div className='absolute left-0 top-0 pt-6 bg-base-300 dark:bg-gray-900  flex flex-col gap-3 p-2'>
                    <MdOutlineClose onClick={() => setOpened(false)} className='font-bold text-[30px] dark:text-base-100 mb-2 ml-3 hover:scale-110' />
                    <Link onClick={() => setOpened(false)} href={`/dashboard`} className={`flex items-center gap-2 p-1 rounded-lg border ${pathName === '/dashboard' && 'bg-base-100'}`}>
                        <MdOutlineManageHistory />
                        <span className="text-black dark:text-base-100 font-semibold">Dashboard</span>
                    </Link>
                    <Link onClick={() => setOpened(false)} href={`/dashboard/add-skill`} className={`flex items-center gap-2 p-1 rounded-lg ${pathName === '/dashboard/add-skill' && 'bg-base-100'}`}>
                        <MdOutlineManageHistory />
                        <span className="text-black dark:text-base-100 font-semibold">Add Skill</span>
                    </Link>
                    <Link onClick={() => setOpened(false)} href={`/dashboard/manage-projects`} className={`flex items-center gap-2 p-1 rounded-lg ${pathName === '/dashboard/manage-projects' && 'bg-base-100'}`}>
                        <MdOutlineManageHistory />
                        <span className="text-black dark:text-base-100 font-semibold">Manage Projects</span>
                    </Link>
                    <Link onClick={() => setOpened(false)} href={`/dashboard/manage-skills`} className={`flex items-center gap-2 p-1 rounded-lg ${pathName === '/dashboard/manage-projects' && 'bg-base-100'}`}>
                        <MdOutlineManageHistory />
                        <span className="text-black dark:text-base-100 font-semibold">Manage Skills</span>
                    </Link>
                    <div onClick={() => setOpened(false)}>
                        <ThemeToggle />
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default DashNav;