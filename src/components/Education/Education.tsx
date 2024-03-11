import * as React from "react";
import './Education.css';
import JSONData from '../../assets/Education-text.json';

interface Item {
    date: string;
    role: string;
    institution: string;
    description: string;
    link: string;
}
const jsonData: Item[] = JSONData;

const Education: React.FC = () => {
    return (
        <section className='education' id='education'>
            <h3 className='education-heading'>EDUCATION</h3>
            <ul>
                {jsonData.map((item: Item, index) => {
                    return (
                        <a href={item.link} target='_blank' >
                            <li key={index} className='education-listitem'>
                                <p className='education-text'>{item.date}</p>
                                <h4 className='education-heading-small'>{item.role}</h4>
                                <h4 className='education-heading-small'>{item.institution}</h4>
                                <p className='education-text'>{item.description}</p>
                            </li>
                        </a>
                    )
                }

                )}
            </ul>
        </section>
    );
};

export default Education;