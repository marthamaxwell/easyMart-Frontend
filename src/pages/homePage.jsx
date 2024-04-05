import React from "react";
import Header from "../components/header/header";
import Flyer from "../components/homepageComponents/flyer";
import PopularProduct from "../components/homepageComponents/Popular products/popularProduct";
import Products from "../components/homepageComponents/Popular products/products";
import NewProducts from "../components/homepageComponents/newProducts/newProducts";
import New from "../components/homepageComponents/newProducts/new";

import Banner from "../components/homepageComponents/banner";
import Special from "../components/homepageComponents/specialOffer/special";
import SpecialOffer from "../components/homepageComponents/specialOffer/specialOffers";
import Collection from "../components/homepageComponents/collection/collection";

const HomePage = () => {
  return (
    <div>
      <Flyer />
      <PopularProduct />
      <Products />
      <New />
      <NewProducts />
      <Special />
      <SpecialOffer />
      <Banner />
      <Collection />
    </div>
  );
};

export default HomePage;
