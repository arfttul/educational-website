import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import webCourses from "../../Data/web-dev-courses";

const BuyCoffee = () => {
  const coffee = <FontAwesomeIcon icon={faCoffee} />;
  return (
    <div>
      <div className="flex justify-center items-center h-32 bg-slate-800">
        <h1 className="text-6xl text-yellow-50">Buy Me A Coffee</h1>
      </div>
      <div
        className="  flex flex-col justify-center items-center h-96
      "
      >
        <a href="https://www.buymeacoffee.com/arfttul" target="_blank">
          <h1 className="text-red-300 hover:text-amber-700 cursor-pointer text-9xl">
            {coffee}
          </h1>
        </a>
        <a href="https://www.buymeacoffee.com/arfttul" target="_blank">
          <button
            className="border border-amber-800 mt-8 px-8 py-4 rounded-full
        font-bold text-amber-700 hover:bg-amber-800 hover:text-white"
          >
            Buy Me A <FontAwesomeIcon icon={faCoffee} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default BuyCoffee;
