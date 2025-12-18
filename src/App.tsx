import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
