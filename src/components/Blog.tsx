import React from "react";

const Blog: React.FC = () => {
  return (
    <section id="blog" className="blog section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Blog</h2>
        <p>Read my latest articles on mobile app development.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          {/* Blog Post Card 1 */}
          <div className="col-lg-6">
            <div className="card shadow-sm p-3 mb-4">
              {/* Thumbnail Image */}
              <img 
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1709567489275/2fb70563-ea30-419c-8d13-8d06841c7837.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" 
                alt="Blog Thumbnail" 
                className="card-img-top rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h3 className="card-title">Navigating the Android Seas with Navigation Component</h3>
                <p className="card-text">
                  Learn how to efficiently manage navigation in Android apps using the Navigation Component.
                </p>
                <a 
                  href="https://amit4app.hashnode.dev/navigating-the-android-seas-with-navigation-component" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Read on Hashnode
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post Card 2 (New Article) */}
          <div className="col-lg-6">
            <div className="card shadow-sm p-3 mb-4">
              {/* Thumbnail Image */}
              <img 
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1753899980060/a74cd5a2-d0a3-4eab-928d-f18cca78bf3b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" 
                alt="Android Architecture Blog" 
                className="card-img-top rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h3 className="card-title">MVC, MVP, MVVM, Clean & MVI Explained</h3>
                <p className="card-text">
                  A complete guide to Android architecture patterns with diagrams and Kotlin code examples.
                </p>
                <a 
                  href="https://amit4app.hashnode.dev/mvc-mvp-mvvm-clean-and-mvi-explained" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Read on Hashnode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;