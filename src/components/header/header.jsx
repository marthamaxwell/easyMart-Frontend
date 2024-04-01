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

  return (
    <header className="container mx-auto mx-wd-md bg-white flex justify-evenly relative h-40 z-10 drop-shadow-lg max-sm:flex-col max-sm:pl-6 max-sm:gap-5 p-6 overflow-hidden max-sm:w-fu">
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className=" max-sm:absolute max-sm:top-14 left-3/4 text-nav lg:hidden"
        />
      </div>
      <div className="flex mr-20">
        <FontAwesomeIcon
          className="text-pri mt-[7px] mr-1 max-sm:ml-10"
          icon={faCartShopping}
        />
        <h1 className="text-nav font-bold text-lg ">
          Easy
          <span className="text-pri inline-block font-extrabold">.</span>
          Mart
        </h1>
      </div>
      <div>
        <input
          className="w-96 h-8 border-2 border-log outline-none rounded-lg bg-white mr-24 relative px-2 text-sm text-nav max-sm:w-4/5 max-sm:ml-10"
          type="text"
          placeholder="Search"
        />
        <Link>
          <FontAwesomeIcon
            className="absolute text-pri -ml-32 mt-2 max-sm:left-full max-sm:bottom-9"
            icon={faMagnifyingGlass}
          />
        </Link>
      </div>
      <nav className="flex gap-32 max-sm:flex-row max-sm:hidden">
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
      <div className="absolute bottom-4 flex gap-8 max-sm:hidden">
        <div className="text-nav">All Categories</div>
        <div
          onClick={() => SetIsExpanded(!isExpanded)}
          className="mr-3 text-nav flex cursor-pointer"
        >
          Phone{" "}
          {showarrow && (
            <img src={downIcon} alt="" className=" w-4 ml-1 font-light" />
          )}
          {showdown && <img src={arrowIcon} alt="" className=" w-6 ml-1  " />}
          {isExpanded && (
            <ul className="bg-white absolute top-6 p-2 border-[1px] shadow-sm ">
              <li className="hover:bg-pri p-2 cursor-pointer ">
                Mobile Phones
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Phone Brands
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Mobile Phone Accessories
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Smartphones
              </li>
            </ul>
          )}
        </div>
        <div
          onClick={() => setisOpen(!isOpen)}
          className="text-nav flex cursor-pointer"
        >
          Computers&Accessories{" "}
          {open && (
            <img src={downIcon} alt="" className=" w-4 ml-1 font-light" />
          )}
          {notopen && <img src={arrowIcon} alt="" className=" w-6 ml-1  " />}
          {isOpen && (
            <ul className="bg-white absolute top-6 p-2 border-[1px] shadow-sm ">
              <li className="hover:bg-pri p-2 cursor-pointer ">
                Mobile Phones
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Phone Brands
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Mobile Phone Accessories
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Smartphones
              </li>
            </ul>
          )}
        </div>
        <div
          onClick={() => SetIsExpand(!isExpand)}
          className="text-nav flex cursor-pointer"
        >
          Television{" "}
          {expand && (
            <img src={downIcon} alt="" className=" w-4 ml-1 font-light" />
          )}
          {notexpand && <img src={arrowIcon} alt="" className=" w-6 ml-1  " />}
          {isExpand && (
            <ul className="bg-white absolute top-6 p-2 border-[1px] shadow-sm ">
              <li className="hover:bg-pri p-2 cursor-pointer ">
                Mobile Phones
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Phone Brands
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Mobile Phone Accessories
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Smartphones
              </li>
            </ul>
          )}
        </div>
        <div
          onClick={() => setisOpened(!isOpened)}
          className="text-nav flex cursor-pointer"
        >
          Clothes{" "}
          {opened && (
            <img src={downIcon} alt="" className=" w-4 ml-1 font-light" />
          )}
          {notOpened && <img src={arrowIcon} alt="" className=" w-6 ml-1  " />}
          {isOpened && (
            <ul className="bg-white absolute top-6 p-2 border-[1px] shadow-sm ">
              <li className="hover:bg-pri p-2 cursor-pointer ">
                Mobile Phones
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Phone Brands
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Mobile Phone Accessories
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Smartphones
              </li>
            </ul>
          )}
        </div>
        <div
          onClick={() => setisClose(!isClose)}
          className="text-nav flex cursor-pointer"
        >
          Shoes{" "}
          {notClose && (
            <img src={downIcon} alt="" className=" w-4 ml-1 font-light" />
          )}
          {close && <img src={arrowIcon} alt="" className=" w-6 ml-1  " />}
          {isClose && (
            <ul className="bg-white absolute top-6 p-2 border-[1px] shadow-sm ">
              <li className="hover:bg-pri p-2 cursor-pointer ">
                Mobile Phones
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Phone Brands
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Mobile Phone Accessories
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Smartphones
              </li>
            </ul>
          )}
        </div>
        <div
          onClick={() => setisClosed(!isClosed)}
          className="text-nav flex cursor-pointer"
        >
          Camera & Headset{" "}
          {notClosed && (
            <img src={downIcon} alt="" className=" w-4 ml-1 font-light" />
          )}
          {closed && <img src={arrowIcon} alt="" className=" w-6 ml-1  " />}
          {isClosed && (
            <ul className="bg-white absolute top-6 p-2 border-[1px] shadow-sm ">
              <li className="hover:bg-pri p-2 cursor-pointer ">
                Mobile Phones
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Phone Brands
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Mobile Phone Accessories
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Smartphones
              </li>
            </ul>
          )}
        </div>
        <div
          onClick={() => setisShow(!isShow)}
          className="text-nav flex cursor-pointer"
        >
          Smartwatch{" "}
          {notShow && (
            <img src={downIcon} alt="" className=" w-4 ml-1 font-light" />
          )}
          {show && <img src={arrowIcon} alt="" className=" w-6 ml-1  " />}
          {isShow && (
            <ul className="bg-white absolute top-6 p-2 border-[1px] shadow-sm ">
              <li className="hover:bg-pri p-2 cursor-pointer ">
                Mobile Phones
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Phone Brands
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Mobile Phone Accessories
              </li>
              <li className="hover:bg-pri p-2 cursor-pointer">
                Top Smartphones
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
