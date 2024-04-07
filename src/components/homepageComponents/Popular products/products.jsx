import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { Axios } from "axios";

const Products = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    // // the full data

    const products = await response.json();
    setProductData(products);
    // console.log("the products =>", products);
  };

  //the use effect hook

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex w-11/12 mx-auto max-sm:flex-wrap">
      {productData?.slice(0, 4).map((products) => (
        <ProductCard key={products?.id} miles={products} />
      ))}
    </div>
  );
};

export default Products;
