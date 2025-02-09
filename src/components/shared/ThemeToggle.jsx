'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoSunnySharp } from 'react-icons/io5';
import { LuMoonStar } from 'react-icons/lu';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme(); // resolvedTheme gives the actual applied theme

  useEffect(() => {
    setMounted(true); // Prevent hydration issues
  }, []);

  // Ensure it only renders on the client
  if (!mounted) return null;

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className='inline-block cursor-pointer rounded-lg bg-transparent p-1 hover:bg-base-300'>
      <div onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
        {theme === 'light' ? (
          <IoSunnySharp
            className='dark:text-base-100 hover:dark:text-black'
            size={25}
          />
        ) : (
          <LuMoonStar
            className='dark:text-base-100 hover:dark:text-black'
            size={25}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
