'use client'
import { getSkills } from '@/lib/getSkills';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import LoadingPage from '../shared/LoadingPage';

const loadProjects = async () => {
    return await getSkills();
};

const Skills = () => {
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
        return <div>Failed to load projects. Please try again later.</div>;
    }

    console.log(skills)

    return (
        <div id='skills'>
            <h2 className="mb-4 text-secondary text-center text-2xl font-bold lg:text-3xl">
        My Skills
      </h2>
            <div className='flex flex-wrap gap-5 items-center justify-center pt-3'>
                {skills.map(skill => <div key={skill.id}>
                    <Image src={`${skill.image}&theme=${theme === 'dark' ? 'dark' : 'light'}`} alt={skill.name} height={1080} width={1080} className='w-14 md:w-16 lg:w-20 border-[3px] border-transparent hover:border-secondary rounded-3xl duration-300' />
                </div>)}
            </div>
        </div>
    );
};

export default Skills;