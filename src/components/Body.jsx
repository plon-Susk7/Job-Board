import Footer from './Footer';
import ProjectCard from './ProjectCard';
import Data from './data';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { submissionState } from '../atoms/submission';
import Submission from './Submission';

const Body = () => {
    const [data, setData] = useState(Data);

    const subState = useRecoilValue(submissionState);

    const filterAll = () => {
        setData(Data);
    }

    const filterGsoc = () => {
        const filteredData = Data.filter((data) => data.type === 'GSOC');
        setData(filteredData)
    }

    const filterYc = () => {
        const filteredData = Data.filter((data) => data.type === 'YC');
        setData(filteredData)
    }

    return (
        <>
            <div className="mx-auto min-h-screen w-full max-w-screen-md mt-4">
                <div className='flex gap-5'>
                    <button onClick={filterAll} className={`text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 
                            ${activeButton === 'All' ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >All</button>
                    <button onClick={filterGsoc} className={`text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 
                            ${activeButton === 'GSOC' ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >GSOC</button>
                    <button onClick={filterYc} 
                    className={`text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 
                            ${activeButton === 'YC' ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >YC</button>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data.length > 0 ? (
                        data.map((data, index) => {
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

            {subState && <Submission />}

            <Footer />
        </>
    );
};

export default Body;
