import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import "./style.css"; // Import your styles

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
