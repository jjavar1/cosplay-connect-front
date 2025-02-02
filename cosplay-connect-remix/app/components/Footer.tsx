import React from "react";
import { Link } from "@remix-run/react";

const Footer: React.FC = () => {
  const links = [
    { to: "/contact", text: "Contact" },
    { to: "/privacy", text: "Privacy Policy" },
    { to: "/terms", text: "Terms of Service" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} CosplayConnect. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          {links.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              prefetch="intent"
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;