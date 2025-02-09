'use client';
import { getProjects } from '@/lib/getProjects';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingPage from '../shared/LoadingPage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const loadProjects = async () => {
  return await getProjects();
};

const Projects = () => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: loadProjects,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <div>Failed to load projects. Please try again later.</div>;
  }
  console.log(projects);
  return (
    <div id='projects'>
      <h2 className='mb-4 text-center text-2xl font-bold text-secondary lg:text-3xl'>
        My Projects
      </h2>
      <div className='text-black dark:text-base-100'>
        {projects.map((project, index) => (
          <div key={project._id}>Project {index + 1}</div>
        ))}
      </div>
      <Tabs>
        <TabList className='flex justify-start gap-4 border-b-2 border-secondary'>
          <Tab className='react-tabs__tab btn cursor-pointer rounded-none bg-base-200 font-semibold transition-all duration-300 hover:bg-base-300 dark:bg-gray-800/50 dark:text-base-100 hover:dark:bg-gray-800'>
            <span className='hidden md:block'>Web Development</span>
            <span className='block md:hidden'>🌐</span>
          </Tab>
          <Tab className='react-tabs__tab btn cursor-pointer rounded-none bg-base-200 font-semibold transition-all duration-300 hover:bg-base-300 dark:bg-gray-800/50 dark:text-base-100 hover:dark:bg-gray-800'>
            <span className='hidden md:block'>App Development</span>
            <span className='block md:hidden'>📱</span>
          </Tab>
          <Tab className='react-tabs__tab btn cursor-pointer rounded-none bg-base-200 font-semibold transition-all duration-300 hover:bg-base-300 dark:bg-gray-800/50 dark:text-base-100 hover:dark:bg-gray-800'>
            <span className='hidden md:block'>Problem Solving</span>
            <span className='block md:hidden'>💻</span>
          </Tab>
        </TabList>

        <div className='mt-5'>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Projects;
