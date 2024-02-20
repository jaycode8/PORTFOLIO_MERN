import { useEffect, useState } from "react";
import axios from "axios";

const api_url = import.meta.env.VITE_REACT_APP_API_URL;

const ProLang = () => {
    const [languages, setLanguages] = useState([]);

    const fetchLanguages = async () => {
        try {
            const res = await axios.get(`${api_url}/languages`);
            setLanguages(res.data.message);
        } catch (error) {
            console.log("");
        }
    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    const currentWidth = window.innerWidth;
    let styleWidth = currentWidth >= 500 ? "70" : "50";
    let dArray = currentWidth >= 640 ? "440" : "320";

    return (
        <div className="w-full grid relative place-items-center pt-12 px-4 pb-4" id="skills">
            <h3 className="text-white text-2 w-full sm:text-center">Skills</h3>
            <div className="w-full lg:w-[60rem] grid place-items-center mt-[3%] px-4 grid-cols-skills-grid2 sm:grid-cols-skills-grid gap-20">
                {languages.map((lang) => (
                    <div
                        style={{ "--num": lang.level, "--clr": lang.langColor }}
                        className={`circularBar max-w-36 sm:max-w-40 w-36 sm:w-40 h-36 sm:h-40 grid place-items-center rounded-lg cursor-pointer transition-all duration-700 ease-in-out bg-transparent hover:bg-var(--clr)`}
                        key={lang._id}
                    >
                        <div className="percent relative w-[109px] sm:w-[150px] h-[109px] sm:h-[150px]">
                            <div
                                style={{ "transform": `rotate(calc(3.6deg * ${lang.level}))` }}
                                className="dot absolute inset-[5px] z-10 before:content-[''] before:absolute before:-top-[5px] before:left-[50%] before:-translate-x-[50%] before:w-[10px] before:h-[10px] before:rounded-[50%]"></div>
                            <svg className="relative w-[109px] sm:w-[150px] h-[109px] sm:h-[150px] rotate-[270deg]">
                                <circle className="relative w-full h-full fill-transparent stroke-2 stroke-[#191919] translate-x-[5px] translate-y-[5px]" cx={styleWidth} cy={styleWidth} r={styleWidth}></circle>
                                <circle className="relative w-full h-full fill-transparent stroke-2 stroke-primary translate-x-[5px] translate-y-[5px] opacity-0 animate-fadeIn" strokeDasharray={dArray} style={{ "strokeDashoffset": `calc(${dArray} - (${dArray} * ${lang.level}) / 100)` }} cx={styleWidth} cy={styleWidth} r={styleWidth}></circle>
                            </svg>
                            <div className="number absolute inset-0 flex items-center justify-center flex-col opacity-0 text-white animate-fadeIn">
                                <h2 className="text-[1rem] sm:text-[2.4rem] mt-8 sm:mt-0 font-bold flex place-items-center gap-1">
                                    {lang.level}
                                    <i className="text-[0.7rem] sm:text-[1.2rem] font-extralight">%</i>
                                </h2>
                                <p className="text-[0.6rem] sm:text-[0.8rem] tracking-[0.2rem] uppercase text-center text-[#808080]">{lang.language}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProLang;
