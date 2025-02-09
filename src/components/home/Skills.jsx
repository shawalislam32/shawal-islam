'use client';
import { getSkills } from '@/lib/getSkills';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import LoadingPage from '../shared/LoadingPage';

const loadSkills = async () => {
  return await getSkills();
};

const Skills = () => {
  const { theme } = useTheme();

  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['skills'], queryFn: loadSkills });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <div>Failed to load projects. Please try again later.</div>;
  }

  console.log(skills);

  return (
    <div id='skills'>
      <h2 className='mb-4 text-center text-2xl font-bold text-secondary lg:text-3xl'>
        My Skills
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-5 pt-3'>
        {skills.map((skill) => (
          <div className='tooltip' data-tip={skill.name} key={skill.id}>
            <Image
              src={`${skill.image}&theme=${theme === 'dark' ? 'dark' : 'light'}`}
              alt={skill.name}
              height={1080}
              width={1080}
              className='w-14 rounded-3xl border-[3px] border-transparent duration-300 hover:border-secondary md:w-16 lg:w-20'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
