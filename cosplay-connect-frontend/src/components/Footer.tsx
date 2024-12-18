import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 CosplayConnect. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-indigo-400">
            Contact
          </a>
          <a href="#" className="hover:text-indigo-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
