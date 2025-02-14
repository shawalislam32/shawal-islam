'use client';
import React, { useContext, useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { IoHomeOutline, IoReaderOutline } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';
import { LiaBlogSolid } from 'react-icons/lia';
import { MdOutlineDashboard } from 'react-icons/md';
import { HiMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { HiRectangleGroup } from 'react-icons/hi2';
import { useTheme } from 'next-themes';
import { ActiveContext } from '@/providers/ActiveProvider';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathName = usePathname();
  const isDashboard = pathName.startsWith('/dashboard');
  const [opened, setOpened] = useState(false);
  const { active, setActive } = useContext(ActiveContext);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!isDashboard && (
        <div className='fixed z-40 flex w-full justify-center backdrop-blur-[10px]'>
          <div className='relative flex w-full items-center justify-between p-2 md:p-5'>
            {/* logo & menu button */}
            <div className='flex w-1/2 items-center gap-2 md:gap-5 lg:w-1/3'>
              <div
                onClick={() => setOpened(!opened)}
                className='block lg:hidden'
              >
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

            {/* links */}
            <div className='hidden w-1/3 flex-row items-center justify-center gap-5 lg:flex'>
              <Link
                onClick={() => setActive('home')}
                href={`/`}
                className={`tooltip tooltip-bottom flex h-8 w-8 items-center justify-center rounded-lg ${active === 'home' && 'bg-gray-300'}`}
                data-tip='Home'
              >
                <IoHomeOutline
                  className={`text-[26px] font-bold text-black dark:text-base-100 ${active === 'home' && 'dark:text-black'}`}
                />
              </Link>
              <Link
                onClick={() => setActive('about')}
                href={`/#about`}
                className={`tooltip tooltip-bottom flex h-8 w-8 items-center justify-center rounded-lg ${active === 'about' && 'bg-gray-300'}`}
                data-tip='About'
              >
                <IoReaderOutline
                  className={`text-[26px] font-bold text-black dark:text-base-100 ${active === 'about' && 'dark:text-black'}`}
                />
              </Link>
              <Link
                onClick={() => setActive('projects')}
                href={`/#projects`}
                className={`tooltip tooltip-bottom flex h-8 w-8 items-center justify-center rounded-lg ${active === 'projects' && 'bg-gray-300'}`}
                data-tip='Projects'
              >
                <GrProjects
                  className={`text-[24px] font-bold text-black dark:text-base-100 ${active === 'projects' && 'dark:text-black'}`}
                />
              </Link>
              <Link
                onClick={() => setActive('skills')}
                href={`/#skills`}
                className={`tooltip tooltip-bottom flex h-8 w-8 items-center justify-center rounded-lg ${active === 'skills' && 'bg-gray-300'}`}
                data-tip='Skills'
              >
                <GiSkills
                  className={`text-[26px] font-bold text-black dark:text-base-100 ${active === 'skills' && 'dark:text-black'}`}
                />
              </Link>
              <Link
                onClick={() => setActive('blogs')}
                href={`/blogs`}
                className={`tooltip tooltip-bottom flex h-8 w-8 items-center justify-center rounded-lg ${active === 'blogs' && 'bg-gray-300'}`}
                data-tip='Blogs'
              >
                <LiaBlogSolid
                  className={`text-[29px] font-bold text-black dark:text-base-100 ${active === 'blogs' && 'dark:text-black'}`}
                />
              </Link>
              <Link
                onClick={() => setActive('dashboard')}
                href={`/dashboard`}
                className={`tooltip tooltip-bottom flex h-8 w-8 items-center justify-center rounded-lg ${active === 'dashboard' && 'bg-gray-300'}`}
                data-tip='Dashboard'
              >
                <MdOutlineDashboard
                  className={`text-[26px] font-bold text-black dark:text-base-100 ${active === 'dashboard' && 'dark:text-black'}`}
                />
              </Link>
              <div className='mt-[5px]'>
                <ThemeToggle />
              </div>
            </div>

            {/* hire me button */}
            <div className='flex w-1/2 justify-end lg:w-1/3'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className='btn flex items-center gap-2 border px-2'
              >
                <HiRectangleGroup className='text-xl text-secondary md:text-2xl' />
                <span className='font-bold md:text-lg'>Contact me</span>
              </motion.button>
            </div>

            {/* links mobile devces */}
            <div>
              {opened && (
                <div className='absolute left-0 top-0 h-auto w-1/2 rounded-r-lg bg-base-200 p-5 duration-300 dark:bg-gray-900 md:w-80'>
                  <MdOutlineClose
                    onClick={() => setOpened(false)}
                    className='mb-5 text-[30px] font-bold hover:scale-110 dark:text-base-100'
                  />
                  <div className='items- justify- z-50 flex flex-col gap-5'>
                    <Link
                      href={`/`}
                      onClick={() => {
                        setOpened(!opened), setActive('home');
                      }}
                      className='flex gap-5 rounded-lg bg-transparent p-[5px] hover:bg-gray-200 dark:text-base-100 hover:dark:bg-gray-700'
                    >
                      <IoHomeOutline className='text-[25px] font-bold dark:text-base-100' />
                      <span className='font-semibold'>Home</span>
                    </Link>
                    <Link
                      href={`/#about`}
                      onClick={() => {
                        setOpened(!opened), setActive('about');
                      }}
                      className='flex gap-5 rounded-lg bg-transparent p-[5px] hover:bg-gray-200 dark:text-base-100 hover:dark:bg-gray-700'
                    >
                      <IoReaderOutline className='text-[27px] font-bold dark:text-base-100' />
                      <span className='font-semibold'>About</span>
                    </Link>
                    <Link
                      href={`/#projects`}
                      onClick={() => {
                        setOpened(!opened), setActive('projects');
                      }}
                      className='flex rounded-lg bg-transparent p-[5px] hover:bg-gray-200 dark:text-base-100 hover:dark:bg-gray-700'
                    >
                      &nbsp;
                      <GrProjects className='text-[20px] font-bold dark:text-base-100' />
                      <span className='font-semibold'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects
                      </span>
                    </Link>
                    <Link
                      href={`/#skills`}
                      onClick={() => {
                        setOpened(!opened), setActive('skills');
                      }}
                      className='flex gap-5 rounded-lg bg-transparent p-[5px] hover:bg-gray-200 dark:text-base-100 hover:dark:bg-gray-700'
                    >
                      <GiSkills className='text-[22px] font-bold dark:text-base-100' />
                      <span className='font-semibold'>Skills</span>
                    </Link>
                    <Link
                      href={`/blogs`}
                      onClick={() => {
                        setOpened(!opened), setActive('blogs');
                      }}
                      className='flex gap-5 rounded-lg bg-transparent p-[5px] hover:bg-gray-200 dark:text-base-100 hover:dark:bg-gray-700'
                    >
                      <LiaBlogSolid className='text-[26px] font-bold dark:text-base-100' />
                      <span className='font-semibold'>Blogs</span>
                    </Link>
                    <Link
                      href={`/dashboard`}
                      onClick={() => {
                        setOpened(!opened), setActive('dashboard');
                      }}
                      className='flex gap-5 rounded-lg bg-transparent p-[5px] hover:bg-gray-200 dark:text-base-100 hover:dark:bg-gray-700'
                    >
                      <MdOutlineDashboard className='text-[24px] font-bold dark:text-base-100' />
                      <span className='font-semibold'>Dashboard</span>
                    </Link>
                    <div
                      href={`/`}
                      onClick={() => setOpened(!opened)}
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
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
