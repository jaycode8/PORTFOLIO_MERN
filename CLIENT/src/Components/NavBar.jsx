import { HiBars3BottomRight } from "react-icons/hi2"
import { BiCross } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const menuToggle = () => {
        setNav(!nav);
    }
    const isOpen = nav ? "right-0" : "right-[-80%]"

    const links = [
        { link: "#homePage", name: "Home" },
        { link: "#aboutPage", name: "About" },
        { link: "#education", name: "Education" },
        { link: "#servicePage", name: "Services" },
        { link: "#skills", name: "Skills" },
        { link: "#projectsPage", name: "Projects" },
        { link: "#contacts", name: "Contacts" }
    ]

    return (
        <div className="w-full h-12 fixed top-[-1px] flex justify-between items-center py-4 px-4 lg:px-20 bg-about text-[#d6d8e6] z-50">
            <h1 className="text-[30px] font-righteous">Jay<span className="text-primary font-righteous">TECH</span></h1>
            <nav className={`h-screen md:h-auto w-[80%] sm:w-1/2 md:w-auto pt-20 pl-8 md:pl-0 md:pt-0 bg-about md:bg-transparent absolute md:relative ${isOpen} md:right-0 top-0 transition-all duration-700 ease-in-out`}>
                <ul className="relative grid gap-4 lg:gap-8 grid-flow-row md:grid-flow-col list-none">
                    {
                        links.map((li, index) => (
                            <a href={`${li.link}`} onClick={menuToggle} className="headerlink" key={index}><li>{li.name}</li></a>
                        ))
                    }
                </ul>
                <BiCross onClick={menuToggle} className="block absolute top-4 right-4 text-[1.8rem] rotate-45 md:hidden" />
            </nav>
            <HiBars3BottomRight onClick={menuToggle} className="block text-[1.8rem] md:hidden" />
        </div >
    );
};

export default NavBar;
