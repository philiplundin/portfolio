import * as React from "react";
import './Content.css';
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

const Content: React.FC = () => {
    return (
        <section className='content'>
            <About />
            <Experience />
            <Education />
            <Skills />
            <footer
                style={{
                    color: '#ffffff',
                    marginTop: '140px',
                    fontSize: `var(--font-sm)`,
                }}
            >
                © {new Date().getFullYear()} &middot; Built with
                {` `}
                <a href="https://www.gatsbyjs.com" target='_blank' style={{ color: "#a45bec" }}>Gatsby</a>
            </footer>
        </section>
    );
};

export default Content;