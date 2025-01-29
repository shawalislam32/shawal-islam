'use client'
import React, { useContext, useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { IoHomeOutline, IoReaderOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { LiaBlogSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { HiRectangleGroup } from "react-icons/hi2";
import { useTheme } from 'next-themes';
import { ActiveContext } from '@/providers/ActiveProvider';

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const { active, setActive } = useContext(ActiveContext);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  console.log(active)
  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) return null;

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <nav className="fixed z-40 flex w-full justify-center backdrop-blur-[2px]">
      <div className='relative p-2 md:p-5 flex items-center justify-between w-full'>

        {/* logo & menu button */}
        <div className='w-1/2 lg:w-1/3 flex items-center gap-2 md:gap-5'>
          <div onClick={() => setOpened(!opened)} className='block lg:hidden'>
            <HiMenu className='font-bold text-[30px] dark:text-base-100  hover:scale-110' />
          </div>
          <Link onClick={() => setActive('home')} href={`/`} className='font-bold text-black dark:text-base-100 text-[20px] md:text-[26px] lg:text-3xl'>Shawal <span className='text-secondary'>Islam</span></Link>
        </div>

        {/* links */}
        <div className="w-1/3 hidden lg:flex gap-5 items-center justify-center flex-row">
          <Link onClick={() => setActive('home')} href={`/`} className={`h-8 w-8 flex items-center justify-center hover:bg-base-300 bg-transparent rounded-lg tooltip  tooltip-bottom dark:text-black ${active === 'home' && 'bg-base-300'}`} data-tip="Home">
            <IoHomeOutline className={`font-bold text-[26px] dark:text-base-100 hover:dark:text-black ${active === 'home' && 'dark:text-black'}`} />
          </Link>
          <Link onClick={() => setActive('about')} href={`/#about`} className={`h-8 w-8 flex items-center justify-center hover:bg-base-300 bg-transparent rounded-lg tooltip  tooltip-bottom ${active === 'about' && 'bg-base-300'}`} data-tip="About">
            <IoReaderOutline className={`font-bold text-[26px] dark:text-base-100 hover:dark:text-black ${active === 'about' && 'dark:text-black'}`} />
          </Link>
          <Link onClick={() => setActive('projects')} href={`/#projects`} className={`h-8 w-8 flex items-center justify-center hover:bg-base-300 bg-transparent rounded-lg tooltip  tooltip-bottom ${active === 'projects' && 'bg-base-300'}`} data-tip="Projects">
            <GrProjects className={`font-bold text-[26px] dark:text-base-100 hover:dark:text-black ${active === 'projects' && 'dark:text-black'}`} />
          </Link>
          <Link onClick={() => setActive('skills')} href={`/#skills`} className={`h-8 w-8 flex items-center justify-center hover:bg-base-300 bg-transparent rounded-lg tooltip  tooltip-bottom ${active === 'skills' && 'bg-base-300'}`} data-tip="Skills">
            <GiSkills className={`font-bold text-[26px] dark:text-base-100 hover:dark:text-black ${active === 'skills' && 'dark:text-black'}`} />
          </Link>
          <Link onClick={() => setActive('blogs')} href={`/blogs`} className={`h-8 w-8 flex items-center justify-center hover:bg-base-300 bg-transparent rounded-lg tooltip  tooltip-bottom ${active === 'blogs' && 'bg-base-300'}`} data-tip="Blogs">
            <LiaBlogSolid className={`font-bold text-[26px] dark:text-base-100 hover:dark:text-black ${active === 'blogs' && 'dark:text-black'}`} />
          </Link>
          <Link onClick={() => setActive('dashboard')} href={`/dashboard`} className={`h-8 w-8 flex items-center justify-center hover:bg-base-300 bg-transparent rounded-lg tooltip  tooltip-bottom ${active === 'dashboard' && 'bg-base-300'}`} data-tip="Dashboard">
            <MdOutlineDashboard className={`font-bold text-[26px] dark:text-base-100 hover:dark:text-black ${active === 'dashboard' && 'dark:text-black'}`} />
          </Link>
          <div className='tooltip  tooltip-bottom' data-tip={`${theme === 'dark' ? 'Dark Theme' : 'Light Theme'}`}>
            <ThemeToggle />
          </div>
        </div>

        {/* hire me button */}
        <div className="w-1/2 lg:w-1/3 flex justify-end">
          <button className='flex items-center gap-2 border px-2 btn'>
            <HiRectangleGroup className='text-xl md:text-2xl text-secondary' />
            <span className='font-bold md:text-lg'>Contact me</span>
          </button>
        </div>


        {/* links mobile devces */}
        <div>
          {opened && <div className='bg-base-200 dark:bg-gray-900 rounded-r-lg p-5 absolute left-0 top-0 w-1/2 md:w-80 h-auto duration-300'>
            <MdOutlineClose onClick={() => setOpened(false)} className='font-bold text-[30px] dark:text-base-100 mb-5 hover:scale-110' />
            <div className="z-50 flex gap-5 items- justify- flex-col">
              <Link href={`/`} onClick={() => setOpened(!opened)} className='p-[5px] flex gap-5 hover:bg-gray-200 hover:dark:bg-gray-700 bg-transparent dark:text-base-100   rounded-lg'>
                <IoHomeOutline className='font-bold text-[25px] dark:text-base-100 ' />
                <span className='font-semibold'>Home</span>
              </Link>
              <Link href={`/#about`} onClick={() => setOpened(!opened)} className='p-[5px] flex gap-5 hover:bg-gray-200 hover:dark:bg-gray-700 bg-transparent dark:text-base-100   rounded-lg'>
                <IoReaderOutline className='font-bold text-[27px] dark:text-base-100 ' />
                <span className='font-semibold'>About</span>
              </Link>
              <Link href={`/#projects`} onClick={() => setOpened(!opened)} className='p-[5px] flex hover:bg-gray-200 hover:dark:bg-gray-700 bg-transparent dark:text-base-100   rounded-lg'>
                &nbsp;
                <GrProjects className='font-bold text-[20px] dark:text-base-100 ' />
                <span className='font-semibold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects</span>
              </Link>
              <Link href={`/#skills`} onClick={() => setOpened(!opened)} className='p-[5px] flex gap-5 hover:bg-gray-200 hover:dark:bg-gray-700 bg-transparent dark:text-base-100   rounded-lg'>
                <GiSkills className='font-bold text-[22px] dark:text-base-100 ' />
                <span className='font-semibold'>Skills</span>
              </Link>
              <Link href={`/blogs`} onClick={() => setOpened(!opened)} className='p-[5px] flex gap-5 hover:bg-gray-200 hover:dark:bg-gray-700 bg-transparent dark:text-base-100   rounded-lg'>
                <LiaBlogSolid className='font-bold text-[26px] dark:text-base-100 ' />
                <span className='font-semibold'>Blogs</span>
              </Link>
              <Link href={`/dashboard`} onClick={() => setOpened(!opened)} className='p-[5px] flex gap-5 hover:bg-gray-200 hover:dark:bg-gray-700 bg-transparent dark:text-base-100   rounded-lg'>
                <MdOutlineDashboard className='font-bold text-[24px] dark:text-base-100 ' />
                <span className='font-semibold'>Dashboard</span>
              </Link>
              <div href={`/`} onClick={() => setOpened(!opened)} className=' flex gap-5 hover:bg-gray-200 hover:dark:bg-gray-700 bg-transparent dark:text-base-100  items-center rounded-lg cursor-pointer'>
                <ThemeToggle />
                <span onClick={() => setTheme(isDarkMode ? 'light' : 'dark')} className='font-semibold'>{theme === 'dark' ? 'Dark' : 'Light'}</span>
              </div>
            </div>
          </div>}
        </div>

      </div>
    </nav>
  )
}
