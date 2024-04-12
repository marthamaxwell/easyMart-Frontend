import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/5.png";
import vector from "../../assets/images/Vector.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";

const LoginForm = () => {
  const navigate = useNavigate();
  // const base_url = import.meta.env.VITE_API_BASE_URL;
  const base_url = "http://localhost:4000";

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
          navigate("/test");
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
    <div className="flex justify-center items-center mr-[10%] ">
      <div className="flex flex-col gap-3 mb-9 mt-11">
        <form onSubmit={handleSubmit} className="space-y-4 grow">
          <h1 className="font-semibold mb-3 text-2xl">Login</h1>

          <input
            type="email"
            placeholder="Email Here"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-4 outline-none border border-gray-400 rounded-md"
          />

          <input
            type="password"
            placeholder="Password Here"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-4 outline-none border border-gray-400 rounded-md"
          />
          <span className="text-xs text-pri">Forgot Password</span>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-pri px-5 py-2 text-white rounded-md w-full font-medium flex justify-between items-center disabled:opacity-40 disabled:cursor-not-allowed mt-32s"
          >
            <p className="flex-grow text-center">Login</p>
            <span className="text-3xl">&rarr;</span>
          </button>
        </form>
        <div className="">
          <h4 className="text-center">
            Dont have an account? <span>Sign Up </span>
          </h4>
          <div>
            <p className="text-nav text-center">Or Login with</p>

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
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
