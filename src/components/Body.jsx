import Footer from './Footer';
import ProjectCard from './ProjectCard';
import Data from './data';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { submissionState } from '../atoms/submission';
import Submission from './Submission';
import SearchBar from './SearchBar'; 

const Body = () => {
    const [filteredData, setFilteredData] = useState(Data); // For filtered data
    const [activeFilter, setActiveFilter] = useState('All'); // Track the active filter
    const [searchTerm, setSearchTerm] = useState(''); // Track the search term

    const subState = useRecoilValue(submissionState);

    const filterAll = () => {
        setActiveFilter('All'); // Update the active filter
        setSearchTerm(''); // Reset search term when filtering
        setFilteredData(Data);
    };

    const filterGsoc = () => {
        setActiveFilter('GSOC'); // Update the active filter
        setSearchTerm(''); // Reset search term when filtering
        const filtered = Data.filter((data) => data.type === 'GSOC');
        setFilteredData(filtered);
    };

    const filterYc = () => {
        setActiveFilter('YC'); // Update the active filter
        setSearchTerm(''); // Reset search term when filtering
        const filtered = Data.filter((data) => data.type === 'YC');
        setFilteredData(filtered);
    };

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const searchedData = (activeFilter === 'All' ? Data : Data.filter((item) => item.type === activeFilter)).filter(
            (item) =>
                item.name.toLowerCase().includes(value) || 
                item.description.toLowerCase().includes(value) 
        );

        setFilteredData(searchedData);
    };

    return (
        <>
            <div className="mx-auto min-h-screen w-full max-w-screen-md mt-4">
                {/* Search Bar */}
                <div className="flex justify-center mb-5">
                    <input
                        type="text"
                        placeholder="Search repositories..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-5 mb-4">
                    <button
                        onClick={filterAll}
                        className={`text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 ${
                            activeFilter === 'All' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        All
                    </button>
                    <button
                        onClick={filterGsoc}
                        className={`text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 ${
                            activeFilter === 'GSOC' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        GSOC
                    </button>
                    <button
                        onClick={filterYc}
                        className={`text-lg font-bold mb-5 border border-gray-200 px-2 rounded transition-all duration-300 ${
                            activeFilter === 'YC' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        YC
                    </button>
                    {/* Integrated Search Bar from SearchBar.jsx
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
                </div>

                {/* Repository List */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredData.length > 0 ? (
                        filteredData.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg"
                                >
                                    <ProjectCard prompt={data} searchTerm={searchTerm} />
                                </div>
                            );
                        })
                    ) : (
                        <p>No repositories found.</p>
                    )}
                </div>
            </div>

            {subState && <Submission />}

            <Footer />
        </>
    );
};

export default Body;
