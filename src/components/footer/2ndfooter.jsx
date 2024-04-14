import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const TheFooter = () => {
  return (
    <div className="  bg-col ">
      <div className=" w-[90%]  flex flex-wrap md:justify-between p-5 mx-auto h-60 sm:h-32 md:h-28  ">
        <div className="flex ">
          <FontAwesomeIcon
            className="text-pri mt-[6px] mr-[2px]"
            icon={faCartShopping}
          />
          <h1 className="text-nav font-bold text-md mb-2 md:mb-0 md:text-xl">
            Easy
            <span className="text-pri inline-block font-extrabold">.</span>
            Mart
          </h1>
        </div>

        <div className="flex flex-wrap  gap-3 ">
          <div className="">
            <FontAwesomeIcon
              icon={faMessage}
              className="text-nav h-5 mt-3 invisible md:visible"
            />
          </div>
          <div>
            <h1 className="font-bold text-md text-nav uppercase">
              Email Support
            </h1>
            <p className="text-nav">easymart@gmail.com</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-nav text-md uppercase">
            Get Notifications on Latest deals
          </h1>
          <p className=" text-nav"> our best promotions sent to your inbox</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="border-2 rounded-l-md border-white h-10 outline-none indent-4 mt-2 w-60"
          />
          <button className="bg-pri w-32 mr-8 h-10 text-white rounded-r-md hover:bg-orange-700 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;