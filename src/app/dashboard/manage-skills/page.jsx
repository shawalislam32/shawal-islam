'use client'
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
        return <div className='text-black dark:text-base-100 pt-32'>Failed to load projects. Please try again later.</div>;
    }

    console.log(skills)
    return (
        <div className='pt-20 min-h-screen flex flex-col items-center w-full'>
            <h2 className="mb-4 text-secondary text-center text-2xl font-bold lg:text-3xl">
                My Skills
            </h2>
            {isError && <div className='text-black dark:text-base-100 pt-32'>Failed to load projects. Please try again later.</div>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center pt-3 w-full'>
                {skills.map(skill => <div key={skill.id}>

                    <div className="bg-base-200 dark:bg-gray-800/30 w-full shadow-xl border-[3px] border-transparent hover:border-secondary rounded-xl duration-300 text-black dark:text-base-100 flex gap-5 items-center">
                        <figure className="p-5 md:p-7 lg:p-10 w-1/2">
                            <Image src={`${skill.image}&theme=${theme === 'dark' ? 'dark' : 'light'}`} alt={skill.name} height={1080} width={1080} className='w-full' />
                        </figure>
                        <div className="w-1/2 space-y-2">
                            <h2 className="card-title">{skill.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AddSkill;