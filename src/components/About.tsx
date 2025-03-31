import React from "react";

const About: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Me</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              I am a passionate <strong>Mobile App Developer</strong> with <strong>11 years of experience</strong>, specializing in <strong>React Native, Vue, Ionic and Native Android (Java + Kotlin)</strong>.
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> Expertise in cross-platform and native mobile development.</li>
              <li><i className="bi bi-check2-circle"></i> Strong experience in integrating RESTful APIs and third-party services.</li>
              <li><i className="bi bi-check2-circle"></i> Skilled in optimizing performance and user experience.</li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              My journey in mobile development has allowed me to build scalable and user-friendly applications. I enjoy working with modern technologies and am always eager to learn and innovate.
            </p>
            <button className="read-more" onClick={scrollToProjects}>
              <span>View My Work</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
