import * as React from "react";
import './Education.css';
import JSONData from '../../assets/Education-text.json';

interface Item {
    date: string;
    role: string;
    institution: string;
    description: string;
}
const jsonData: Item[] = JSONData;

const Education: React.FC = () => {
    return (
        <div>
            <h3 className='education-heading'>EDUCATION</h3>
            <ul>
                {jsonData.map((item: Item, index) => {
                    return (
                        <li key={index}>
                            <p className='education-text'>{item.date}</p>
                            <h4 className='education-heading-small'>{item.role}</h4>
                            <h4 className='education-heading-small'>{item.institution}</h4>
                            <p className='education-text'>{item.description}</p>
                        </li>
                    )
                }

                )}
            </ul>
        </div>
    );
};

export default Education;