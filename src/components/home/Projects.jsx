'use client';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import WebDevelopment from './WebDevelopment';
import AppDevelopment from './AppDevelopment';
import ProblemSolving from './ProblemSolving';

const Projects = () => {
  return (
    <div id='projects'>
      <h2 className='mb-4 text-center text-2xl font-bold text-secondary lg:text-3xl'>
        My Projects
      </h2>
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
          <TabPanel>
            <WebDevelopment />
          </TabPanel>
          <TabPanel>
            <AppDevelopment />
          </TabPanel>
          <TabPanel>
            <ProblemSolving />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Projects;
