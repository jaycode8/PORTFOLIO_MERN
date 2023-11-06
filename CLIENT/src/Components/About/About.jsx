import "./About.css";
import { BsCloudDownload } from "react-icons/bs";
import jay from "../../resources/images/jay.png";

const About = () => {
    return (
        <div className="aboutMe" id="aboutPage">
            <div className="myImg">
                <div className="box">
                    <div className="box-box0"></div>
                    <div className="box-box1"></div>
                    <div className="box-box2">
                        <img src={jay} alt="jamoh" />
                    </div>
                </div>
            </div>
            <div className="aboutText">
                <div>
                    <h3>About me</h3>
                    <p>
                        My name is James Mumo. I'm a freelancer based in Nairobi, Kenya and
                        am passionate and dedicated to my work. I have a strong foundation
                        in JavaScript, Python, and REST API's. I do work with both SQL and
                        NoSQL databases. Im ready to bussiness talks of any kind based on
                        tech. I look forward to working with you...
                    </p>
                    <div className="buttons">
                        <a href="#contacts">
                            <button>Hire me</button>
                        </a>
                        <a href="resume.pdf" download="james_mumo_resume">
                            <button>
                                CV
                                <BsCloudDownload className="download-icon" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
