import React, { useEffect, useState } from "react";
import SpecialOfferCard from "./specialOffersCard";
import axios from "axios";

const SpecialOffer = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://easymart-backend-946x.onrender.com"
      );
      const products = await response.json();
      setProductData(products);
      console.log(products);
    } catch (error) {
      console.error("not found", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex w-11/12 mx-auto max-sm:flex-wrap">
      {productData?.slice(0, 4).map((products) => (
        <SpecialOfferCard key={products?.id} miles={products} />
      ))}
    </div>
  );
};

export default SpecialOffer;
