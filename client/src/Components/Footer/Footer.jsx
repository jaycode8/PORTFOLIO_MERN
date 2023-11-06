import "./Footer.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer ">
			<div className="socials">
				<a
					href="https://www.linkedin.com/mwlite/in/james-mumo-547b91223"
					target="_blank"
				>
					<FaLinkedinIn className="icon" />
				</a>
				<a href="https://github.com/jaycode8" target="_blank">
					<FaGithub className="icon" />
				</a>
			</div>
			<div className="copyright">
				<span>
					&copy;<small> {new Date().getFullYear()}</small>{" "}
					<a href="#homePage"> JayTech </a> All Rights Reserved.
				</span>
			</div>
		</div>
	);
};

export default Footer;

