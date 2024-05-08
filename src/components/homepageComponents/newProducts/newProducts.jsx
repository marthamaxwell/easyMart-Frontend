import React, { useEffect, useState } from "react";

import NewProductCard from "./newProductsCard";

import axios from "axios";

const NewProducts = () => {
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://easymart-backend-946x.onrender.com/product/new",
        {
          withCredentials: true,
        }
      );
      const products = await response.data.product;
      setNewData(products);
      setLoading(false);
      // console.log("popular data", newData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-24 w-24 border-3 border-t-4 border-b-4 border-orange-400"></div>
        </div>
      ) : (
        <div className="w-full bg-pri pb-8 ">
          <div className=" flex flex-wrap justify-center md:justify-between w-[80%] mx-auto  ">
            {newData.slice(0, 4).map((products) => (
              <NewProductCard key={products?.id} miles={products} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProducts;
