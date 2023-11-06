import './NavBar.css';
import { AiOutlineBars } from 'react-icons/ai';

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
            </nav>
            <AiOutlineBars id='bars' onClick={menuToggle} />
        </div>
    );
};

export default NavBar;
