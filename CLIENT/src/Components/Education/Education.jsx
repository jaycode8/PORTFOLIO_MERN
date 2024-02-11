import { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import "./Education.css";
import axios from "axios";

const api_url = import.meta.env.VITE_REACT_APP_API_URL;

const Education = () => {
    const [institutions, setInstitutions] = useState([]);

    const fetchInstitutions = async () => {
        try {
            const res = await axios.get(`${api_url}/institutions`);
            setInstitutions(res.data.message);
        } catch (error) {
            console.log("");
        }
    };

    useEffect(() => {
        fetchInstitutions();
    }, [institutions]);

    const sortedInstitutions = [...institutions].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );

    return (
        <div className="Education" id="education">
            <h3>Education</h3>
            <div className="education-container">
                {sortedInstitutions.map((inst, index) => (
                    <div
                        className={`edu-card ${index % 2 === 0 ? "even" : "odd"}`}
                        key={inst._id}
                    >
                        <h5>{inst.Name}</h5>
                        <p>{inst.program}</p>
                        <span>
                            <FaCalendar />
                            {inst.duration}
                        </span>
                        <div className="circular"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
