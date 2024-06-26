import React from "react";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div className="w-full bg-pri">
      <div className="flex flex-wrap justify-between mt-8 w-[75%] mx-auto py-4">
        <h3 className="text-2xl font-bold text-center uppercase text-white pt-3">
          New Products
        </h3>
        <Link to={"/allproducts"}>
          <button className="bg-white w-32  h-12 text-pri rounded-lg hover:bg-slate-100  text-lg">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default New;
