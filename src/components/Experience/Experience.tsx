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
            <h3>Experience</h3>
            <ul>
                {jsonData.map((item: Item, index) => {
                    return (
                        <li key={index}>
                            <p>{item.date}</p>
                            <h4>{item.role}</h4>
                            <h4>{item.institution}</h4>
                            <p>{item.description}</p>
                        </li>
                    )
                }

                )}
            </ul>
        </div>
    );
};

export default Experience;