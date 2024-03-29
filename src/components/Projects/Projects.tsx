import React from "react";
import "./Projects.css";
import AndroidTV from "../../images/AndroidTV.webp";
import AppleTV from "../../images/AppleTV.webp";
import BodyMind from "../../images/body-mind.webp";
import Mathlingo from "../../images/mathlingo.webp";
import MusicWebsite from "../../images/website-music.webp";

const Projects: React.FC = () => {
    return (
        <section className='content-spacing' id='projects'>
            <h3 className='content-heading'>PROJECTS</h3>
            <ul className='projects-list'>
                <a href='https://philiplundin.github.io/body-mind/' target='_blank'>
                    <li className='projects-list-item'>
                        <img className='projects-image' src={BodyMind} alt='body-mind' />
                        <span className='projects-text-box'>
                            <h3 className='projects-heading-small'>Body & Mind</h3>
                            <p className='projects-text'>React website for a company offering adventures. It's a work in progress.</p>
                        </span>
                    </li>
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.staccsandroidtv' target='_blank'>
                    <li className='projects-list-item'>
                        <img className='projects-image' src={AndroidTV} alt='android-tv' />
                        <span className='projects-text-box'>
                            <h3 className='projects-heading-small'>Staccs - Android TV</h3>
                            <p className='projects-text'>React native application built for Staccs users with a paid subscription.</p>
                        </span>
                    </li>
                </a>
                <a href='https://apps.apple.com/se/app/staccs/id1566144790?platform=appleTV' target='_blank'>
                    <li className='projects-list-item'>
                        <img className='projects-image' src={AppleTV} alt='apple-tv' />
                        <span className='projects-text-box'>
                            <h3 className='projects-heading-small'>Staccs - Apple TV</h3>
                            <p className='projects-text'>React native application built for Staccs users with a paid subscription.</p>
                        </span>
                    </li>
                </a>
                <a href='https://github.com/philiplundin/mathlingo-frontend' target='_blank'>
                    <li className='projects-list-item'>
                        <img className='projects-image' src={Mathlingo} alt='mathlingo' />
                        <span className='projects-text-box'>
                            <h3 className='projects-heading-small'>Mathlingo</h3>
                            <p className='projects-text'>Quiz web application built in Vue.js.</p>
                        </span>
                    </li>
                </a>
                <a href='https://philun-iths.github.io/' target='_blank'>
                    <li className='projects-list-item'>
                        <img className='projects-image' src={MusicWebsite} alt='music-website' />
                        <span className='projects-text-box'>
                            <h3 className='projects-heading-small'>Music website</h3>
                            <p className='projects-text'>Website built in vanilla JavaScript.</p>
                        </span>
                    </li>
                </a>
            </ul>
        </section>
    );
};

export default Projects;