'use client'
import { getProjects } from '@/lib/getProjects';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingPage from '../shared/LoadingPage';

const loadProjects = async () => {
    return await getProjects();
}

const Projects = () => {

    const { data: projects, isLoading, isError } = useQuery({
        queryKey: ['projects'],
        queryFn: loadProjects,
    })

    if (isLoading) {
        return <LoadingPage />;
    }

    if (isError) {
        return <div>Failed to load projects. Please try again later.</div>
    }
    console.log(projects);
    return (
        <div id='projects'>
            <h2 className="mb-4 text-secondary text-center text-2xl font-bold lg:text-3xl">
                My Projects
            </h2>
            <div className="text-black dark:text-base-100">
                {projects.map((project, index) => (
                    <div key={project._id}>
                        Project {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;