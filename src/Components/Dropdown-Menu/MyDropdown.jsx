import { Menu } from "@headlessui/react";
import React, { useState } from "react";
function MyDropdown(props) {
  const [showoptions, setShowoptions] = useState(false);
  const handleShowOptions = () => {
    setShowoptions(!showoptions);
  };
  return (
    <div class="relative inline-block  text-left ">
      <div class="">
        <button
          onClick={handleShowOptions}
          type="button"
          class="inline-flex justify-center w-full rounded-md items-center hover:bg-black hover:text-white p-6   "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {props.children}
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

      {showoptions && (
        <div
          class="origin-top-right absolute right-0 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none md:bg-gray-900 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div
            class="py-1 flex flex-col items-center justify-center "
            role="none"
          >
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 md:text-white text-sm hover:bg-gray-300"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 md:text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 md:text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-300 md:text-white"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default MyDropdown;
