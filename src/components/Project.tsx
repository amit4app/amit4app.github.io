import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Here are some of my mobile app projects.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Cab Booking App */}
        <div className="project mb-5">
          <h3>Cab Booking App</h3>
          <p>
            A seamless cab booking application that allows users to book rides
            instantly. Features include real-time tracking, fare estimation,
            multiple payment options, and ride history. Designed for ease of use
            and efficiency, this app ensures a smooth user experience for both
            passengers and drivers.
          </p>
          <div className="row gy-4">
            <div className="col-lg-12 text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/projects/cab-booking/cab_booking_app.png`}
                alt="Cab Booking App Screens"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Zenga TV App */}
        <div className="project mb-5">
          <h3>OTT Entertainment App</h3>
          <p>
            A feature-rich OTT streaming app that provides users access to a
            vast collection of movies, TV shows, and live television channels.
            Equipped with high-quality streaming, personalized recommendations,
            and an intuitive interface, this app ensures a premium viewing
            experience for entertainment lovers.
          </p>
          <div className="row gy-4">
            <div className="col-lg-12 text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/projects/ott_app/ottapp.png`}
                alt="OTT App Screens"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Baker App */}
        <div className="project mb-5">
          <h3>Baker App</h3>
          <p>
            An e-commerce bakery app designed for online ordering of fresh
            bakery products. Users can browse a variety of cakes, pastries, and
            baked goods, customize orders, schedule deliveries, and make secure
            payments. The app ensures a delightful and convenient shopping
            experience for bakery lovers.
          </p>
          <div className="row gy-4">
            <div className="col-lg-12 text-center">
              <img
                 src={`${process.env.PUBLIC_URL}/assets/projects/baker_app/bakerapp.png`}
                alt="Baker App Screens"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Doctor App */}
        <div className="project mb-5 p-4">
          <h3>Doctor Appointment App</h3>
          <p>
            A healthcare application that connects patients with doctors for
            online consultations and appointment scheduling. The app includes
            features like video consultations, appointment booking, medical
            history tracking, and prescription management, providing users with
            a convenient way to access healthcare services.
          </p>
          {/* Image Container with Background */}
          <div
            className="row gy-4 justify-content-center p-4"
            style={{ marginTop: "20px", backgroundColor: "#94b1f3", borderRadius: "10px" }}
          >
            <div className="col-lg-4 col-md-6 text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/projects/doctor_app/doctor1.png`}
                alt="Doctor App Screen 1"
                className="img-fluid p-2 bg-white shadow rounded"
              />
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/projects/doctor_app/doctor2.png`}
                alt="Doctor App Screen 2"
                className="img-fluid p-2 bg-white shadow rounded"
              />
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/projects/doctor_app/doctor3.png`}
                alt="Doctor App Screen 3"
                className="img-fluid p-2 bg-white shadow rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
