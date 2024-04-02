import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const Navbars = ({ OpenMenu, Open }) => {
  return (
    <div
      className={
        Open
          ? "max-sm:flex flex-col hidden items-center absolute h-full justify-center inset-0 left-1/4  bg-pri"
          : "hidden"
      }
    >
      <nav className="">
        <FontAwesomeIcon icon={faXmark} onClick={OpenMenu} />
        <Link to={""} className="">
          <div className="">
            <FontAwesomeIcon
              icon={faUser}
              className="h-7 absolute -ml-9 mt-2 text-nav"
            />

            <ul>
              <li className="text-log">Login</li>
              <li className="text-nav">Account</li>
            </ul>
          </div>
        </Link>
        <Link to={""}>
          <div className="">
            {" "}
            <FontAwesomeIcon
              className="h-7 absolute -ml-9 mt-2 text-nav"
              icon={faHeart}
            />
            <ul>
              <li className="text-nav">Favourite</li>
              <li className="text-nav">List</li>
            </ul>
          </div>
        </Link>
        <Link to={""}>
          <div className=" flex ">
            <FontAwesomeIcon
              className="h-7 absolute -ml-10 mt-2 text-nav"
              icon={faCartShopping}
            />

            <ul>
              <li className="text-nav">Total</li>
              <li className="text-nav">0NGN</li>
            </ul>
            <div className="w-5 h-5 flex justify-center bg-red-700 text-white text-sm rounded-xl -ml-16 z-10 ">
              0
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbars;
