import React from "react";

const CollectionCard = ({ property }) => {
  // console.log("properties:", property);
  return (
    <div className="my-6">
      <div>
        {/* background and img div */}
        <div className="bg-gradient-to-t from-red-500 to-pri w-64 p-5 h-80 rounded-lg">
          <img src={property.image} className="mt-12" alt="" />
        </div>

        {/* label div */}
        <div>
          <p className="text-center p-2">{property.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
