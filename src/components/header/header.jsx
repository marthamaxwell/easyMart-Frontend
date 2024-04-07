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
    <div className="pt-5 pr-2 ml-3 ">
      <header
        className="md:flex md:justify-evenly md:h-40  md
      :w-11/12 relative md:p-3 "
      >
        <div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={OpenMenu}
            className=" lg:hidden absolute right-[5%] mt-2 text-nav"
          />
        </div>
        <div className="flex j">
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
        <div>
          <input
            className="w-[100%]  bg-white text-nav border-2 rounded-lg outline-none relative indent-1 md:w-96 md:h-8 md:relative :"
            type="text"
            placeholder="Search"
          />
          <Link>
            <FontAwesomeIcon
              className="absolute right-[5%] mt-1 text-pri md:right-[42%]"
              icon={faMagnifyingGlass}
            />
          </Link>
        </div>
        <nav className=" flex gap-20 ">
          <Link to={""} className="">
            <div className="">
              <FontAwesomeIcon
                icon={faUser}
                className=" absolute right-[45%] mt-2  text-nav md:right-[37%] md:h-7 md:mr-3"
              />

              <ul>
                <li className="text-log hidden md:block ">Login</li>
                <li className="text-nav hidden md:block">Account</li>
              </ul>
            </div>
          </Link>
          <Link to={""}>
            <div className="">
              {" "}
              <FontAwesomeIcon
                className=" text-nav absolute right-[35%] mt-2 md:right-[29%] md:h-7 mr-3"
                icon={faHeart}
              />
              <ul>
                <li className="text-nav hidden md:block">Favourite</li>
                <li className="text-nav hidden md:block">List</li>
              </ul>
            </div>
          </Link>
          <Link to={""}>
            <div className=" flex ">
              <FontAwesomeIcon
                className="text-nav absolute right-[25%] mt-2 md:right-[1%] md:mr-3 md:h-7"
                icon={faCartShopping}
              />

              <ul>
                <li className="text-nav hidden md:block">Total</li>
                <li className="text-nav hidden md:block">0NGN</li>
              </ul>
              <div className="w-5 h-5 flex justify-center bg-red-700 text-white text-sm rounded-xl md:-ml-16  ">
                0
              </div>
            </div>
          </Link>
        </nav>

        <Navbars OpenMenu={OpenMenu} Open={Open} />
        <div className="absolute bottom-4 flex flex-wrap gap-10 invisible md:visible md:text-lg">
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
            {notexpand && (
              <img src={arrowIcon} alt="" className=" w-6 ml-1  " />
            )}
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
            {notOpened && (
              <img src={arrowIcon} alt="" className=" w-6 ml-1  " />
            )}
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
    </div>
  );
};

export default Header;
