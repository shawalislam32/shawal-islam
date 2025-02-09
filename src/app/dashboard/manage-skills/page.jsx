'use client';
import LoadingPage from '@/components/shared/LoadingPage';
import { getSkills } from '@/lib/getSkills';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const loadProjects = async () => {
  return await getSkills();
};

const AddSkill = () => {
  const { theme } = useTheme();

  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['projects'], queryFn: loadProjects });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return (
      <div className='pt-32 text-black dark:text-base-100'>
        Failed to load projects. Please try again later.
      </div>
    );
  }

  console.log(skills);
  return (
    <div className='flex min-h-screen w-full flex-col items-center pt-20'>
      <h2 className='mb-4 text-center text-2xl font-bold text-secondary lg:text-3xl'>
        My Skills
      </h2>
      {isError && (
        <div className='pt-32 text-black dark:text-base-100'>
          Failed to load projects. Please try again later.
        </div>
      )}
      <div className='grid w-full grid-cols-1 items-center justify-center gap-5 pt-3 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => (
          <div key={skill._id}>
            <div className='flex w-full items-center gap-5 rounded-xl border-[3px] border-transparent bg-base-200 text-black shadow-xl duration-300 hover:border-secondary dark:bg-gray-800/50 dark:text-base-100'>
              <figure className='w-1/2 p-5 md:p-7 lg:p-10'>
                <Image
                  src={`${skill.image}&theme=${theme === 'dark' ? 'dark' : 'light'}`}
                  alt={skill.name}
                  height={1080}
                  width={1080}
                  className='w-full'
                />
              </figure>
              <div className='w-1/2 space-y-2'>
                <h2 className='card-title'>{skill.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='card-actions'>
                  <button className='btn btn-primary'>Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSkill;
