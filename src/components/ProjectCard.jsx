
const ProjectCard = ({name,icon,description}) => {


    return (
        <div className='border border-gray-200 rounded-lg shadow flex flex-col p-4 max-w-sm'>
            <div className='flex'>
                <img src={icon} alt="React Icon" className='w-8 h-8 mr-2' />
            </div>
            <div>
                <p className='text-lg font-bold'>{name}</p>
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;