import { faL } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
function MyDropdown(props) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div class="relative inline-block  text-left ">
      <div class="">
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md items-center hover:bg-black hover:text-white p-6   "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShowOptions(!showOptions)}
        >
          {props.children[0]}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showOptions && props.children[1]}
    </div>
  );
}
export default MyDropdown;
