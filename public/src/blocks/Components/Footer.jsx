import React from "react";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#1a1c1a] font-hamston text-gray-300 py-6 px-4 border-t-2 border-[#ECDFCC]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Kiri */}
        <div className="text-xl font-extrabold">
          Dastindgg
        </div>

        {/* Tengah: Sosial Media */}
        <div className="flex space-x-6 text-lg">
          <a href="https://instagram.com/dastindgg_" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="hover:text-white transition" />
          </a>
          <a href="mailto:dastin@example.com">
            <FiMail className="hover:text-white transition" />
          </a>
          <a href="tel:+6281234567890">
            <FiPhone className="hover:text-white transition" />
          </a>
        </div>

        {/* Kanan */}
        <div className="text-sm text-right">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
