'use client';
import { getProjects } from '@/lib/getProjects';
import React from 'react';
import LoadingPage from '../shared/LoadingPage';
import { useQuery } from '@tanstack/react-query';

const loadProjects = async () => {
  return await getProjects();
};

const ProblemSolving = () => {
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

  const filteredProjects = projects.filter(
    (projct) => projct.category === 'problem-solving',
  );

  return (
    <div>
      <div className='text-black dark:text-base-100'>
        {filteredProjects.map((project, index) => (
          <div key={project._id}>PS Project {index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSolving;
