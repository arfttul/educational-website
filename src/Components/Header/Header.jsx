import { Menu } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import MyDropdown from "../Dropdown-Menu/MyDropdown";
import svg from "../../Images/SVGs/magnifying-glass-svgrepo-com.svg";

const Header = () => {
  const courses = "Courses";
  const support = "Support";

  return (
    <div className="">
      <nav className="flex   justify-between   items-center ">
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
        <div className=" flex justify-around items-center   w-1/2 text-2xl ">
          <MyDropdown>{courses}</MyDropdown>
          <MyDropdown>{support}</MyDropdown>
          <div className="svg-container flex border px-6 py-1">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-80 outline-none"
            />
            <img role="img" width="16px" src={svg} alt="svg magniflying glass" className=" cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
