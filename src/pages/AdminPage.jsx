import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [productName, setProductName] = useState("");

  const [rating, setRating] = useState();
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://easymart-backend-946x.onrender.com/product/createProduct",
        {
          title: productName,
          rating: rating,
          price: price,
          image: image,
          category: category,
        }
      )
      .then((res) => {
        console.log("the product added response => ", res);
        setProductName("");
        setRating("");
        setPrice("");
        setImage("");
        setCategory("");
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <Link to={"/"}>
        <div className="flex justify-end w-[50%] mx-auto p-8 ">
          <FontAwesomeIcon
            className="text-pri mt-2 mr-[2px]"
            icon={faCartShopping}
          />
          <h1 className="text-nav font-bold text-lg mb-2  md:text-2xl">
            Easy
            <span className="text-pri inline-block font-extrabold">.</span>
            Mart
          </h1>
        </div>
      </Link>
      <div className="bg-pri w-[50vw] pb-20 ml-auto self-center mr-auto  p-4 rounded-md">
        {/*form login section */}
        <form
          action=""
          className="mt-2 flex flex-col w-[100%]"
          onSubmit={handleSubmit}
        >
          <div className=" flex flex-col">
            <span className="text-2xl font-bold">Welcome onboard Admin🖐 </span>
            <span className="text-lg font-semi-bold mt-2 w-96">
              Wanna add some products?😃
            </span>
          </div>
          {/*this is the input field */}
          <div className="flex flex-col  gap-2 mt-7 w-[100%]">
            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Product Name"
                required
                className="w-[100%] p-2 outline-none "
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Image Link"
                required
                className="w-[100%] p-2 outline-none "
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <select
                name=""
                id=""
                className="w-[100%] p-2 text-slate-400 capitalize"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={null}>categories</option>
                <option value="computers">computers</option>
                <option value="phones">phones</option>
                <option value="clothing">clothing</option>
                <option value="accessories">accessories</option>
                <option value="shoes">shoes</option>
              </select>
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Enter Price"
                required
                className="w-[100%] outline-none border p-4  rounded-lg"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder=" Drop a rating😩"
                required
                className="w-[100%] p-4 outline-none border rounded-lg "
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            {/* <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Product color here:"
                required
                className="w-[100%] p-2 outline-none "
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
              />
            </div> */}

            <button
              className={
                isLoading
                  ? "w-[100%] p-3 bg-nav cursor-not-allowed text-white  rounded-md text-xl font-semibold"
                  : " w-[100%] p-3 bg-white text-pri  rounded-md text-xl font-semibold"
              }
              type="submit"
            >
              Create
            </button>
          </div>
          {/*this is the query section */}
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
