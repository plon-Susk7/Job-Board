import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    return (
        <> 
            <nav className="mx-20 flex h-16 items-center justify-between">
                <div className="text-2xl font-bold text-gray-800 font-poppins"> {/* Add right margin here */}
                    <p>OpenSource</p>
                </div>
                <div className="flex items-center space-x-7">
                    <a 
                        href="https://github.com/plon-Susk7/Job-Board" target="_blank" 
                        className="border border-gray-200 p-2 w-20 h-10 flex items-center justify-center transition duration-200 hover:border-gray-400 hover:outline hover:outline-2 hover:outline-gray-400"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href="https://github.com/plon-Susk7/Job-Board/issues" target="_blank"
                        className="bg-gray-800 text-white w-20 h-10 rounded flex items-center justify-center transition duration-200 hover:outline hover:outline-2 hover:outline-gray-400"
                    >
                        Submit
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
