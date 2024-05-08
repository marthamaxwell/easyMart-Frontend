import React, { useEffect, useState } from "react";
import SpecialOfferCard from "./specialOffersCard";
import axios from "axios";

const SpecialOffer = () => {
  const [offerData, setOfferData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://easymart-backend-946x.onrender.com/product/offer",
        {
          withCredentials: true,
        }
      );
      const products = await response.data.product;
      setOfferData(products);
      setLoading(false);
      // console.log("popular data", offerData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-24 w-24 border-3 border-t-4 border-b-4 border-orange-400"></div>
        </div>
      ) : (
        <div className=" flex flex-wrap justify-center md:justify-between w-[80%] mx-auto mt-5">
          {offerData.slice(0, 4).map((products) => (
            <SpecialOfferCard key={products?.id} miles={products} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecialOffer;
