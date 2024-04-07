import React, { useEffect, useState } from "react";

import NewProductCard from "./newProductsCard";
import PopularProduct from "../Popular products/popularProduct";

const NewProducts = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    // // the full data

    const products = await response.json();
    setProductData(products);
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
