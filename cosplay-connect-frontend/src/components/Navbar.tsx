import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-indigo-600">
          CosplayConnect
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 items-center">
          <li>
            <a
              href="#how-it-works"
              className="hover:text-indigo-600 transition"
            >
              How It Works
            </a>
          </li>
          <li>
            <a href="#feedback" className="hover:text-indigo-600 transition">
              Feedback
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Join Beta
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md">
          <li className="p-4 border-b">
            <a href="#how-it-works" className="hover:text-indigo-600">
              How It Works
            </a>
          </li>
          <li className="p-4 border-b">
            <a href="#feedback" className="hover:text-indigo-600">
              Feedback
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md block text-center hover:bg-indigo-700 transition"
            >
              Join Beta
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
