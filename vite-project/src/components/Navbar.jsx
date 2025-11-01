import React from "react";
import assets from "../assets/assets.js";

const Navbar = ({ theme }) => {
  return (
    <div className="flex items-center justify-between px-4 bg-white font-medium text-white sm:px-12 lg:px-24 xl:py-4 sticky top-0 z-20 backdrop-blur-xl">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
      />

      <div className="space-x-6 text-black font-medium text-lg sm:text-xl lg:text-sm">
        <a href="#" className="sm:hover:border-b-2 border-black">
          Home
        </a>
        <a href="#" className="sm:hover:border-b-2 border-black">
          Service
        </a>
        <a href="#" className="sm:hover:border-b-2 border-black">
          Our work{" "}
        </a>
        <a href="#" className="sm:hover:border-b-2 border-black">
          Contact US{" "}
        </a>
      </div>

      <div>

        <a href="#" className="bg-violet-600 text-white px-3 py-2 rounded-lg sm:px-6 sm:py-3 lg:px-4 lg:py-2 hover:bg-gray-800">
          <img src={assets.arrow_icon} className="inline w-4 sm:w-5 lg:w-4 mr-2" />
          Get a Quote
        </a>
      </div>
    </div>
  );
};

export default Navbar;
