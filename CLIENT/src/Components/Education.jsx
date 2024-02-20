import { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
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
        <div className="w-full h-auto flex justify-around items-center flex-col px-4 pt-12 pb-8" id="education">
            <h3 className="text-2 text-white w-full sm:text-center">Education</h3>
            <div className="w-full h-full grid items-center justify-center mt-8 gap-4">
                {sortedInstitutions.map((inst, index) => (
                    <div
                        className={`${index % 2 === 0 ? "-translate-x-[7%] phones:-translate-x-[15%] sm:-translate-x-[45%] md:-translate-x-[55%] place-items-end" : "translate-x-[7%] phones:translate-x-[15%] sm:translate-x-[45%] md:translate-x-[55%] place-items-start"} w-full sm:w-80 lg:w-[25rem] cursor-pointer gap-4 grid relative py-2 px-2 rounded-[0.3rem] shadow-custom3 text-shades group`}
                        key={inst._id}
                    >
                        <h5 className="text-[0.9rem] sm:text-[1rem]">{inst.Name}</h5>
                        <p className="text-[0.7rem] sm:text-base">{inst.program}</p>
                        <span className="grid grid-flow-col place-items-center gap-4 text-[0.7rem] sm:text-base">
                            <FaCalendar />
                            {inst.duration}
                        </span>
                        <div className={`${index % 2 === 0 ? "-right-[1.5rem]" : "-left-[1.5rem]"} absolute w-3 sm:w-4 h-3 sm:h-4 top-0 rounded-[50%] shadow-custom3 group-hover:bg-primary group-hover:shadow-none transition-all duration-700 ease-in-out`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
