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
        Turning imagination into <span className="text-blue-600">digital</span>{" "}impact
      </h1>
        <p className="text-center text-lg text-gray-600 max-w-2xl">
        We help you create stunning digital experiences that drive results.
      </p>
      <div className="relative">
        <img src={assets.hero_img} className="w-full max-w-6xl"/>
        <img src={assets.bgImage1} className="absolute -top-60  -right-40 -z-1"/>
        </div>
    </div>
  );    
};

export default Hero;
