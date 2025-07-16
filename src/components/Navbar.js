import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/icons/first_icon.png" alt="logo" className="w-9 h-9" />
            <Link
              to={"/"}
              style={{ color: "#27ace1" }}
              className="font-bold text-xl"
            >
              Royal Clinic
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <Link to={"/home"} className="hover:text-blue-500">
              الرئيسية
            </Link>
            <Link to={"/services"} className="hover:text-blue-500">
              الخدمات
            </Link>
            <Link to={"/contact"} className="hover:text-blue-500">
              تواصل معنا
            </Link>
          </div>

          {/* Book Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/book-appointment"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              احجز الآن
            </Link>
            <Link
              to={"/signin"}
              className="text-sm text-blue-600 hover:underline"
            >
              تسجيل الدخول
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm font-medium text-gray-700">
          <a href="#home" className="block hover:text-blue-500">
            الرئيسية
          </a>
          <a href="#services" className="block hover:text-blue-500">
            الخدمات
          </a>
          <a href="#about" className="block hover:text-blue-500">
            من نحن
          </a>
          <a href="#contact" className="block hover:text-blue-500">
            تواصل معنا
          </a>
          <Link
            to={"/book-appointment"}
            className="block bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700 transition"
          >
            احجز الآن
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
