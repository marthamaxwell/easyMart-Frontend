import React from "react";

const New = () => {
  return (
    <div className="flex flex-wrap justify-between mt-8 w-full mx-auto bg-pri p-4">
      <h3 className="text-4xl font-bold text-white ml-8 max-sm:mb-4">
        New Products
      </h3>
      <button className="bg-white w-40 mr-8 h-8 text-pri rounded hover:bg-slate-100">
        View all
      </button>
    </div>
  );
};

export default New;
