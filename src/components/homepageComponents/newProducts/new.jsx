import React from "react";

const New = () => {
  return (
    <div className="flex flex-wrap justify-between mt-8 w-[75%] mx-auto bg-pri py-4">
      <h3 className="text-2xl font-bold mb-3 uppercase text-white">
        New Product
      </h3>
      <button className="bg-white w-32  h-12 text-pri rounded-lg hover:bg-orange-600   text-lg">
        View all
      </button>
    </div>
  );
};

export default New;
