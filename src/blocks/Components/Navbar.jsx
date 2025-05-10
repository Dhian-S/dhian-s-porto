import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkBaseClass =
    "cursor-pointer text-[#ECDFCC] hover:text-white transition-colors duration-300";
  const activeClass = "text-white font-bold";

  const navLinks = [
    { name: "Home", to: "Home" },
    { name: "About Me", to: "About" },
    { name: "Software", to: "Software" },
    { name: "Favorite", to: "Favorite" },
    { name: "Photos", to: "Gallery" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <nav className="bg-[#504B38] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Kiri: Nama */}
          <div className="text-2xl font-hero font-bold text-[#ECDFCC]">
            Dastind<span className="text-[#1a1c1a]">gg</span>
          </div>

          {/* Tombol Burger */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Utama */}
          <div className="hidden font-hamston sm:flex space-x-5 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={linkBaseClass}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass={activeClass}
              className="block text-[#ECDFCC] hover:text-white transition-colors duration-300"
              onClick={() => setMenuOpen(false)} // Tutup menu setelah klik
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
