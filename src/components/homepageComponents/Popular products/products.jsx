import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";

const Products = () => {
  const [popularData, setPopularData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://easymart-backend-946x.onrender.com/product/popular"
      );
      const products = await response.json();
      setPopularData(products);
      console.log(products);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex w-11/12 mx-auto max-sm:flex-wrap">
      {popularData?.slice(0, 4).map((products) => (
        <ProductCard key={products?.id} miles={products} />
      ))}
    </div>
  );
};

export default Products;
