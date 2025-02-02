import React from "react";
import { Link } from "@remix-run/react";
import animeGirl from "~/assets/images/anime-girl.png";

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${animeGirl}), linear-gradient(to bottom right, #4f46e5, #8b5cf6)`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 text-[#fdf7f1]">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
          Welcome to Cosplay Connect
        </h1>
        <p className="text-lg font-semibold mb-6 max-w-md mx-auto">
          Find photographers and cosplayers before or during your next
          convention!
        </p>
        {/* Link to Create Profile */}
        <Link 
          to="/create-profile"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold 
                   hover:bg-indigo-700 hover:scale-105 transition-transform duration-200"
        >
          Join the Beta
        </Link>
      </div>

      {/* Scroll Arrow */}
      <a
        href="#how-it-works-anchor"
        className="absolute bottom-10 text-[#fdf7f1] animate-bounce z-10"
        onClick={(e) => {
          e.preventDefault();
          const targetElement = document.querySelector("#how-it-works-anchor");
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
