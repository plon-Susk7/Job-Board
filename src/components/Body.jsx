import ProjectCard from './ProjectCard';
import Data from './data';

const Body = () => {

    return (
        <>
            <div className="mx-auto min-h-screen w-full max-w-screen-md mt-4">
                <h1 className="text-lg font-bold mb-5">All Projects</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Data.length > 0 ? (
                        Data.map((data, index) => {
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
