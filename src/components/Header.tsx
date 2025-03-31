import React, { useState, useEffect } from "react";

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as HTMLElement).closest(".navmenu, .mobile-nav-toggle")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu on item click
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
            <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={closeMobileMenu}>About</a></li>
            <li><a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={closeMobileMenu}>Work Experience</a></li>
            <li><a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#blog" className={activeSection === "blog" ? "active" : ""} onClick={closeMobileMenu}>Blog</a></li>
            <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={closeMobileMenu}>Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <i className={`mobile-nav-toggle d-xl-none bi ${mobileMenuOpen ? "bi-x" : "bi-list"}`} onClick={toggleMobileMenu}></i>
      </div>
    </header>
  );
};

export default Header;
