import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import frame from "../../assets/images/Frame 51.png";
import frame1 from "../../assets/images/Frame 52.png";
import frame2 from "../../assets/images/1.png";
import frame3 from "../../assets/images/2.png";
import frame4 from "../../assets/images/3.png";
import frame5 from "../../assets/images/4.png";

const Footer = () => {
  return (
    <div className=" flex flex-wrap gap-3 justify-around bg-dark h-500px  md:h-[450px] p-10 sm:p-8 md:pt-8 md:p-4 relative  md:flex">
      <div className="text-white mt-4 md:mt-0">
        <h3 className="uppercase font-bold mb-3">About</h3>
        <ul className="flex flex-col gap-3">
          <li className="">About Us </li>
          <li>Our Services </li>
          <li>Conditions & Terms </li>
          <li>Flash Sales </li>
        </ul>
      </div>
      <div className="text-white mt-4 md:mt-0">
        {" "}
        <h3 className="uppercase font-bold mb-3">Need Help?</h3>
        <ul className="flex flex-col gap-3">
          <li>Chat with us </li>
          <li>Disputes & Report </li>
          <li>Buyer Protection </li>
          <li>Integrity Compliance </li>
        </ul>
      </div>

      <div className="text-white mt-4 md:mt-0 ">
        <h3 className="uppercase font-bold mb-3">Follow Us</h3>
        <ul className="flex flex-col  gap-3">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
        </ul>
      </div>
      <div className="text-white uppercase font-bold mt-4 md:mt-0">
        <h3 className="mb-3">DOWNLOAD APP</h3>
        <img className="mb-3" src={frame} alt="" />
        <img src={frame1} alt="" />
      </div>
      <div className="text-white md:absolute top-[65%] md:left-[8%] mt-4 md:mt-0">
        <h3 className="uppercase">payment methods and delivery patterns</h3>
        <div className="flex flex-wrap gap-4 mt-3">
          <img src={frame2} alt="" />
          <img src={frame3} alt="" />
          <img src={frame4} alt="" />
          <img src={frame5} alt="" />
        </div>
      </div>
      <p className="text-white md:absolute md:bottom-[2%] md:left-[40%] mt-4 md:mt-0">
        copyright&copy;2024 EazyMart.com. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
