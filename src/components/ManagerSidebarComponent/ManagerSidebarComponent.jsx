import React from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineStadium } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaUsersRectangle } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

function ManagerSidebar() {
  return (
    <div>
      <div className="w-64 bg-gray-200 border-r border-gray-200 min-h-screen h-full">
        <div className="py-4 px-6 mb-2">
          <a href="/" className="header-logo flex items-center">
            <img src={logo} />
            <span className="ml-4 font-bold text-xl">Green Pitch</span>
          </a>
        </div>

        <div className="mb-10">
          <h3 className="mx-6 mb-2 text-xs text-gray-600 uppercase tracking-widest">
            Quản lý
          </h3>

          <NavLink
            to="/manager/index"
            className={({ isActive }) =>
              "flex gap-3 items-center px-6 py-2.5 text-gray-600 hover:bg-orange-100 hover:text-orange-600 group transition " +
              (isActive
                ? "bg-orange-500 hover:bg-orange-500 text-white hover:text-white"
                : "")
            }
          >
            <AiOutlineHome />
            Trang chủ
          </NavLink>

          <a
            href="#"
            className="flex gap-3 items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-100 group transition"
          >
            <IoCalendarOutline />
            Lịch sân
          </a>

          <a
            href="#"
            className="flex gap-3 items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-100 group transition"
          >
            <IoAnalytics />
            Thống kê
          </a>
        </div>

        <div className="mb-10">
          <h3 className="mx-6 mb-2 text-xs text-gray-600 uppercase tracking-widest">
            Chỉnh sửa
          </h3>

          <NavLink
            to="/manager/group-pitch"
            className={({ isActive }) =>
              "flex gap-3 items-center px-6 py-2.5 text-gray-600 hover:bg-orange-100 hover:text-orange-600 group transition " +
              (isActive
                ? "bg-orange-500 hover:bg-orange-500 text-white hover:text-white"
                : "")
            }
          >
            <MdOutlineStadium />
            Cụm sân
          </NavLink>

          <NavLink
            to="/manager/pitch-price"
            className={({ isActive }) =>
              "flex gap-3 items-center px-6 py-2.5 text-gray-600 hover:bg-orange-100 hover:text-orange-600 group transition " +
              (isActive
                ? "bg-orange-500 hover:bg-orange-500 text-white hover:text-white"
                : "")
            }
          >
            <MdOutlinePriceChange />
            Sân và giá
          </NavLink>

          <a
            href="#"
            className="flex gap-3 items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-100 group transition"
          >
            <FaUsersRectangle />
            Nhân viên
          </a>
        </div>
      </div>
    </div>
  );
}

export default ManagerSidebar;
