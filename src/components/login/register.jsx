import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/5.png";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  // const base_url = import.meta.env.VITE_API_BASE_URL;
  const base_url = "http://localhost:4000";
  //states for reg
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");

  // axios with credentials
  // axios.defaults.withCredentials = true;

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${base_url}/user/register`, {
        email: email,
        password: password,
        username: username,
        name: fullname,
      })
      .then((res) => {
        console.log("the registered sussess response => ", res);
        if (res.data.success) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error) {
          console.log("the error => ", error?.response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="flex justify-center items-center mx-auto h-[100vh] rounded-lg bg-white">
      <div className="flex flex-col gap-3 mb-9 mt-11 p-10">
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
        <div className=" md:flex md:flex-wrap md:gap-24 mx-auto justify-center ">
          <img
            src={image}
            className="invisible md:visible md:h-[83vh] md:w-[43%]   md:bg-gradient-to-b from-white to-[#E34614]  "
            alt=""
          />

          <form
            onSubmit={handleSubmit}
            className="space-y-4 grow absolute top-[10%] left-[20%] md:relative md:left-0  "
          >
            <h1 className="font-bold mt-3 text-2xl">Sign Up</h1>
            <p>
              Creating an account gives you a more appealing shopping experience
            </p>
            <div className="flex gap-5 ">
              <div className="w-2/4 relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-5 md:h-5 mt-3  text-nav absolute bottom-5 ml-4"
                />

                <label className=" font-semibold">
                  First Name
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="md:w-full w-[90%] px-3 py-4 outline-none border block border-gray-400 rounded-lg placeholder:indent-8 placeholder:font-normal"
                  />
                </label>
              </div>
              <div className="w-2/4 relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-5 md:h-5 mt-3  text-nav absolute bottom-5 ml-4"
                />
                <label className="font-semibold">
                  Surname
                  <input
                    type="text"
                    placeholder="Enter Surname"
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="md:w-full w-[90%] px-3 py-4 outline-none border block border-gray-400 rounded-lg placeholder:indent-8 placeholder:font-normal"
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-2/4">
                <input
                  type="email"
                  placeholder="Email Here"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="md:w-full w-[90%] px-3 py-4 outline-none border block border-gray-400 rounded-lg"
                />
              </div>
              <div className="w-2/4">
                <input
                  type="text"
                  placeholder=" Phone Number Here"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="md:w-full w-[90%] px-3 py-4 outline-none border block border-gray-400 rounded-lg"
                />
              </div>
            </div>
            <div className="w-full relative">
              <FontAwesomeIcon
                icon={faEye}
                className="h-5 md:h-5 mt-3  text-nav absolute bottom-5 sm:right-[8%] right-[12%] md:right-[3%]"
              />
              <input
                type="password"
                placeholder="Password Here"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="md:w-full w-[90%] px-3 py-4 outline-none border block border-gray-400 rounded-lg "
              />
            </div>

            <div className="">
              <div>
                <p className="text-nav text-center mb-3">Or Signup with</p>

                {/* BOTTOM ICONS WRAPPER */}
                <div className="w-full flex gap-2">
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
            <h4 className="text-center font-bold ">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-pri font-normal">Login </span>
              </Link>
            </h4>
            <button
              disabled={isLoading}
              type="submit"
              className="bg-pri px-5 py-2 text-white rounded-lg md:w-full w-[90%]  font-medium flex justify-between items-center disabled:opacity-40 disabled:cursor-not-allowed mt-32s "
            >
              <p className="flex-grow text-center">Create Account</p>
              <span className="text-3xl">&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;