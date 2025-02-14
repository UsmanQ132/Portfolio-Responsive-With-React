import React, { useState, useEffect } from "react";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");

  // Store section references
  const sections = {
    Home: Home,
    Services: Services,
    Projects: Projects,
    About: About,
  };

  // Function to handle smooth scrolling when clicking navbar links
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,//Adjust for fixed navbar height
        behavior: "smooth",
      });
      setMenuOpen(false); // Close the mobile menu after clicking
    }
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let activeSection = "Home";
      const scrollY = window.scrollY;

      Object.keys(sections).forEach((section) => {
        const element = document.getElementById(section);
        if (element && scrollY >= element.offsetTop - 120) {
          activeSection = section;
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <a className="logo">Portfolio</a>

        {/* Navigation Links */}
        <ul className={`topmenu ${menuOpen ? "open" : ""}`}>
          {Object.keys(sections).map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={currentSection === section ? "active" : ""}
                onClick={(e) => scrollToSection(e, section)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Mobile Menu */}
        <div className={`slidenav ${menuOpen ? "open" : ""}`}>
          <i className="bx bxs-x-circle close" onClick={() => setMenuOpen(false)}></i>
          <ul className="navigation1">
            {Object.keys(sections).map((section) => (
              <li key={section}>
                <a href={`#${section}`} onClick={(e) => scrollToSection(e, section)}>
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Render Sections with IDs */}
      <div>
        {Object.keys(sections).map((section) => (
          <div key={section} id={section} className="section">
            {React.createElement(sections[section])}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
