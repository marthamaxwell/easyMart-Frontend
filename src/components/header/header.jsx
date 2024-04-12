import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import arrowIcon from "../../assets/svg/arrowIcon.svg";
import downIcon from "../../assets/svg/downicon.svg";
import Navbars from "../../components/header/dropdown.jsx";

const Header = () => {
  const [isExpanded, SetIsExpanded] = useState(false);
  const showarrow = isExpanded;
  const showdown = !isExpanded;
  const [isExpand, SetIsExpand] = useState(false);
  const expand = isExpand;
  const notexpand = !isExpand;
  const [isOpen, setisOpen] = useState(false);
  const open = isOpen;
  const notopen = !isOpen;
  const [isOpened, setisOpened] = useState(false);
  const opened = isOpened;
  const notOpened = !isOpened;
  const [isClose, setisClose] = useState(false);
  const close = !isClose;
  const notClose = isClose;
  const [isClosed, setisClosed] = useState(false);
  const closed = !isClosed;
  const notClosed = isClosed;
  const [isShow, setisShow] = useState(false);
  const show = !isShow;
  const notShow = isShow;
  const [Open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!Open);
  };

  return (
    <div className="">
      <header className="flex md: flex-wrap md:justify-center md:gap-8 md:h-30  relative md:p-4 justify-center p-5 ">
        <div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={OpenMenu}
            className=" lg:hidden absolute right-[5%] mt-2 text-nav"
          />
        </div>
        <div className="flex ">
          <FontAwesomeIcon
            className="text-pri mt-2 mr-[2px]"
            icon={faCartShopping}
          />
          <h1 className="text-nav font-bold text-lg mb-2  md:text-2xl">
            Easy
            <span className="text-pri inline-block font-extrabold">.</span>
            Mart
          </h1>
        </div>
        <div className="md: mt-2 flex">
          <input
            className="invisible  bg-white text-nav border-2 rounded-lg outline-none relative indent-2 md:w-96 md:h-8 md:relative md:visible :"
            type="text"
            placeholder="Search"
          />
          <Link>
            <FontAwesomeIcon
              className="invisible text-pri md:-ml-5 md:absolute  md:visible md:mt-2"
              icon={faMagnifyingGlass}
            />
          </Link>
        </div>
        <nav className=" md:flex md:gap-16  ">
          <Link to={"/login"} className="">
            <div className="md:flex md:flex-wrap md:gap-1">
              <FontAwesomeIcon
                icon={faUser}
                className="md:h-7 md:mt-3  md:text-nav "
              />

              <ul className="">
                <li className="text-log hidden md:block ">Login</li>
                <li className="text-nav hidden md:block">Account</li>
              </ul>
            </div>
          </Link>
          <Link to={"#"}>
            <div className=" md:flex md:flex-wrap md:gap-1">
              {" "}
              <FontAwesomeIcon
                className="md:h-7 md:mt-3  md:text-nav"
                icon={faHeart}
              />
              <ul>
                <li className="text-nav hidden md:block">Favourite</li>
                <li className="text-nav hidden md:block">List</li>
              </ul>
            </div>
          </Link>
          <Link to={"#"}>
            <div className=" md:flex md:gap-1 ">
              <FontAwesomeIcon
                className="md:h-7 md:mt-3  md:text-nav"
                icon={faCartShopping}
              />

              <ul className="">
                <li className="text-nav hidden md:block md:ml-1">Total</li>
                <li className="text-nav hidden md:block">0NGN</li>
              </ul>
              <div className="w-5 h-5 flex justify-center bg-red-700 text-white text-sm rounded-xl md:-ml-16 md:z-10 ">
                0
              </div>
            </div>
          </Link>
        </nav>
      </header>
      <Navbars OpenMenu={OpenMenu} Open={Open} />
      <div>
        <ul className="md: flex md:justify-evenly md:flex-wrap  invisible md:visible md:text-base  md:p-4 ">
          <li className="text-nav flex">
            All Categories
            <img
              src={arrowIcon}
              alt=""
              className="md:w-5 md:ml-1 md:mt-1  font-light"
            />
          </li>
          <li className="text-nav flex">
            Phone
            <img
              src={arrowIcon}
              alt=""
              className="md:w-5 md:ml-1 md:mt-1  font-light"
            />
          </li>
          <li className="text-nav flex">
            Television
            <img
              src={arrowIcon}
              alt=""
              className="md:w-5 md:ml-1 md:mt-1  font-light"
            />
          </li>
          <li className="text-nav flex">
            Clothes
            <img
              src={arrowIcon}
              alt=""
              className="md:w-5 md:ml-1 md:mt-1  font-light"
            />
          </li>
          <li className="text-nav flex">
            Shoes
            <img
              src={arrowIcon}
              alt=""
              className="md:w-5 md:ml-1 md:mt-1  font-light"
            />
          </li>
          <li className="text-nav flex">
            Camera & Headset
            <img
              src={arrowIcon}
              alt=""
              className="md:w-5 md:ml-1 md:mt-1  font-light"
            />
          </li>
          <li className="text-nav flex">
            Smartwatch
            <img
              src={arrowIcon}
              alt=""
              className="md:w-5 md:ml-1 md:mt-1  font-light"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
