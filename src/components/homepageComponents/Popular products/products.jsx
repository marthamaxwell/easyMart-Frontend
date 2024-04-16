import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";

const Products = () => {
  const [popularData, setPopularData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://easymart-backend-946x.onrender.com/product/popular",
        {
          withCredentials: true,
        }
      );
      const products = await response.data.product;
      setPopularData(products);
      // console.log("popular data", popularData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex flex-wrap justify-center md:justify-between w-[80%] mx-auto mt-5">
      {popularData.slice(0, 4).map((products) => (
        <ProductCard key={products?.id} miles={products} />
      ))}
    </div>
  );
};

export default Products;
