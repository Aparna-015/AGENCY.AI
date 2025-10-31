import React from 'react'
import assets from "../assets/assets.js";

const Navbar = ({theme}) => {
  return (
    <div className="flex items-center justify-between px-4 bg-white font-medium text-white sm:px-12 lg:px-24 xl:py-4 sticky top-0 z-20 backdrop-blur-xl">
        <img src={theme=== 'dark'? assets.logo_dark : assets.logo}   className="w-32 sm:w-40"/>

    </div>
  )
}

export default Navbar