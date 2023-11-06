import "./Projects.css";
import { useState, useEffect } from "react";
import axios from "axios";

const api_url = import.meta.env.VITE_REACT_APP_API_URL;

const Projects = () => {
	let [projects, setProjects] = useState([]);

	const fetchProjects = async () => {
		try {
			const res = await axios.get(`${api_url}/projects`);
			setProjects(res.data.message);
		} catch (error) {
			document.querySelector(".projectCards").innerHTML = `
                <span>
                    <p>Error loading projects from server...</p>
                </span>
            `;
		}
	};
	useEffect(() => {
		fetchProjects();
	}, []);

	const sortedProjects = [...projects].sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	return (
		<div className="projectsContainer" id="projectsPage">
			<h3>Projects</h3>
			<div className="projectCards">
				{sortedProjects.map((project, i) => (
					<div className="project" key={project._id}>
						<div className="projectPhoto">
							<img src={project.bgImg.imgUrl} alt={project.projectName} />
						</div>
						<div className="proDescription">
							<h4>
								{project.projectName} | {project.title}
							</h4>
							<h5>{project.description}</h5>
							<p className="techLIst">
								Tech used :
								{project.technology.map((language, index) => (
									<li key={index} className="lang-badge">
										{language}
									</li>
								))}
							</p>
							<span>
								<a href={project.linkto} target="_blank" className="button">
									See live
								</a>
								<a href="#" className="button">
									Source Code
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
