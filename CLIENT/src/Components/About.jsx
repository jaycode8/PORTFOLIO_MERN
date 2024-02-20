import { BsCloudDownload } from "react-icons/bs";
import jay from "../resources/images/jay.png";

const About = () => {
    return (
        <div className="w-full bg-about sm:grid grid-cols-2 overflow-hidden pt-20 sm:pt-12 sm:pb-16 px-4 sm:px-0 relative" id="about">
            <div className="grid place-items-center content-center relative pt-10 sm:pt-0">
                <div className="w-64 phones:w-80 h-64 phones:h-80 relative">
                    <div className="w-[30%] h-[45%] absolute mt-[-1rem] phones:mt-[-1.5rem] ml-[-1rem] phones:ml-[-1.5rem] border-t-2 border-l-2 border-primary rounded-ss-2xl"></div>
                    <div className="w-4/5 h-4/5 mt-[4rem] phones:mt-[5.5rem] ml-[4rem] phones:ml-[5.5rem] absolute bg-primary rounded-ee-2xl"></div>
                    <div className="w-full h-full absolute bg-bgColor grid place-items-center overflow-hidden shadow-custom2 rounded-2xl">
                        <img src={jay} alt="jamoh" className="cursor-pointer w-full" />
                    </div>
                </div>
            </div>
            <div className="grid place-items-start content-center">
                <div className="w-full sm:w-[90%] lg:w-4/5">
                    <h3 className="text-2 sm:text-[2.5rem] text-white mb-4 absolute top-12 sm:top-0 sm:relative">About me</h3>
                    <p className="text-[#808080] my-4 leading-8 pt-8 sm:pt-0">
                        Meet James Mumo, a skilled developer with strong foundation in Python and JavaScript, along
                        with their respective libraries. Proficient in both SQL and NoSQL, James brings a versitile
                        skill set to the table. His expertise extends to crafting dynamic and responsive frontend
                        experiences using HTML, CSS, Vanilla JS and JSX. With keen understanding of REST APIs, James
                        is not just a coder, he's a problem solver, ready to create innovative solutions for your projects.
                        Elevate your digital experience with James Mumo's passion for clean, efficient and impactful
                        development.
                    </p>
                    <div className="flex gap-4 my-5">
                        <a href="#contacts">
                            <button className="w-36 h-10 text-center text-[#121212] bg-primary">Hire me</button>
                        </a>
                        <a href="resume.pdf" download="james_mumo_resume">
                            <button className="w-36 h-10 flex place-items-center justify-center gap-3 outline-none border-1 border-[#808080] transition-all duration-200 hover:bg-primary text-shades hover:text-[#121212] hover:border-0">
                                CV
                                <BsCloudDownload />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
