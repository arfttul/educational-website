import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo ">
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
  );
};

export default Logo;
