import React from "react";

const PopularProduct = () => {
  return (
    <div className="flex flex-wrap justify-between mt-8 w-11/12 mx-auto ">
      <h3 className="text-2xl font-bold mb-3">Popular Product</h3>
      <button className="bg-pri w-40  h-8 text-white rounded hover:bg-orange-600">
        View all
      </button>
    </div>
  );
};

export default PopularProduct;
