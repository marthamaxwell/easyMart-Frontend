import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/5.png";
import vector from "../../assets/images/Vector.png";

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
          navigate("/signup");
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
    <div className="max-w-2xl mx-auto mb-5 py-20">
      <div className="bg-white w-full p-5 flex h-96 relative rounded-md border-2">
        <img src={image} className="w-1/2" alt="" />

        <form onSubmit={handleSubmit} className="space-y-3 grow">
          <h1 className="font-semibold mb-3 text-2xl">Login</h1>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email Here"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password Here"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-pri px-5 py-2 text-white rounded-md w-full font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>
        <div className="absolute bottom-[15%] left-[50%] ">
          <h3>Dont have an account? Sign Up</h3>
          <p className="text-nav">or Login with</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
