import * as React from "react";
import './Header.css';

import Title from "./Title/Title";
import Links from "./Links/Links";
import Nav from "./Nav/Nav";

const Header: React.FC = () => {
    return (
        <section className='header'>
            <Title />
            <Links />
            <Nav />
        </section>
    );
};

export default Header;