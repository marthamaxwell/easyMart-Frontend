import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faNairaSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import heart from "../../../assets/svg/heart.svg";

const ProductCard = ({ miles }) => {
  const ratingStars = () => {
    const stars = [];
    for (let i = 0; i < miles.rating; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          className="text-sm text-orange-600"
        />
      );
    }
    return stars;
  };
  return (
    <div class="  ">
      <Link to={`singleProduct/${miles._id}`}>
        <div class="bg-card rounded-lg w-[220px] h-[340px] p-3 relative mt-4 hover:translate-y-2 hover:drop-shadow-lg">
          <img src={miles.image} className=" mx-auto rounded-md h-52 mb-4" />
          <div className="">
            <p className="absolute top-4 bg-sm w-[80px] text-center rounded-2xl text-pri font-normal text-base p-[0.5px] ml-1">
              Popular{" "}
            </p>
            <span className="">
              <FontAwesomeIcon
                icon={faHeart}
                className="h-4 absolute right-[7%] top-6 font-bold text-white"
              />
            </span>

            <h4 className="">{miles.title} </h4>
            <p className="text-pri font-semibold">
              {/* <FontAwesomeIcon className="b" icon={faNairaSign} /> */}
              {miles.price.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}{" "}
            </p>
            <p className="">
              {miles.rating}
              {ratingStars()}
              <span class="float-right ">
                <FontAwesomeIcon className="block ml-8" icon={faCartShopping} />
                Add to cart
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
