import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-auto py-4 flex flex-col bg-[#121212]">
            <div className="w-full relative flex flex-row place-items-center justify-center gap-12 my-6">
                <a
                    href="https://www.linkedin.com/mwlite/in/james-mumo-547b91223"
                    target="_blank"
                >
                    <FaLinkedinIn className="text-[1.8rem] text-primary" />
                </a>
                <a href="https://github.com/jaycode8" target="_blank">
                    <FaGithub className="text-[1.8rem] text-primary" />
                </a>
            </div>
            <div>
                <span className="flex items-center justify-center gap-2 text-[1rem] text-white">
                    &copy;<small className="text-[1rem]"> {new Date().getFullYear()}</small>{" "}
                    <a href="#homePage" className="font-extrabold transition duration-1000 hover:text-primary"> JayTech </a> All Rights Reserved.
                </span>
            </div>
        </div>
    );
};

export default Footer;

