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
                src="/assets/img/blog/navigation-cover.png" 
                alt="Blog Thumbnail" 
                className="card-img-top rounded"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h3 className="card-title">Navigating the Android Seas with Navigation Component</h3>
                <p className="card-text">
                  Learn how to efficiently manage navigation in Android apps using the Navigation Component.
                </p>
                <a 
                  href="https://medium.com/@amit4app/how-i-built-a-video-upload-feature-that-never-fails-thanks-to-workmanager-67416b8e721a" 
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
                src="/assets/img/blog/work-manager.png" 
                alt="Android Architecture Blog" 
                className="card-img-top rounded"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h3 className="card-title">WorkManager — My New Favorite Android Tool</h3>
                <p className="card-text">
                How I Built a Video Upload Feature That Never Fails — Thanks to WorkManager
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

          {/* Blog Post Card 1 */}
          <div className="col-lg-6">
            <div className="card shadow-sm p-3 mb-4">
              {/* Thumbnail Image */}
              <img 
                src="/assets/img/blog/navigation-cover.png" 
                alt="Blog Thumbnail" 
                className="card-img-top rounded"
                style={{ maxHeight: "350px", objectFit: "cover" }}
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
        </div>
      </div>
    </section>
  );
};

export default Blog;