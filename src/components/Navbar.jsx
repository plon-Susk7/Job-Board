

/* 
    Need a link to our github repo!. Need an image tag for that or maybe a button for fork would work nice as well.

*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    return (
        <> 
            <div className="flex justify-between">
                <div>
                    <p>Logo</p>
                </div>
                <div className="flex">
                    <a href="#">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <button href="#">Submit</button>
                </div>
            </div>

        </>
    )

}

export default Navbar