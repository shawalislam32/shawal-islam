'use client';
import { ActiveContext } from '@/providers/ActiveProvider';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import ThemeToggle from '../shared/ThemeToggle';
import { MdOutlineClose, MdOutlineManageHistory } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const DashNav = () => {
  const [opened, setOpened] = useState(false);
  const { active, setActive } = useContext(ActiveContext);
  const pathName = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className='backdrop-blur-[10px} fixed z-40 flex w-full justify-center border-b-secondary bg-base-300 dark:bg-gray-900/50 lg:border-b-2'>
      <div className='relative flex w-full items-center justify-between p-2 md:p-5'>
        {/* logo & menu button */}
        <div className='flex w-1/2 items-center gap-2 md:gap-5'>
          <div onClick={() => setOpened(true)} className='block lg:hidden'>
            <HiMenu className='text-[30px] font-bold hover:scale-110 dark:text-base-100' />
          </div>
          <Link
            onClick={() => setActive('home')}
            href={`/`}
            className='text-[20px] font-bold text-black dark:text-base-100 md:text-[26px] lg:text-3xl'
          >
            Shawal <span className='text-secondary'>Islam</span>
          </Link>
        </div>

        <span className='w-1/2 text-[20px] font-bold text-black dark:text-base-100 md:text-[26px] lg:text-3xl'>
          Welcome <span className='text-secondary'>Chief!</span>{' '}
        </span>

        {/* for mobile */}
        {opened && (
          <div className='absolute left-0 top-0 flex flex-col gap-3 bg-base-300 p-2 pt-7 dark:bg-gray-900'>
            <MdOutlineClose
              onClick={() => setOpened(false)}
              className='mb-2 ml-3 text-[30px] font-bold hover:scale-110 dark:text-base-100'
            />
            <Link
              onClick={() => setOpened(false)}
              href={`/dashboard`}
              className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
            >
              <MdOutlineManageHistory />
              <span>Dashboard</span>
            </Link>
            <Link
              onClick={() => setOpened(false)}
              href={`/dashboard/add-skill`}
              className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard/add-skill' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
            >
              <MdOutlineManageHistory />
              <span>Add Skill</span>
            </Link>
            <Link
              onClick={() => setOpened(false)}
              href={`/dashboard/manage-projects`}
              className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard/manage-projects' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
            >
              <MdOutlineManageHistory />
              <span>Manage Projects</span>
            </Link>
            <Link
              onClick={() => setOpened(false)}
              href={`/dashboard/manage-skills`}
              className={`flex items-center gap-2 rounded-lg p-1 font-semibold ${pathName === '/dashboard/manage-skills' ? 'bg-base-100 text-black' : 'dark:text-base-100'}`}
            >
              <MdOutlineManageHistory />
              <span>Manage Skills</span>
            </Link>
            <div
              onClick={() => setOpened(false)}
              className='flex cursor-pointer items-center gap-5 rounded-lg bg-transparent hover:bg-gray-200 dark:text-base-100 hover:dark:bg-gray-700'
            >
              <ThemeToggle />
              <span
                onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
                className='font-semibold'
              >
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashNav;
