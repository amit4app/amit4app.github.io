import React from "react";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>My Portfolio</h2>
        <div className="portfolio-items">
          <div className="portfolio-item">
            <img src="/assets/img/project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Short description of the project.</p>
          </div>
          <div className="portfolio-item">
            <img src="/assets/img/project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
