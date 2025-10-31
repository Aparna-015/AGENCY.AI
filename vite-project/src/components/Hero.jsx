import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col items-center  space-y-8 py-50 px-4">
      <div className="flex items-center">
        <img src={assets.group_profile} />
        <p>Trusted by 10k people</p>
      </div>

      <h1 className="text-6xl">
        Turning imagination into <span className="text-blue-600">digital</span>{" "}
      </h1>
    </div>
  );
};

export default Hero;
