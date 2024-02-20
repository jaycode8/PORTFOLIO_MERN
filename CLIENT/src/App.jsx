import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ProLang from "./Components/Languages/ProLang";
import Education from "./Components/Education";
import Services from "./Components/Services";
import { AiOutlineArrowUp } from "react-icons/ai";
import Landing from "./Components/Landing";

const App = () => {
    return (
        <div className="container-fluid main">
            <div className="row">
                <NavBar />
                <Landing />
                <About />
                <Education />
                <Services />
                <a href="#homePage" className="moveUp">
                    <AiOutlineArrowUp className="arrowUp" />
                </a>
                <ProLang />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;
