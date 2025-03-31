import React, { useState, useEffect } from "react";
import "../style.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "experience", "blog", "contact"];
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as HTMLElement).closest(".navmenu, .mobile-nav-toggle")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  
    setTimeout(() => {
      const navMenu = document.querySelector(".navmenu") as HTMLElement | null;
      if (navMenu) {
        if (!mobileMenuOpen) {
          console.log("Opening menu...");
          navMenu.classList.add("mobile-menu-open");
          navMenu.style.display = "flex";
        } else {
          console.log("Closing menu...");
          navMenu.classList.remove("mobile-menu-open");
          navMenu.style.display = "none";
        }
        console.log("Nav Menu Classes:", navMenu.classList);
      } else {
        console.log("NavMenu element not found!");
      }
    }, 100);
  };
  

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Amitabh Sharma</h1>
        </a>

        {/* Navigation Menu */}
        <nav id="navmenu" className={`navmenu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <ul>
            <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Work Experience</a></li>
            <li><a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#blog" className={activeSection === "blog" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
            <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        {/* <i className={`mobile-nav-toggle d-xl-none bi ${mobileMenuOpen ? "bi-x" : "bi-list"}`} onClick={toggleMobileMenu}></i> */}
      </div>
    </header>
  );
};

export default Header;
