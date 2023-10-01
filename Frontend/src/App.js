import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import ProLang from "./Components/Languages/ProLang";
import Education from "./Components/Education/Education";
import Services from "./Components/Services/Services";
import { AiOutlineArrowUp } from "react-icons/ai";

const App = () => {
  return (
    <div className="container-fluid main">
      <div className="row">
        <NavBar />
        <Home />
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
