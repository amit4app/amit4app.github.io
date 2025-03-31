import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <h3>Frontend Development</h3>
            <ul>
              <li><i className="bi bi-check-circle"></i> React Native & Redux</li>
              <li><i className="bi bi-check-circle"></i> Java and Kotlin</li>
              <li><i className="bi bi-check-circle"></i> Jetpack compose, MVVM, Clean Architecture</li>
              <li><i className="bi bi-check-circle"></i> Vue.js, Angular & Ionic</li>
              <li><i className="bi bi-check-circle"></i> TypeScript & JavaScript</li>
              <li><i className="bi bi-check-circle"></i> HTML, CSS, SCSS, Bootstrap</li>
            </ul>
          </div>

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
            <h3>Backend & Other Skills</h3>
            <ul>
              <li><i className="bi bi-check-circle"></i> RESTful APIs & Firebase</li>
              <li><i className="bi bi-check-circle"></i> Node.js & Express.js</li>
              <li><i className="bi bi-check-circle"></i> Git & CI/CD</li>
              <li><i className="bi bi-check-circle"></i> Agile & Scrum Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
