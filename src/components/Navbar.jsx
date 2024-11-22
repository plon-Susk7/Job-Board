import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
	return (
		<>
			<nav className="flex h-16 items-center justify-between sticky w-full top-0 z-30 backdrop-blur-md shadow-md">
				<div className="ml-20 text-2xl font-bold text-gray-800 font-poppins">
					{" "}
					<p>JobBoard</p>
				</div>
				<div className="flex items-center space-x-7 mr-20">
					<a
						href="https://github.com/plon-Susk7/Job-Board"
						target="_blank"
						className="border border-black p-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200 hover:border-gray-400 hover:outline hover:outline-2">
						<FontAwesomeIcon icon={faGithub} size="1x" />
						Github
					</a>
					<a
						href="https://github.com/plon-Susk7/Job-Board/issues"
						target="_blank"
						className="bg-gray-800 text-white p-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200 hover:outline hover:outline-2 hover:outline-gray-400">
						<FontAwesomeIcon icon={faPaperPlane} size="1x" />
						Submit
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
