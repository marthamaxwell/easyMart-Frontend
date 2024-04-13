import React from "react";
import heroBanner from "../../../assets/images/hero-banner.png";
const Flyer = () => {
  return (
    <div className="relative">
      <img src={heroBanner} alt="" className="mx-auto w-[80%] mt-12" />
      <button className="bg-white w-60  h-12  text-pri md:hover:bg-pri md:hover:text-white uppercase font-bold text-lg md:absolute md:bottom-0 md:right-[10%]">
        Shop Now
      </button>
    </div>
  );
};

export default Flyer;
