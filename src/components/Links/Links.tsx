import * as React from "react";
import './Links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Links: React.FC = () => {
    return (
        <section className='links'>
            <ul>
                <li className='links-row'>
                    <a href="https://github.com/philiplundin" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    <a href="https://www.linkedin.com/in/philip-lundin-977ab6222/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                </li>
            </ul>

        </section>
    );
};

export default Links;