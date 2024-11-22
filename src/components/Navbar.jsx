import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Navbar = () => {
	const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<>
			<nav className="flex h-16 items-center justify-between sticky w-full top-0 z-30 backdrop-blur-md shadow-md dark:text-white">
				<div className="ml-20 text-2xl font-bold text-gray-800 dark:text-white font-poppins">
					{" "}
					<p>JobBoard</p>
				</div>
				<div className="flex items-center space-x-7 mr-20">
					<button
						onClick={toggleDarkMode}
					>
						{isDarkMode ? <FontAwesomeIcon icon={faMoon} size="1x" /> : <FontAwesomeIcon icon={faSun} size="1x" />}
					</button>
					<a
						href="https://github.com/plon-Susk7/Job-Board"
						target="_blank"
						className="border border-black dark:border-white p-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200 hover:border-gray-400 hover:outline hover:outline-2">
						<FontAwesomeIcon icon={faGithub} size="1x" />
						Github
					</a>
					<a
						href="https://github.com/plon-Susk7/Job-Board/issues"
						target="_blank"
						className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200 hover:outline hover:outline-2 hover:outline-gray-400">
						<FontAwesomeIcon icon={faPaperPlane} size="1x" />
						Submit
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
