import React from "react";
import heroBanner from "../../../assets/images/hero-banner.png";
const Flyer = () => {
  return (
    <div className="relative">
      <img src={heroBanner} alt="" className="mx-auto w-[80%] mt-12" />
      <button className="bg-white md:w-60  md:h-12  text-pri md:hover:bg-pri md:hover:text-white uppercase font-bold text-lg invisible md:absolute md:bottom-0 md:right-[10%] sm:visible md:visible">
        Shop Now
      </button>
    </div>
  );
};

export default Flyer;
