import * as React from "react"
import './About.css'
import JSONData from '../../assets/About-text.json';

const About: React.FC = () => {
    return (
        <section id='about' className='about'>
            <h3 className='about-heading'>ABOUT</h3>
            <p className='about-text'>{JSONData.paragraph1}</p>
            <p className='about-text'>{JSONData.paragraph2}</p>
        </section>
    )
}

export default About
