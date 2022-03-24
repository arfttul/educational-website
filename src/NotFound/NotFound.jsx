import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl text-red-600 ">4@4 Page not found!</h1>
      <Link to='/' className="text-white mt-12" >
          <button className="border border-white px-8 py-4 rounded hover:bg-white hover:text-gray-900 hover:font-bold"> Home</button>
          </Link>
    </div>
  );
};

export default NotFound;
