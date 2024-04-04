import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import heart from "../../assets/svg/heart.svg";
import PopularProduct from "./popularProduct";

const NewProductCard = ({ miles }) => {
  console.log("props from products =>", miles);
  return (
    <div class="w-full h-[340px]  bg-pri pl-12 ">
      <Link to={`product/${miles.id}`}>
        <div class="bg-card rounded-lg w-[220px] h-[300px] p-3 relative mt-4">
          <img src={miles.image} className="w-60 mx-auto h-40 mb-4" />
          <div className="">
            <p className="absolute top-8 bg-sm w-[80px] text-center rounded-xl text-pri font-normal text-base p-1">
              Popular{" "}
            </p>
            <span className="">
              <img
                src={heart}
                className="h-4 absolute right-[5%] top-[15%] font-"
              />
            </span>

            <h4 className="mb-2">{miles.title} </h4>
            <p className="block">
              {miles.price} {miles.rating.count}
              <span class="float-right ">
                <FontAwesomeIcon className="block" icon={faCartShopping} />
                Add to cart
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewProductCard;
