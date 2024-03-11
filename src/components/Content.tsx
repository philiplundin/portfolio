import * as React from "react";
import './Content.css';
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

const Content: React.FC = () => {
    return (
        <section className='content'>
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <footer className='footer'>
                © {new Date().getFullYear()} &middot; Built with
                {` `}
                <a href="https://www.gatsbyjs.com" target='_blank' style={{ color: '#a45bec', textDecoration: 'underline' }}>Gatsby</a>
            </footer>
        </section>
    );
};

export default Content;