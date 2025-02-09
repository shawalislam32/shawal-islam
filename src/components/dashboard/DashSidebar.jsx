'use client';
import React from 'react';
import ThemeToggle from '../shared/ThemeToggle';
import Link from 'next/link';
import { MdOutlineManageHistory } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const DashSidebar = () => {
  const pathName = usePathname();
  return (
    <div className='hidden h-screen w-52 pt-[77px] lg:block'>
      {/* for desktop */}
      <div className='flex h-[calc(100vh-77px)] flex-col gap-3 border-r-2 border-r-secondary bg-base-300 p-2 dark:bg-gray-900/50'>
        <Link
          href={`/dashboard`}
          className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
        >
          <MdOutlineManageHistory />
          <span>Dashboard</span>
        </Link>
        <Link
          href={`/dashboard/add-skill`}
          className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard/add-skill' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
        >
          <MdOutlineManageHistory />
          <span>Add Skill</span>
        </Link>
        <Link
          href={`/dashboard/manage-projects`}
          className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard/manage-projects' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
        >
          <MdOutlineManageHistory />
          <span>Manage Projects</span>
        </Link>
        <Link
          href={`/dashboard/manage-skills`}
          className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard/manage-skills' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
        >
          <MdOutlineManageHistory />
          <span>Manage Skills</span>
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
