import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const DropdownModal = () => {
  return (
    <div className=" flex top-12 divide-x-4  bg-white border px-8 text-sm whitespace-break-spaces py-8 space-x-9 rounded shadow-lg z-10">
      <ul className="justify-between block">
        <li>
          <a
            href="#"
            className="flex font-normal hover:bg-gray-100 text-left"
            style={{ paddingRight: 50, WebkitTextSizeAdjust: 100 }}
          >
            Help Center
          </a>
        </li>
        <li className="py-2">
          <a
            href="#"
            className="flex font-normal hover:bg-gray-100"
            style={{ paddingRight: 50 }}
          >
            place and track order
          </a>
        </li>
        <li className="py-2">
          <a
            href="#"
            className="flex hover:bg-gray-1000 text-sm"
            style={{ paddingRight: 50 }}
          >
            order cancellation
          </a>
        </li>
        <li className="border w-full"></li>
        <li className="">
          <button type="text" name="live chat" className="bg-blue-800 relative">
            Live chat
          </button>
        </li>
      </ul>
    </div>
  );
};

const Searchable = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="py-5">
      <div className="flex items-center  justify-center">
        <div className="  absolute transform translate-x-14">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className=" pl-10 pr-3 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="ml-2">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-black"
            style={{ fontSize: 20 }}
          />
        </div>
        <div className="ml-2 relative">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ fontSize: 20, color: "black" }}
            aria-label="Help"
            role="button"
            onClick={toggleDropdown}
          />
          {showDropdown && <DropdownModal />}
        </div>
      </div>

      
    </div>
  );
};

export default Searchable;
