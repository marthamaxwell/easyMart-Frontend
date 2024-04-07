import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbars = ({ OpenMenu, Open }) => {
  return (
    <div className="">
      <nav
        className={
          Open
            ? "flex flex-col items-center fixed h-screen justify-evenely inset-0 left-1/4  bg-pri z-10"
            : "hidden"
        }
      >
        <FontAwesomeIcon icon={faXmark} onClick={OpenMenu} className="pt-6" />
        <ul className="mt-3">
          <li className="text-nav mb-3">Phone</li>
          <li className="text-nav mb-3">Computer & Accessories</li>
          <li className="text-nav mb-3">Television</li>
          <li className="text-nav mb-3">Clothes</li>
          <li className="text-nav mb-3">Shoes</li>
          <li className="text-nav mb-3">Camera & Headset</li>
          <li className="text-nav mb-3">Smartwatch</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbars;
