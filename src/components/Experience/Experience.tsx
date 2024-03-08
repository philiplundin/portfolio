import * as React from "react";
import './Experience.css';
import JSONData from '../../assets/Experience-text.json';

interface Item {
    date: string;
    role: string;
    institution: string;
    description: string;
}
const jsonData: Item[] = JSONData;

const Experience: React.FC = () => {
    return (
        <div>
            <h3 className='experience-heading'>EXPERIENCE</h3>
            <ul>
                {jsonData.map((item: Item, index) => {
                    return (
                        <li key={index}>
                            <p className='experience-text'>{item.date}</p>
                            <h4 className='experience-heading-small'>{item.role}</h4>
                            <h4 className='experience-heading-small'>{item.institution}</h4>
                            <p className='experience-text'>{item.description}</p>
                        </li>
                    )
                }

                )}
            </ul>
        </div>
    );
};

export default Experience;