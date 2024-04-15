import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductsPage = () => {
  const { productId } = useParams();

  console.log("the params =>", productId);
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/product/${productId}`
        );
        const products = response.data.product;
        setProduct(products);
        console.log(products);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
};

export default ProductsPage;
