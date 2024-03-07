import * as React from "react";
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faFigma, faGit, faHtml5, faJava, faJs, faNode, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faMobile } from "@fortawesome/free-solid-svg-icons";


const Skills: React.FC = () => {
    return (
        <div className='skills'>
            <h3>Skills</h3>
            <div className='icon-wrapper'>
                <div className='icon-section'>
                    <span className='icon'><FontAwesomeIcon icon={faReact} size="2x" />React</span>
                    <span className='icon'><FontAwesomeIcon icon={faMobile} size="2x" />React Native</span>
                    <span className='icon'><FontAwesomeIcon icon={faJava} size="2x" />Java</span>
                    <span className='icon'><FontAwesomeIcon icon={faJs} size="2x" />JavaScript</span>
                </div>
                <div className='icon-section'>
                    <span className='icon'><FontAwesomeIcon icon={faCss3Alt} size="2x" />CSS3</span>
                    <span className='icon'><FontAwesomeIcon icon={faHtml5} size="2x" />HTML5</span>
                    <span className='icon'><FontAwesomeIcon icon={faCode} size="2x" />TypeScript</span>
                    <span className='icon'><FontAwesomeIcon icon={faGit} size="2x" />Git</span>
                </div>
                <div className='icon-section'>
                    <span className='icon'><FontAwesomeIcon icon={faDatabase} size="2x" />MySQL</span>
                    <span className='icon'><FontAwesomeIcon icon={faDatabase} size="2x" />MongoDB</span>
                    <span className='icon'><FontAwesomeIcon icon={faStripe} size="2x" />Stripe</span>
                    <span className='icon'><FontAwesomeIcon icon={faNode} size="2x" />Node.js</span>
                </div>
                <div className='icon-section'>
                    <span className='icon'><FontAwesomeIcon icon={faFigma} size="2x" />Figma</span>
                    <span className='icon'><FontAwesomeIcon icon={faSass} size="2x" />Sass</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;