import React from "react";
import {
  FaUserEdit,
  FaSearch,
  FaCalendarCheck,
  FaInstagram,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
          <div id="how-it-works-anchor" className="h-16 -mt-16"></div>
      {/* How It Works Title */}
      <h2
        id="how-it-works"
        className="text-4xl font-extrabold text-gray-800 mb-12"
      >
        How It Works
      </h2>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="w-80 bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-4 text-indigo-600 text-4xl">
            <FaUserEdit />
          </div>
          <h3 className="text-xl font-bold mb-2 text-indigo-600">
            Create Your Profile
          </h3>
          <p className="text-gray-600 font-semibold">
            Showcase your cosplay portfolio or photography work in one place.
          </p>
        </div>

        <div className="w-80 bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-4 text-indigo-600 text-4xl">
            <FaSearch />
          </div>
          <h3 className="text-xl font-bold mb-2 text-indigo-600">Connect</h3>
          <p className="text-gray-600 font-semibold">
            Easily search for cosplayers or photographers that match your style and taste, and message them.
          </p>
        </div>

        <div className="w-80 bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-4 text-indigo-600 text-4xl">
            <FaCalendarCheck />
          </div>
          <h3 className="text-xl font-bold mb-2 text-indigo-600">Book a Shoot</h3>
          <p className="text-gray-600 font-semibold">
            Schedule your photo sessions ahead of conventions with ease!
          </p>
        </div>
      </div>

      {/* Social Media Integration Section */}
      <div className="mt-12 w-80 mx-auto bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-4 text-indigo-600">
          Seamless Social Media Integration
        </h3>
        <p className="text-gray-600 mb-4 font-semibold">
          Link your <strong>Instagram</strong>, <strong>Facebook</strong>, and{" "}
          <strong>Discord</strong> accounts to showcase your portfolio instantly.
          No need to re-upload photos—everything stays connected and up-to-date.
        </p>
        <div className="flex justify-center gap-6 text-indigo-600 text-3xl">
          <FaInstagram />
          <FaFacebook />
          <FaDiscord />
        </div>
      </div>
      <div className="flex justify-center mt-12">
  <a
    href="#signup"
    className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
  >
    Join the Beta
  </a>
</div>
    </section>
  );
};

export default FeaturesSection;
