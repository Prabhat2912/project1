import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className=" border-b flex  sticky top-0 z-50  items-center px-6 py-1 backdrop-filter backdrop-blur-md bg-opacity-80 ">
      <nav className=" px-4  ">
        <div className="flex flex-row w-full  items-center justify-normal gap-x-[250px]">
          <div>
            {" "}
            <Link
              to="/"
              className="flex items-center justify-center gap-x-[5px] px-2 "
            >
              <img src="./logo.png" alt="Logo" className="w-[50px] h-[32px] " />
              <h1 className="font-montserrat text-[34px]  font-bold  ">
                Furniro
              </h1>
            </Link>
          </div>

          <div className="flex flex-row justify-center items-center  gap-x-[65px] font-medium px-1 text-[16px] font-poppins">
            <NavLink
              to="/"
              className={({ isActive }) => `px-2.5 py-1.5 rounded-xl  `}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => `px-2.5 py-1.5 rounded-xl  `}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `px-2.5 py-1.5 rounded-xl  `}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `px-2.5 py-1.5 rounded-xl  `}
            >
              Contact
            </NavLink>
          </div>
          <div className="flex flex-row justify-center items-center  gap-x-[40px] font-medium px-1  ">
            <Link to="/login" className="p-1 rounded-full hover:bg-gray-100 ">
              <img
                src="/account.png"
                alt="account"
                className="w-[28px] h-[23px]"
              />
            </Link>
            <Link to="/" className="p-1 rounded-full hover:bg-gray-100 ">
              <img
                src="/search.png"
                alt="search"
                className="w-[28px] h-[28px]"
              />
            </Link>
            <Link to="/" className="p-1 rounded-full hover:bg-gray-100 ">
              <img src="/heart.png" alt="likes" className="w-[28px] h-[28px]" />
            </Link>
            <Link to="/" className="p-1 rounded-full hover:bg-gray-100 ">
              <img src="/cart.png" alt="cart" className="w-[28px] h-[28px]" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
