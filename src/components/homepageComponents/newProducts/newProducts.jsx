import React, { useEffect, useState } from "react";

import NewProductCard from "./newProductsCard";

import axios from "axios";

const NewProducts = () => {
  const [newData, setNewData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/new", {
        withCredentials: true,
      });
      const products = await response.data.product;
      setNewData(products);
      console.log("popular data", newData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full bg-pri pb-8 ">
      <div className=" flex flex-wrap justify-center md:justify-between w-[80%] mx-auto  ">
        {newData.slice(0, 4).map((products) => (
          <NewProductCard key={products?.id} miles={products} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
