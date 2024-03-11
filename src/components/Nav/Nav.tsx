import React from "react";
import './Nav.css';

const Nav: React.FC = () => {
    return (
        <nav className='nav'>
            <a href='#about' className='nav-anchor'>ABOUT</a>
            <a href='#experience' className='nav-anchor'>EXPERIENCE</a>
            <a href='#education' className='nav-anchor'>EDUCATION</a>
            <a href='#skills' className='nav-anchor'>SKILLS</a>
            <a href='#projects' className='nav-anchor'>PROJECTS</a>
        </nav>
    );
};

export default Nav;