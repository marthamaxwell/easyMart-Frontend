import React, { useEffect, useState } from "react";
import SpecialOfferCard from "./specialOffersCard";
import axios from "axios";

const SpecialOffer = () => {
  const [offerData, setOfferData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/product/offer", {
        withCredentials: true,
      });
      const products = await response.data.product;
      setOfferData(products);
      console.log("popular data", offerData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex flex-wrap justify-center md:justify-between w-[80%] mx-auto mt-5">
      {offerData.slice(0, 4).map((products) => (
        <SpecialOfferCard key={products?.id} miles={products} />
      ))}
    </div>
  );
};

export default SpecialOffer;
