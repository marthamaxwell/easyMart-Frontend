import React from "react";
import { useAuthContext } from "../context/authContext";
import TheFooter from "../footer/2ndfooter";

const TestComp = () => {
  const { userDetails, error, message } = useAuthContext();
  console.log("user details from test comp => ", userDetails);
  return (
    <div>
      {userDetails === undefined && error !== false && (
        <div>
          <p className="text-blue-500 animate-pulse font-medium text-center my-20">
            Loading...
          </p>
        </div>
      )}
      {userDetails !== undefined && (
        <div className="mt-10 md:h-40 h-60">
          <p className="uppercase text-pri font-semibold text-center">
            {message && message}
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-6">
            <p className="capitalize text-gray-600">
              Name: {userDetails?.name}
            </p>
            <p className="text-gray-400">Email: {userDetails?.email}</p>
            <p className="uppercase  font-medium text-pri">
              Admin: {userDetails?.isAdmin ? "Admin" : "User"}
            </p>
          </div>
          <div className="text-center">
            <button className="bg-pri w-24 mt-8  h-8 text-white rounded-lg hover:bg-orange-600   text-lg">
              Log Out
            </button>
          </div>
        </div>
      )}
      {error === false && <div>Please login to see</div>}
      <TheFooter />
    </div>
  );
};

export default TestComp;
