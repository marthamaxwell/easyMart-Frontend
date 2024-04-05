import React, { useEffect, useState } from "react";
import SpecialOfferCard from "./specialOffersCard";

const SpecialOffer = () => {
  const [productData, setProductData] = useState([]);
  console.log("products coming from state =>", productData);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    console.log("the data response =>", response);

    // // the full data

    const products = await response.json();
    setProductData(products);
    console.log("the products =>", products);
  };

  //the use effect hook

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
