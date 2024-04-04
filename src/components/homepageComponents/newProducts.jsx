import React, { useEffect, useState } from "react";

import NewProductCard from "./newProductsCard";
import PopularProduct from "./popularProduct";

const NewProducts = () => {
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
    <div className="flex max-sm:flex-wrap">
      {productData?.slice(0, 4).map((products) => (
        <NewProductCard key={products?.id} miles={products} />
      ))}
    </div>
  );
};

export default NewProducts;
