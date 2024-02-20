import { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";

const api_url = import.meta.env.VITE_REACT_APP_API_URL;

const Projects = () => {
    let [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const res = await axios.get(`${api_url}/projects`);
            setProjects(res.data.message);
        } catch (error) {
            console.log("");
        }
    };
    useEffect(() => {
        fetchProjects();
    }, []);

    const sortedProjects = [...projects].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return (
        <div className="w-full h-auto pt-[2.6rem] px-4 pb-8" id="projects">
            <h3 className="text-2 text-white w-full sm:text-center">Projects</h3>
            <div className="w-full h-auto my-8 grid place-items-center justify-center gap-9 sm:gap-6 grid-cols-projects-grid">
                {sortedProjects.map((project, i) => (
                    <div className="h-[30rem] w-[90%] sm:w-full text-[#808080] rounded-lg bg-[#171c22] grid grid-rows-projects shadow-custom3" key={project._id}>
                        <div className="w-full h-36 overflow-hidden">
                            <img src={project.bgImg.imgUrl} alt={project.projectName} className="w-full rounded-t-lg" />
                        </div>
                        <div className="relative pt-2 px-[0.7rem] sm:px-4 text-start">
                            <h4 className="text-[1.1rem] pt-8">
                                {project.projectName} | {project.title}
                            </h4>
                            <h5 className="text-[1rem] pt-2 pb-4">{project.description}</h5>
                            <p>
                                Tech used :
                                {project.technology.map((language, index) => (
                                    language.split(",").map((lg, i) => (
                                        <li key={i} className="inline-block px-2 py-[0.1rem] m-[0.3rem] bg-[#555] text-white text-[0.8rem] rounded cursor-pointer">{lg}</li>
                                    ))
                                ))}
                            </p>
                            <span className="w-auto absolute bottom-5">
                                <a href={project.linkto} target="_blank" className="py-1 px-5 flex place-items-center gap-2 bg-primary cursor-pointer text-[#121212] sm:rounded">
                                    <FaEye />
                                    See live
                                </a>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
