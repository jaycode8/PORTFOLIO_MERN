import "./About.css";
import jay from "./images/jay1.png";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <div className="aboutMe" id="aboutPage">
      <div className="custom-shape-divider-bottom-1687690670">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="myImg">
        <img src={jay} id="img" />
        <div className="svg">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" offset="0%"></stop>
                <stop id="stop2" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M36.4,-26C44.5,-18.8,46.8,-3.8,43.3,9.2C39.8,22.2,30.5,33.1,16.8,42.7C3.2,52.2,-14.9,60.3,-22.8,54C-30.6,47.6,-28.3,26.8,-28.2,11C-28.1,-4.7,-30.3,-15.3,-25.9,-21.6C-21.6,-28,-10.8,-30.2,1.6,-31.5C14.1,-32.8,28.2,-33.3,36.4,-26Z"
              transform="translate(55 63)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
            ></path>
          </svg>
        </div>
      </div>
      <div className="aboutText">
        <div>
          <h3>About me</h3>
          <p>
            My name is James Mumo. I'm a freelancer based in Nairobi, Kenya and
            am passionate and dedicated to my work. i have a strong foundation
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
                Download cv
                <AiOutlineDownload className="mx-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
