import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";

const RegistrationForm = () => {
  const navigate = useNavigate();
  // const base_url = import.meta.env.VITE_API_BASE_URL;
  const base_url = "http://localhost:4000";
  //states for reg
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  console.log("full name", fullname);
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
    <div className="max-w-2xl mx-auto py-20">
      <div className=" bg-white  p-5 w-full">
        <h1 className="text-center font-semibold">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              placeholder="fullname"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email Here"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-4 outline-none border border-gray-400 rounded-md"
            />
          </div>

          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-4 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="">username</label>
            <input
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="">
            <h4 className="text-center mb-3">Or Sign Up with</h4>
            <div>
              {/* BOTTOM ICONS WRAPPER */}
              <div className="w-full flex gap-2">
                <div className="w-1/3 border border-[#BDBFBE] py-2 px-4 flex items-center justify-center gap-2 rounded-md">
                  <img src={facebook} alt="facebook" />
                  <p>Facebook</p>
                </div>
                <div className="w-1/3 border border-[#BDBFBE] py-2 px-4 flex items-center justify-center gap-2 rounded-md">
                  <img src={google} alt="google" />
                  <p>Google</p>
                </div>
                <div className="w-1/3 border border-[#BDBFBE] py-2 px-4 flex items-center justify-center gap-2 rounded-md">
                  <img src={apple} alt="apple" />
                  <p>Apple</p>
                </div>
              </div>
            </div>
            <p className=" text-center mt-3">
              Already have an account?{" "}
              <span className="text-red-500">Login</span>
            </p>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-pri px-5 py-2 text-white rounded-md w-full font-medium flex justify-between items-center disabled:opacity-40 disabled:cursor-not-allowed mt-32s"
          >
            <p className="flex-grow text-center">Create Account</p>
            <span className="text-3xl">&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
