
const ProjectCard = ({prompt}) => {
    return (
        <div className='border border-gray-200 rounded-lg shadow flex flex-col p-4 h-full max-w-sm'>
            <div className='flex'>
                <img src={prompt.logo} alt="React Icon" className='w-8 h-8 mr-2' />
            </div>
            <div>
                <p className='text-lg font-bold'>{prompt.name}</p>
                <p className='text-gray-600'>{prompt.description}</p>
                <p>{prompt.url}</p>
                <p>{prompt.language}</p>
                <p>{prompt.stars}</p>
            </div>
        </div>
    );
};

export default ProjectCard;