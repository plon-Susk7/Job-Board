import { Star } from 'lucide-react';

const ProjectCard = ({prompt}) => {
    return (
        < a href={prompt.url} target="_blank" rel="noreferrer noopener" >
            <div className='overflow-hidden border border-gray-200 rounded-lg shadow flex flex-col p-4 h-48 max-w-sm'>
                <div className='flex justify-between'>
                    <img src={prompt.logo} alt="React Icon" className='w-8 h-8 mr-2' />
                    <div className='flex items-center justify-center border border-gray-200 rounded-lg p-1'>
                        <Star size={16} strokeWidth={1} />
                        <p className='text-sm ml-1'>{prompt.stars}</p>
                    </div>
                </div>
                <div>
                    <p className='text-lg font-bold'>{prompt.name}</p>
                    <p className='text-gray-400 text-sm '>{prompt.description}</p>
                    <p>{prompt.language}</p>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;