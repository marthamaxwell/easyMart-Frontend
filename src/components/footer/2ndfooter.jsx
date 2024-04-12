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
    <div className="flex flex-wrap justify-between px-8 py-3 bg-col h-22">
      <div className="flex ">
        <FontAwesomeIcon
          className="text-pri mt-1 mr-[2px]"
          icon={faCartShopping}
        />
        <h1 className="text-nav font-bold text-lg mb-2 md:mb-0 md:text-2xl">
          Easy
          <span className="text-pri inline-block font-extrabold">.</span>
          Mart
        </h1>
      </div>
      <div className="flex flex-col pb-3 ">
        {/* <FontAwesomeIcon icon={faMessage} /> */}
        <h1 className="font-bold text-md text-nav">Email Support</h1>
        <p className="font-bold text-nav">easymart@gmail.com</p>
      </div>
      <div className="pb-3">
        <h1 className="font-bold text-nav">
          Get Notifications on Latest deals
        </h1>
        <p className="font-bold text-nav">
          {" "}
          our best promotions sent to your inbox
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email Address"
          className="border-2 rounded-l border-slate-200 h-8 outline-none indent-2 mt-2 "
        />
        <button className="bg-pri w-40 mr-8 h-8 text-white rounded-r hover:bg-orange-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default TheFooter;
