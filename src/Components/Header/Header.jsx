import { Menu } from "@headlessui/react";
import { React, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MyDropdown from "../Dropdown-Menu/MyDropdown";
import svg from "../../Images/SVGs/magnifying-glass-svgrepo-com.svg";
import Logo from "../Logo/Logo";

const Header = () => {
  const navigate = useNavigate();
  const courses = "Courses";
  const support = "Support";

  const courseLinks = (
    <div
      class="origin-top-right absolute right-0 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none md:bg-gray-900 "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1 flex flex-col items-center justify-center " role="none">
        <Link
          to="web-development"
          class="text-gray-700 block px-4 py-2 md:text-white text-sm hover:font-extrabold"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
        >
          Web Development
        </Link>
        <Link
          to="academic-courses"
          class="text-gray-700 block px-4 py-2 text-sm hover:font-extrabold md:text-white"
          role="menuitem"
          tabindex="-1"
          id="menu-item-1"
        >
          Academic Courses
        </Link>
        <Link
          to="app-development"
          class="text-gray-700 block px-4 py-2 text-sm hover:font-extrabold md:text-white"
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
        >
          App Development
        </Link>
        <Link
          to="ethical-hacking"
          class="text-gray-700 block px-4 py-2 text-sm hover:font-extrabold md:text-white"
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
        >
          Ethical Hacking
        </Link>

        <Outlet />
      </div>
    </div>
  );
  const supportLinks = (
    <div
      class="origin-top-right absolute right-0 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none md:bg-gray-900 "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1 flex flex-col items-center justify-center " role="none">
        <Link
          to="support"
          class="text-gray-700 block px-4 py-2 text-sm hover:font-extrabold md:text-white "
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
        >
          Buy Me a Coffee
        </Link>
        <Outlet />
      </div>
    </div>
  );

  const signIn = <div>signIn</div>;

  return (
    <div className="">
      <nav className="flex   justify-between   items-center mb-6">
        <Logo />
        <div className=" flex justify-around items-center  w-3/4  text-2xl mt-16">
          <MyDropdown>
            <h2>Courses</h2>
            {courseLinks}
          </MyDropdown>
          <MyDropdown>
            <h2>Support</h2>
            {supportLinks}
          </MyDropdown>

          <button
            type="button"
            class="inline-flex justify-center  rounded-full hover:font-extrabold items-center hover:bg-red-500 hover:text-white px-12 py-4   "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <Link to="login"> Log In</Link>
          </button>

          <div className="svg-container flex border px-6 py-1">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-80 outline-none"
            />
            <img
              role="img"
              width="16px"
              src={svg}
              alt="svg magniflying glass"
              className=" cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
