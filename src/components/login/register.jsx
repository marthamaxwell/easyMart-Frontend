import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  // const base_url = import.meta.env.VITE_API_BASE_URL;
  const base_url = "http://localhost:9000";
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
        console.log("the login sussess response => ", res);
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
      <div className=" bg-white drop-shadow-md p-5 w-full">
        <h1 className="text-center font-semibold">Registration Form</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
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
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
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

          <button
            disabled={isLoading}
            type="submit"
            className="bg-gray-300 px-5 py-2 rounded-md font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
