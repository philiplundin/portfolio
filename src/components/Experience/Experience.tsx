import * as React from "react";
import './Experience.css';
import JSONData from '../../assets/Experience-text.json';

interface Item {
    date: string;
    role: string;
    institution: string;
    description: string;
    link: string;
}
const jsonData: Item[] = JSONData;

const Experience: React.FC = () => {
    return (
        <section className='experience' id='experience'>
            <h3 className='experience-heading'>EXPERIENCE</h3>
            <ul>
                {jsonData.map((item: Item, index) => {
                    return (
                        <a href={item.link} target='_blank'>
                            <li key={index} className='experience-listitem'>
                                <p className='experience-text'>{item.date}</p>
                                <h4 className='experience-heading-small'>{item.role}</h4>
                                <h4 className='experience-heading-small'>{item.institution}</h4>
                                <p className='experience-text'>{item.description}</p>
                            </li>
                        </a>
                    )
                }

                )}
            </ul>
        </section>
    );
};

export default Experience;