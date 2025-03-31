import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to reach out for collaborations, job opportunities, or just to say hello!</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="info-wrap">

              {/* Address */}
              <div className="info-item d-flex align-items-center justify-content-center gap-3" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-wrapper">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Gurugram, Haryana, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="info-item d-flex align-items-center justify-content-center gap-3" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-wrapper">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h3>Call Me</h3>
                  <p><a href="tel:+918287163139">+91-8287163139</a></p>
                </div>
              </div>

              {/* Email */}
              <div className="info-item d-flex align-items-center justify-content-center gap-3" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-wrapper">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h3>Email Me</h3>
                  <p><a href="mailto:amit4app@gmail.com">amit4app@gmail.com</a></p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13913.679706503423!2d77.0907!3d28.4928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzM0LjEiTiA3N8KwMDUnMjcuMSJF!5e0!3m2!1sen!2sin!4v1711799076941!5m2!1sen!2sin"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: "300px", borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media Links */}
              <div className="social-links mt-4">
                <a href="https://linkedin.com/in/amitabh-sharma-6b56a1120" target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="bi bi-github"></i>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
