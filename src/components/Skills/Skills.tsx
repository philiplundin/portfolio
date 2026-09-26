import * as React from "react";
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faGit, faHtml5, faJava, faJs, faMicrosoft, faNode, faReact, faStripe, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faMobile } from "@fortawesome/free-solid-svg-icons";
import Heroku from "../../assets/Heroku.svg";
import Gatsby from "../../assets/gatsby.svg";

const Skills: React.FC = () => {
    return (
        <section className='content-spacing' id='skills'>
            <h3 className='content-heading'>SKILLS</h3>
            <ul className='icon-list'>
                <li className='icon-column'>
                    <span className='icon'><FontAwesomeIcon icon={faJs} size="2x" />JavaScript</span>
                    <span className='icon'><FontAwesomeIcon icon={faCode} size="2x" />jQuery</span>
                    <span className='icon'><FontAwesomeIcon icon={faReact} size="2x" />React</span>
                    <span className='icon'><FontAwesomeIcon icon={faMobile} size="2x" />React Native</span>
                </li>
                <li className='icon-column'>
                    <span className='icon'><FontAwesomeIcon icon={faHtml5} size="2x" />HTML</span>
                    <span className='icon'><FontAwesomeIcon icon={faCss} size="2x" />CSS</span>
                    <span className='icon'><FontAwesomeIcon icon={faWindows} size="2x" />Visual Basic</span>
                    <span className='icon'><FontAwesomeIcon icon={faMicrosoft} size="2x" />.NET</span>
                </li>
                <li className='icon-column'>
                    <span className='icon'><FontAwesomeIcon icon={faDatabase} size="2x" />MySQL</span>
                    <span className='icon'><FontAwesomeIcon icon={faCode} size="2x" />TypeScript</span>
                    <span className='icon'><FontAwesomeIcon icon={faNode} size="2x" />Node.js</span>
                    <span className='icon'><FontAwesomeIcon icon={faJava} size="2x" />Java</span>
                </li>
                <li className='icon-column'>
                    <span className='icon'><FontAwesomeIcon icon={faGit} size="2x" />Git</span>
                    <span className='icon'><Gatsby fill="#ffffff" className='custom-icon' />Gatsby</span>
                    <span className='icon'><Heroku fill="#ffffff" className='custom-icon' />Heroku</span>
                    <span className='icon'><FontAwesomeIcon icon={faStripe} size="2x" />Stripe</span>
                </li>
            </ul>
        </section>
    );
};

export default Skills;