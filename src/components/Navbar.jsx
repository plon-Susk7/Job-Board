import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <> 
            <nav className="flex h-16 items-center justify-between sticky w-full top-0 z-30 backdrop-blur-md shadow-md">
                <div className="ml-20 text-2xl font-bold text-gray-800 font-poppins flex items-center"> {/* Add right margin here */}
                    <img src={logo} alt="Logo" className="logo" />
                    <p>JobBoard</p>
                </div>
                <div className="flex items-center space-x-7 mr-20">
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
