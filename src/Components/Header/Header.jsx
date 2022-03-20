import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex     items-center ">
        <div className="logo">
          <Link to={"/"}>
            <h2 className="text-4xl m-4   cursor-pointer">
              <span className="text-6xl ">
                <h6 className="rotate-12 inline-block">e</h6>
              </span>
              <span>d</span>
              <span>u</span>
            </h2>
          </Link>
        </div>
        <div className="flex justify-around    w-1/2 text-2xl">
          <div className="courses flex items-center">
            <button className="hover:bg-black hover:text-white p-6   ">
              Courses
            </button>
          </div>
          <div className="programes-and-degrees flex items-center">
            <button className="hover:bg-black hover:text-white p-6  ">
              Programes & Degrees
            </button>
          </div>
          <div className="schools-and-partners flex items-center">
            <button className="hover:bg-black hover:text-white p-6  ">
              Schools & Partners
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
