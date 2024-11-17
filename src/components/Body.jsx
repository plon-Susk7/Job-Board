import ProjectCard from './ProjectCard';
import Data from './data';
import { useState } from 'react';

const Body = () => {
    const [data, setData] = useState(Data);

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
                    <button onClick={filterAll} className="text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 hover:bg-gray-200">All</button>
                    <button onClick={filterGsoc} className="text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 hover:bg-gray-200">GSOC</button>
                    <button onClick={filterYc} className="text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 hover:bg-gray-200">YC</button>
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
        </>
    );
};

export default Body;
