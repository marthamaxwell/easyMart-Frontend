import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/5.png";

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const navigate = useNavigate();
  // const base_url = import.meta.env.VITE_API_BASE_URL;
  const base_url = "https://easymart-backend-946x.onrender.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //axios with credentials
  axios.defaults.withCredentials = true;

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${base_url}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("the login sussess response => ", res);
        if (res.data.success) {
          if (res.data.user.admin) {
            navigate("/admin");
          } else {
            navigate("/test");
          }
        }
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="flex justify-center items-center mx-auto h-[100vh] rounded-lg bg-white">
      <div className="flex flex-col gap-3 mb-9 mt-11">
        <Link to={"/"}>
          <div className="flex justify-end ">
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
        <div className=" md:flex md:flex-wrap md:gap-24 mx-auto justify-center ">
          <img
            src={image}
            className="invisible shrink md:visible md:h-[70vh] md:w-[40%]   md:bg-gradient-to-b from-white to-[#E34614]  "
            alt=""
          />

          <form
            onSubmit={handleSubmit}
            className="space-y-4 grow absolute top-[10%] left-[20%] md:relative md:left-0  "
          >
            <h1 className="font-bold mt-3 text-2xl">Login</h1>

            <input
              type="email"
              placeholder="Email Here"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:w-[80%] w-[90%] px-3 py-4 outline-none border border-gray-400 rounded-lg"
            />
            <div className="relative">
              <FontAwesomeIcon
                icon={faEye}
                className="h-5 md:h-5 mt-3  text-nav absolute bottom-5 right-[23%]"
              />
              <input
                type="password"
                placeholder="Password Here"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="md:w-[80%] w-[90%]  px-3 py-4 outline-none border border-gray-400 rounded-lg"
              />
            </div>
            <span className="text-xs text-pri block">Forgot Password</span>

            <button
              disabled={isLoading}
              type="submit"
              className="bg-pri px-5 py-2 text-white rounded-lg md:w-[80%] w-[90%]  font-medium flex justify-between items-center disabled:opacity-40 disabled:cursor-not-allowed mt-32s"
            >
              <p className="flex-grow text-center">Login</p>
              <span className="text-3xl">&rarr;</span>
            </button>

            <div className="">
              <h4 className="text-center md:text-left">
                Dont have an account?{" "}
                <Link to="/signup">
                  <span className="text-pri">Sign Up </span>
                </Link>
              </h4>
              <div>
                <p className="text-nav text-center mb-3">Or Login with</p>

                {/* BOTTOM ICONS WRAPPER */}
                <div className="w-2/3 flex gap-2">
                  <div className="md:w-1/3 sm:w-[40%] w-[50%] border border-[#BDBFBE] py-2 px-4 flex items-center justify-center gap-2 rounded-md">
                    <img src={facebook} alt="facebook" />
                    <p>Facebook</p>
                  </div>
                  <div className="md:w-1/3 sm:w-[40%] w-[50%] border border-[#BDBFBE] py-2 px-4 flex items-center justify-center gap-2 rounded-md">
                    <img src={google} alt="google" />
                    <p>Google</p>
                  </div>
                  <div className="md:w-1/3 sm:w-[40%] w-[50%] border border-[#BDBFBE] py-2 px-4 flex items-center justify-center gap-2 rounded-md">
                    <img src={apple} alt="apple" />
                    <p>Apple</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
