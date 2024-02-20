import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ProLang from "./Components/ProLang";
import Education from "./Components/Education";
import Services from "./Components/Services";
import Landing from "./Components/Landing";
import { BsArrowUpSquare } from "react-icons/bs";

const App = () => {
    return (
        <div className="w-screen h-screen bg-bgColor relative overflow-auto overflow-x-hidden snap-mandatory scroll-smooth">
            <div className="row">
                <NavBar />
                <Landing />
                <About />
                <Education />
                <Services />
                <a href="#home" className="z-30 sticky top-3/4 left-[98%] text-white w-8 text-[1.5rem] grid place-items-end pr-2 sm:pr-4">
                    <BsArrowUpSquare />
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
