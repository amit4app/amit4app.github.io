import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "Navigating the Android Seas with Navigation Component",
      description:
        "Learn how to efficiently manage navigation in Android apps using the Navigation Component.",
      image: "/assets/blog/navigation-cover.png",
      link: "https://amit4app.hashnode.dev/navigating-the-android-seas-with-navigation-component",
    },
    {
      title: "MVC, MVP, MVVM, Clean & MVI Explained",
      description:
        "A complete guide to Android architecture patterns with diagrams and Kotlin code examples.",
      image: "/assets/blog/android-architectures.png",
      link: "https://amit4app.hashnode.dev/mvc-mvp-mvvm-clean-and-mvi-explained",
    },
    {
      title: "WorkManager — My New Favorite Android Tool",
      description:
        "How I Built a Video Upload Feature That Never Fails — Thanks to WorkManager.",
      image: "/assets/blog/work-manager.png",
      link: "https://medium.com/@amit4app/how-i-built-a-video-upload-feature-that-never-fails-thanks-to-workmanager-67416b8e721a",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Blog</h2>
          <p className="text-gray-300">Read my latest articles on mobile app development.</p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="
                backdrop-blur-xl bg-white/10 border border-white/20 
                rounded-2xl overflow-hidden shadow-xl 
                hover:scale-[1.03] hover:shadow-fuchsia-500/40 
                transition duration-300 cursor-pointer
              "
            >
              {/* Blog Thumbnail */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-5">
                  {post.description}
                </p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block px-5 py-2 rounded-lg text-sm font-semibold 
                    bg-gradient-to-r from-fuchsia-500 to-purple-600 
                    hover:opacity-90 transition text-white
                  "
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
