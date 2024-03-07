import * as React from "react";
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faFigma, faGit, faHtml5, faJava, faJs, faNode, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faMobile } from "@fortawesome/free-solid-svg-icons";
import Heroku from "../../assets/Heroku.svg";
import Gatsby from "../../assets/gatsby.svg";

const Skills: React.FC = () => {
    return (
        <section className='skills'>
            <h3 style={{textAlign: 'center'}}>Skills</h3>
            <ul className='icon-list'>
                <li className='icon-column'>
                    <span className='icon'><FontAwesomeIcon icon={faReact} size="2x" />React</span>
                    <span className='icon'><FontAwesomeIcon icon={faMobile} size="2x" />React Native</span>
                    <span className='icon'><FontAwesomeIcon icon={faJs} size="2x" />JavaScript</span>
                    <span className='icon'><FontAwesomeIcon icon={faCode} size="2x" />TypeScript</span>
                </li>
                <li className='icon-column'>
                    <span className='icon'><FontAwesomeIcon icon={faJava} size="2x" />Java</span>
                    <span className='icon'><FontAwesomeIcon icon={faNode} size="2x" />Node.js</span>
                    <span className='icon'><FontAwesomeIcon icon={faHtml5} size="2x" />HTML5</span>
                    <span className='icon'><FontAwesomeIcon icon={faCss3Alt} size="2x" />CSS3</span>
                </li>
                <li className='icon-column'>
                    <span className='icon'><FontAwesomeIcon icon={faDatabase} size="2x" />MySQL</span>
                    <span className='icon'><FontAwesomeIcon icon={faDatabase} size="2x" />MongoDB</span>
                    <span className='icon'><FontAwesomeIcon icon={faGit} size="2x" />Git</span>
                    <span className='icon'><FontAwesomeIcon icon={faSass} size="2x" />Sass</span>
                </li>
                <li className='icon-column'>
                    <span className='icon'><Gatsby fill="#ffffff" className='custom-icon' />Gatsby</span>
                    <span className='icon'><Heroku fill="#ffffff" className='custom-icon' />Heroku</span>
                    <span className='icon'><FontAwesomeIcon icon={faFigma} size="2x" />Figma</span>
                    <span className='icon'><FontAwesomeIcon icon={faStripe} size="2x" />Stripe</span>
                </li>
            </ul>
        </section>
    );
};

export default Skills;