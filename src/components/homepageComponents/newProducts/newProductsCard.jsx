import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faNairaSign,
} from "@fortawesome/free-solid-svg-icons";
import heart from "../../../assets/svg/heart.svg";
import PopularProduct from "../Popular products/popularProduct";

const NewProductCard = ({ miles }) => {
  return (
    <div class="  ">
      <Link to={`product/${miles.id}`}>
        <div class="bg-card rounded-lg w-[220px] h-[340px] p-3 relative mt-4 hover:translate-y-2 hover:drop-shadow-lg">
          <img src={miles.image} className=" mx-auto rounded-md h-52 mb-4" />
          <div className="">
            <p className="absolute top-4 bg-sm w-[80px] text-center rounded-2xl text-pri font-normal text-base p-[0.5px] ml-1">
              New{" "}
            </p>
            <span className="">
              <FontAwesomeIcon
                icon={faHeart}
                className="h-4 absolute right-[7%] top-6 font-bold text-pri"
              />
            </span>

            <h4 className="">{miles.title} </h4>
            <p className="text-pri font-semibold">
              <FontAwesomeIcon className="b" icon={faNairaSign} />
              {miles.price}{" "}
            </p>
            <p className="">
              {miles.rating}
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

export default NewProductCard;
