
import ReactIcon from '../assets/react.svg'

const ProjectCard = () => {
    return (
        <div className='border border-gray-200 rounded-lg shadow flex flex-col p-4 max-w-sm'>
            <div className='flex'>
                <img src={ReactIcon} alt="React Icon" className='w-8 h-8 mr-2' />
            </div>
            <div>
                <p className='text-lg font-bold'>React</p>
                <p className='text-gray-600'>React is an open-source project. It is a frontend library. Learn more to code.</p>
            </div>
        </div>
    );
};

export default ProjectCard;