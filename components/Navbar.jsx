import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 shadow-lg">
      <div className="flex items-center gap-16 ml-8">
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt="logo"
          className="w-10"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Dishes..."
          className="w-80 p-2 text-lg text-gray-700 outline-none border-2 border-gray-400 rounded-md"
        />
      </div>

      <ul className="flex items-center justify-between gap-16 mr-8 text-gray-700">
        <Link href="/">
          <li className="text-lg font-semibold cursor-pointer hover:text-orange-500">
            Home
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="text-lg font-semibold cursor-pointer hover:text-orange-500">
            Support
          </li>
        </Link>
        <Link href="/">
          <li className="text-lg font-semibold cursor-pointer hover:text-orange-500">
            Offers
          </li>
        </Link>
        <Link href="/about">
          <li className="text-lg font-semibold cursor-pointer hover:text-orange-500">
            About Us
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
