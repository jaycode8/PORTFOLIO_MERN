import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import {
    FaFacebookF,
    FaTwitter,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Home = () => {
    return (
        <div className="landingPage" id="homePage">
            <div className="custom-shape-divider-bottom">
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
            <div className="landingText">
                <h3>Hi !</h3>
                <div>
                    <h2>Im James, </h2>
                    <span>
                        <Typewriter
                            words={["a programmer", "a React Developer", "a BackEnd Dev"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <h4>
                    {" "}
                    Full Stack <span>Dev.</span>
                </h4>
                <span>
                    <a href="https://www.facebook.com/james.mumo.9803" target="_blank">
                        <FaFacebookF className="icon" />
                    </a>
                    <a href="https://mobile.twitter.com/home" target="_blank">
                        <FaTwitter className="icon" />
                    </a>
                    <a href="https://wa.me/ +254 111482180" target="_blank">
                        <FaWhatsapp className="icon" />
                    </a>
                    <a href="https://www.instagram.com/jaymoh__254/" target="_blank">
                        <FaInstagram className="icon" />
                    </a>
                </span>
            </div>
            <FiChevronDown id="arrowUp" />
            <FiChevronDown id="arrowUp2" />
        </div>
    );
};

export default Home;
