import React from "react";

const Special = () => {
  return (
    <div className="flex flex-wrap justify-between mt-8 w-[75%] mx-auto ">
      <h3 className="text-2xl font-semibold  mb-3 ">
        <span className="uppercase font-bold"> Special Offer |</span> Up to 60%
        off
      </h3>
      <button className="bg-pri w-32  h-12 text-white rounded-lg hover:bg-orange-600   text-lg">
        View all
      </button>
    </div>
  );
};

export default Special;
