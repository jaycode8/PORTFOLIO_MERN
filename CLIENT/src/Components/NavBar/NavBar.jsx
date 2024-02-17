import './NavBar.css';
import { HiBars3BottomRight } from "react-icons/hi2"
import { BiCross } from "react-icons/bi";

const NavBar = () => {
    const menuToggle = () => {
        document.querySelector('nav').classList.toggle('active')
    };

    return (
        <div className="header">
            <h1>Jay<span>TECH</span></h1>
            <nav>
                <ul>
                    <a href="#homePage" onClick={menuToggle}><li>Home</li></a>
                    <a href="#aboutPage" onClick={menuToggle}><li>About</li></a>
                    <a href='#education' onClick={menuToggle}><li>Education</li></a>
                    <a href="#servicePage" onClick={menuToggle}><li>Services</li></a>
                    <a href='#skills' onClick={menuToggle}><li>Skills</li></a>
                    <a href="#projectsPage" onClick={menuToggle}><li>Projects</li></a>
                    <a href="#contacts" onClick={menuToggle}><li>Contact</li></a>
                </ul>
                <BiCross id='cancel' onClick={menuToggle} />
            </nav>
            <HiBars3BottomRight id='bars' onClick={menuToggle} />
        </div>
    );
};

export default NavBar;
