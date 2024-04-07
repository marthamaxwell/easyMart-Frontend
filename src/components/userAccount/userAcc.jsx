import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBell,
  faGear,
  faHeart,
  faUser,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

const UserAcc = () => {
  return (
    <div className="flex p-5">
      <div className="bg-red-700 h-80 w-60">
        <ul className="flex flex-col gap-3 bg-white w-40 mx-auto">
          <li>
            <FontAwesomeIcon icon={faUser} />
            Profile
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} />
            My Wishlist
          </li>
          <li>
            <FontAwesomeIcon icon={faBagShopping} />
            My orders
          </li>
          <li>
            <FontAwesomeIcon icon={faUserXmark} />
            Delete Account
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
            Notification
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} />
            Account Settings
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex">
          <li>Personal Details</li>
          <li>Change Password</li>
          <li>Shipping Adress</li>
        </ul>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <h3>Ruth Ella</h3>
          <p>Lorem lorem</p>
          <p>lorem</p>
        </div>
      </div>
      <form action="">
        <div>
          <label htmlFor="">Full name</label>
          <input type="text" placeholder="full name" />
          <div>
            <label htmlFor="">Phone number</label>
            <input type="text" placeholder="phone number" />
          </div>
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input type="text" placeholder="full name" />
        </div>
      </form>
    </div>
  );
};

export default UserAcc;
