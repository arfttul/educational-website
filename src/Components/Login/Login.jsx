import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <section className="bg-gray-800 ">
      <div className="flex justify-center items-center border min-h-screen  ">
        <form action="" className="border border-white p-10 rounded">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-2xl mb-2 text-white">
              Email
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

          <button
            type="submit"
            class="inline-flex justify-center  rounded-full bg-white hover:font-extrabold items-center px-8 py-2 my-2  "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Login
          </button>

          <center>
            <div className="text-white">
              <small>
                Not Registered yet?{" "}
                <button>
                  <Link to="/signup">
                    <span className="underline pb-1 px-1 cursor-pointer text-xl ">
                      sign-up
                    </span>{" "}
                  </Link>
                </button>
                for free
              </small>
            </div>
          </center>
        </form>
      </div>
    </section>
  );
};

export default Login;
