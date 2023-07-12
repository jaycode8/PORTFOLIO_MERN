import { useEffect, useState } from "react";
import './ProLang.css'
import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;


const ProLang = () => {
    const [languages, setLanguages] = useState([]);

    const fetchLanguages = async () => {
        try {
            const res = await axios.get(`${api_url}/languages`);
            setLanguages(res.data.message);
        } catch (error) {
            document.querySelector('.langContainer').innerHTML = `
                <span>
                    <p>Error loading programming languages from server...</p>
                </span>
            `;
        }
    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    const currentWidth = window.innerWidth;
    let styleWidth = (currentWidth >= 500) ? "70" : "50";

    return (
        <div className="languages" id="skills">
            <h3>
                Skills
            </h3>
            <div className="langContainer">
                {
                    languages.map((lang) => (
                        <div className="circularBar" style={{ '--num': lang.level, '--clr': lang.langColor }} key={lang._id}>
                            <div className="percent">
                                <div className="dot"></div>
                                <svg>
                                    <circle cx={styleWidth} cy={styleWidth} r={styleWidth}></circle>
                                    <circle cx={styleWidth} cy={styleWidth} r={styleWidth}></circle>
                                </svg>
                                <div className="number">
                                    <h2>{lang.level}<i>%</i></h2>
                                    <p>{lang.language}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ProLang;
