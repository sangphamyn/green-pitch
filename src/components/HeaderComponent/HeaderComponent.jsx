import React from "react";
import logo from "../../assets/images/logo.svg";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-[#13357b] ">
      <div className="navbar container mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a href="/" className="header-logo mr-20 flex items-center">
            <img src={logo} />
            <span className="ml-4 font-bold text-md text-white">
              Green Pitch
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 w-40 text-black">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <a href="/manager" className="btn bg-white text-black">
              Dành cho chủ sân
            </a>
            <a
              href="/login"
              className="btn btn-outline border-white text-white"
            >
              Đăng ký/Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
