//product context...
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://easymart-backend-946x.onrender.com/product/getProducts",
        {
          withCredentials: true,
        }
      );

      const productData = response.data.getProducts;

      //shuffle the array to display product randomly and not orderly

      setProduct(productData);
      console.log("setproduct=", product);
      console.log("product=", productData);
      console.log("resproduct=", response.data);
    } catch (error) {
      console.log("Error:", error.response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
