import React from "react";

const Home: React.FC = () => {
  return (
    <section id="home" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Hello, I'm Amitabh Sharma</h1>
            <p>Welcome to my creative portfolio. Explore my projects, designs, and development work.</p>
            {/* <div className="d-flex">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div> */}
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={`${process.env.PUBLIC_URL}/assets/img/hero-img.png`} className="img-fluid animated" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
