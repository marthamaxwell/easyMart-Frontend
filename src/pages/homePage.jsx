import React from "react";
import Header from "../components/header/header";
import Flyer from "../components/homepageComponents/flyer";
import PopularProduct from "../components/homepageComponents/popularProduct";
import Products from "../components/homepageComponents/products";
import NewProducts from "../components/homepageComponents/newProducts";
import New from "../components/homepageComponents/new";

const HomePage = () => {
  return (
    <div>
      <Flyer />
      <PopularProduct />
      <Products />
      <New />
      <NewProducts />
    </div>
  );
};

export default HomePage;
