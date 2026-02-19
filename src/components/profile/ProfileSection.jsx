import React from "react";

const Profile = () => {
  return (
    <section id="profile" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/your-photo.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Subhash</h2>
            <p className="text-gray-600 mb-4">
              I am a computer science student passionate about web development, UI/UX design, and building interactive projects.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="border border-indigo-500 text-indigo-500 px-6 py-2 rounded-lg hover:bg-indigo-50 transition"
              >
                Portfolio
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-gray-600">
              <a href="#" className="hover:text-indigo-500 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                GitHub
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                Twitter
              </a>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">CSS</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
