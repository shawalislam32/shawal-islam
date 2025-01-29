'use client'
import React from 'react';
import ThemeToggle from '../shared/ThemeToggle';
import Link from 'next/link';
import { MdOutlineManageHistory } from "react-icons/md";
import { usePathname } from 'next/navigation';

const DashSidebar = () => {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div className="pt-[77px] h-screen w-52">
            <div className='h-[calc(100vh-77px)] bg-base-300 dark:bg-gray-900/50  flex flex-col gap-3 p-2 border-r-2 border-r-secondary'>
                <Link href={`/dashboard`} className={`flex items-center gap-2 p-1 rounded-lg border ${pathName === '/dashboard' && 'bg-base-100'}`}>
                    <MdOutlineManageHistory />
                    <span className="text-black dark:text-base-100 font-semibold">Dashboard</span>
                </Link>
                <Link href={`/dashboard/add-skill`} className={`flex items-center gap-2 p-1 rounded-lg ${pathName === '/dashboard/add-skill' && 'bg-base-100'}`}>
                    <MdOutlineManageHistory />
                    <span className="text-black dark:text-base-100 font-semibold">Add Skill</span>
                </Link>
                <Link href={`/dashboard/manage-projects`} className={`flex items-center gap-2 p-1 rounded-lg ${pathName === '/dashboard/manage-projects' && 'bg-base-100'}`}>
                    <MdOutlineManageHistory />
                    <span className="text-black dark:text-base-100 font-semibold">Manage Projects</span>
                </Link>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default DashSidebar;