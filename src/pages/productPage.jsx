import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { id } = useParams();

  console.log("the params =>", id);
  const [popularData, setPopularData] = useState();
  console.log("products coming from state =>", popularData);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/popular/${id}`, {
        withCredentials: true,
      });
      const products = await response.data.product;
      setPopularData(products);
      console.log(popularData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default ProductsPage;
