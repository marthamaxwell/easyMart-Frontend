import React from "react";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  return (
    <div className="flex flex-wrap justify-between mt-8 w-[75%] mx-auto ">
      <h3 className="text-2xl font-bold mb-3 uppercase">Popular Product</h3>
      <Link to={"/allproducts"}>
        <button className="bg-pri w-32  h-12 text-white rounded-lg hover:bg-orange-600   text-lg">
          View all
        </button>
      </Link>
    </div>
  );
};

export default PopularProduct;
