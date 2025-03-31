import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Work Experience</h2>
        <p>My journey as a Mobile App Developer</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Lead Mobile Developer */}
        <div className="experience-item mb-4">
          <h3>Lead Mobile Developer</h3>
          <p><strong>Duration:</strong> 2019 - Present</p>
          <p>
            Leading mobile development projects, ensuring high-quality and scalable solutions using <strong>React Native, Vue Ionic, and Native Android (Java/Kotlin)</strong>.
          </p>
          <ul>
            <li>Developed and maintained cross-platform mobile applications.</li>
            <li>Deployed apps to **App Store & Play Store**, handling certificates, provisioning profiles, and compliance checks.</li>
            <li>Implemented **CI/CD pipelines** for automated builds and testing.</li>
            <li>Planned and executed **Agile sprints**, working closely with designers and backend teams.</li>
            <li>Integrated **RESTful APIs, Firebase, and third-party SDKs** for enhanced functionality.</li>
          </ul>
        </div>

        {/* Senior Android Developer */}
        <div className="experience-item mb-4">
          <h3>Senior Android Developer</h3>
          <p><strong>Duration:</strong> 2015 - 2019</p>
          <p>
            Specialized in **native Android development**, focusing on performance optimization and user experience.
          </p>
          <ul>
            <li>Built feature-rich Android apps using **Java, Kotlin, MVVM, and Jetpack Components**.</li>
            <li>Led **Play Store deployments**, ensuring compliance with Google policies.</li>
            <li>Automated testing and deployment with **CI/CD workflows**.</li>
            <li>Collaborated with cross-functional teams for **sprint planning and execution**.</li>
            <li>Optimized app performance, reducing load times and memory usage.</li>
          </ul>
        </div>

        {/* Mobile App Developer */}
        <div className="experience-item mb-4">
          <h3>Mobile App Developer</h3>
          <p><strong>Duration:</strong> 2012 - 2015</p>
          <p>
            Worked on multiple mobile projects, learning and implementing **Java, Android SDK, and UI/UX best practices**.
          </p>
          <ul>
            <li>Designed and developed Android apps with smooth UI/UX experiences.</li>
            <li>Integrated third-party APIs and payment gateways.</li>
            <li>Managed app releases and updates on the **Google Play Store**.</li>
            <li>Collaborated with backend teams for API integration.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
