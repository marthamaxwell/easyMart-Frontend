import React from "react";
import { Link } from "react-router-dom";
const Collect = () => {
  return (
    <div className="flex flex-wrap justify-between mt-8 w-[75%] mx-auto ">
      <h3 className="text-2xl font-bold mb-3 uppercase">
        Shop from our Collection
      </h3>
      <Link to={"/allproducts"}>
        <button className="bg-pri w-40  h-10 text-white rounded-lg hover:bg-orange-600 uppercase font-semibold text-lg">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default Collect;
