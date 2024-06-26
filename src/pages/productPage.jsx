import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faNairaSign } from "@fortawesome/free-solid-svg-icons";
import TheFooter from "../components/footer/2ndfooter";
import { useCart } from "react-use-cart";

const ProductsPage = () => {
  const { addItem } = useCart();
  const { productId } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://easymart-backend-946x.onrender.com/product/${productId}`
        );
        const products = response.data.product;
        setSingleProduct(products);
        console.log("my products", products);
        console.log("my product", singleProduct);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="products mt-5">
      {/*  product image section*/}
      <div className="  mx-auto p-8 flex flex-col md:flex-row gap-24 w-screen md:w-[80vw] mb-5">
        <img
          src={singleProduct.image}
          alt="Product"
          className="w-[30vw] mx-auto rounded-xl"
        />
        {/*  checkout details section */}
        <div className="flex flex-col gap-6 px-2 w-auto text-left">
          <h2 className=" text-3xl font-semibold text-gray-700 text-left text-wrap">
            {singleProduct.title}
          </h2>
          <hr />
          <h1 className="text-2xl font-bold text-orange-500">
            {parseFloat(singleProduct.price).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </h1>
          <s className="-mt-2 font-semibold text-gray-500">NGN 4,000</s>
          <hr />
          {/* <section className=" flex gap-6">
            <label className="text-gray-500">Quantity</label> */}
          {/* This is the quantity selection section */}
          {/* <div className="flex gap-0 shadow-lg ">
              <button
                className="w-8 rounded-l-lg text-center py-1 px-1 text-gray-500 bg-gray-100 hover:bg-gray-300"
                onClick={() => {
                  quantity > 1 && setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <p className="w-8  text-center  py-1 px-1 text-gray-500 bg-gray-100">
                {quantity}
              </p>
              <button
                className="w-8 rounded-r-lg text-center py-1 px-1 text-gray-500 bg-gray-100 hover:bg-gray-300"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
          </section> */}
          <div className=" bg-orange-200 w-fit py-1 px-2 md:py-3 md:px-5 rounded-xl">
            <p>Price excludes shipping fee</p>
          </div>
          <div className=" bg-orange-200 w-fit py-1 px-2 md:py-3 md:px-5 rounded-xl">
            <p>
              Coupons available for purchases above{" "}
              {/* <FontAwesomeIcon className="b" icon={faNairaSign} /> */}
              NGN100,000
            </p>
          </div>
          <div className="w-full h-16 rounded-xl hover:cursor-pointer hover:bg-[rgba(300,136,49,0.9)] bg-[rgba(255,136,49,1)] flex items-center text-center">
            <Link
              className=" w-full  m-auto font-semibold text-2xl flex justify-center text-white"
              onClick={() => addItem(singleProduct)}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <p className="ml-2">Add to cart</p>
            </Link>
          </div>
        </div>
      </div>
      {/**this is the detail section */}
      <TheFooter />
    </div>
  );
};

export default ProductsPage;
