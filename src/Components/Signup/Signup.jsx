import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-gray-800  min-h-screen py-8">
      <div className=" flex justify-center py-4">
        <form action="" className=" px-6  rounded w-1/2 border py-12">
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-2xl mb-2 text-white">
              Name
            </label>{" "}
            <input
              type="text"
              name="name"
              id="name"
              className="outline-none py-2 rounded px-2 mb-2"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="text-2xl mb-2 text-white">
              User Name
            </label>{" "}
            <input
              type="text"
              name="username"
              id="username"
              className="outline-none py-2 rounded px-2 mb-2"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-2xl mb-2 text-white">
              Email Address
            </label>{" "}
            <input
              type="email"
              name="email"
              id="email"
              className="outline-none py-2 rounded px-2 mb-2"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="mobile" className="text-2xl mb-2 text-white">
              Mobile
            </label>{" "}
            <input
              type="text"
              name="mobile"
              id="mobile"
              className="outline-none py-2 rounded px-2 mb-2"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="text-2xl mb-2 text-white">
              Password
            </label>{" "}
            <input
              type="password"
              name="password"
              id="password"
              className="outline-none py-2 rounded px-2 mb-2"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="text-2xl mb-2 text-white">
              Confirm Password
            </label>{" "}
            <input
              type="password"
              name="password"
              id="password"
              className="outline-none py-2 rounded px-2 mb-2"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            class="inline-flex justify-center  rounded-full bg-white hover:font-extrabold items-center px-8 py-2 my-2  "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
           Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
