import React, { useEffect, useState } from "react";

import NewProductCard from "./newProductsCard";

import axios from "axios";

const NewProducts = () => {
  const [newData, setNewData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://easymart-backend-946x.onrender.com/product/new"
      );
      const products = await response.json();
      setNewData(products);
      console.log(products);
    } catch (error) {
      console.error("not found", error.message);
    }

    useEffect(() => {
      fetchData();
    }, []);
  };
  return (
    <div className="flex max-sm:flex-wrap">
      {newData?.map((products) => (
        <NewProductCard key={products?.id} miles={products} />
      ))}
    </div>
  );
};

export default NewProducts;
