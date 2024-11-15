import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import data from './data';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ 
  auth: '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',
});


const Body = () => {
    const [repoData, setRepoData] = useState([]); // Initialize with an empty array

    const GetRepo = async (element) => {
        
        try {
            const response = await fetch(element.url);
            const repoData = await response.json();
            console.log(repoData);
            return {
                name: repoData.name,
                description: repoData.description,
                url: repoData.html_url,
                stars : repoData.stargazers_count,
                logo: repoData.organization?.avatar_url || ""
            };
        } catch (error) {
            console.error("Error fetching repo data:", error);
            return null;
        }
    };

    

    useEffect(() => { 
        const fetchData = async () => {
            const dataPromises = data.map(async (element) => {
                return await GetRepo(element);
            });
            const fetchedData = await Promise.all(dataPromises);
            setRepoData(fetchedData);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="mx-auto min-h-screen w-full max-w-screen-md mt-4">
                <h1 className="text-lg font-bold mb-5">All Projects</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {repoData.length > 0 ? (
                        repoData.map((data, index) => {
                            return (
                                <div key={index} className="transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
                                    <ProjectCard prompt={data} />
                                </div>
                            );
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Body;
