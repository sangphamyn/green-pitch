import React from "react";
import logo from "../../assets/images/logo.svg";

function ManagerPage() {
  return (
    <div>
      <div class="w-64 bg-gray-200 border-r border-gray-200 min-h-screen">
        <div class="py-4 px-6 mb-5">
          <a href="/" className="header-logo flex items-center justify-center">
            <img src={logo} />
            <span className="ml-4 font-bold text-xl">Green Pitch</span>
          </a>
        </div>

        <div class="mb-10">
          <h3 class="mx-6 mb-2 text-xs text-gray-600 uppercase tracking-widest">
            Quản lý
          </h3>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <svg
              class="h-5 w-5 text-gray-600 mr-2 group-hover:text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Trang chủ
          </a>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <svg
              class="h-5 w-5 text-gray-600 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            Lịch sân
          </a>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <svg
              class="h-5 w-5 text-gray-600 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Thống kê
          </a>
        </div>

        <div class="mb-10">
          <h3 class="mx-6 mb-2 text-xs text-gray-600 uppercase tracking-widest">
            Chỉnh sửa
          </h3>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <svg
              class="h-5 w-5 text-gray-600 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            Cụm sân
          </a>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <svg
              class="h-5 w-5 text-gray-600 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Sân và giá
          </a>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <svg
              class="h-5 w-5 text-gray-600 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
            Nhân viên
          </a>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <svg
              class="h-5 w-5 text-gray-600 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Scheduled
          </a>
        </div>
        <div class="mb-10">
          <h3 class="mx-6 mb-2 text-xs text-gray-600 uppercase tracking-widest">
            Following
          </h3>

          <a
            href="/"
            class="flex items-center px-6 py-2.5 text-gray-600 hover:text-orange-600 group"
          >
            <img
              src="https://picsum.photos/200"
              alt=""
              class="w-7 h-7 rounded-full mr-2"
            />
            MD Riaz
          </a>
        </div>
      </div>
    </div>
  );
}

export default ManagerPage;
