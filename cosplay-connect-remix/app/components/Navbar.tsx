import React, { useState, useEffect } from "react";
import { Link, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { href: "#how-it-works", label: "How It Works", type: "scroll" },
    { href: "#feedback", label: "Feedback", type: "scroll" },
    { 
      href: "/create-profile", 
      label: "Join Beta", 
      type: "link",
      className: "bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
    }
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // 4rem
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMenuOpen(false);
    }
  };

  const renderNavItem = (item: typeof navigationItems[0]) => {
    if (item.type === "scroll") {
      return (
        <a
          href={item.href}
          onClick={(e) => handleScrollClick(e, item.href)}
          className={`hover:text-indigo-600 transition ${item.className || ""}`}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link
        to={item.href}
        prefetch="intent"
        className={item.className}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" prefetch="intent" className="text-2xl font-bold text-indigo-600">
          CosplayConnect
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700 items-center">
          {navigationItems.map((item) => (
            <li key={item.href}>
              {renderNavItem(item)}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 
                   focus:ring-indigo-500 rounded-md p-1 transition-transform
                   hover:scale-110"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="divide-y divide-gray-100">
          {navigationItems.map((item) => (
            <li key={item.href} className="p-4">
              {renderNavItem(item)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;