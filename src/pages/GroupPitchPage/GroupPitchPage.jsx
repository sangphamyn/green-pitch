import React from "react";
import { PiMapPinLight } from "react-icons/pi";
import { MdOutlineStadium } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
const pitches = [
  {
    name: "Sân CNTT",
    address: "Đường Bắc Sơn, Hoàng Văn Thụ, Thành phố Thái Nguyên, Thái Nguyên",
    imageUrl: "/kich-thuoc-san-7.jpg",
    status: 1,
    quantity: 4,
  },
  {
    name: "Sân Thanh Niên",
    address: "Đường Bắc Sơn, Hoàng Văn Thụ, Thành phố Thái Nguyên, Thái Nguyên",
    imageUrl: "/kich-thuoc-san-7.jpg",
    status: 0,
    quantity: 6,
  },
  {
    name: "Sân Công Nghiệp",
    address: "Đường Bắc Sơn, Hoàng Văn Thụ, Thành phố Thái Nguyên, Thái Nguyên",
    imageUrl: "/kich-thuoc-san-7.jpg",
    status: 3,
    quantity: 2,
  },
  // Thêm các sân bóng khác vào đây...
];

const PitchList = () => {
  return (
    <div>
      <div class="inline-flex shadow-sm" role="group">
        <a
          href="/manager/group-pitch/add"
          type="button"
          class="inline-flex gap-2 items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:text-white"
        >
          <FiPlusCircle />
          Thêm
        </a>
      </div>
      <div className="w-full container mx-auto mt-5">
        <h1 class="mb-12 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Danh sách các cụm sân
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-5">
          {pitches.map((pitch, index) => (
            <a
              href="/manager/group-pitch/detail"
              key={index}
              className="border rounded p-4 flex gap-5 hover:shadow transition hover:text-primary"
            >
              <img
                src={pitch.imageUrl}
                alt={pitch.name}
                className="mb-2 rounded w-1/2"
              />
              <div>
                <div
                  className={`text-sm px-4 w-fit mb-2 py-1 ${
                    pitch.status == 1
                      ? "bg-green-200 text-green-800"
                      : pitch.status == 0
                      ? "bg-red-200 text-red-800"
                      : "bg-orange-200 text-orange-800"
                  } rounded-full`}
                >
                  {pitch.status == 1
                    ? "Đã duyệt"
                    : pitch.status == 0
                    ? "Từ chối"
                    : "Chưa duyệt"}
                </div>
                <h2 className="text-lg font-semibold mb-1">{pitch.name}</h2>
                <p className="text-sm text-gray-600 mb-1 flex gap-1">
                  <PiMapPinLight className="shrink-0 text-lg" /> {pitch.address}
                </p>
                <p className="text-sm text-gray-600 mb-1 flex gap-1 items-center">
                  <MdOutlineStadium /> Số sân: {pitch.quantity}
                </p>
                <p className="text-sm mt-4 text-gray-600">
                  🌟 Chào mừng đến với Sân Bóng Nhân Tạo 7 Người của chúng tôi!
                  🌟 👟 Bạn đang tìm kiếm một nơi để thể hiện...
                </p>
              </div>{" "}
              {/* Thêm thông tin khác của sân bóng nếu cần */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PitchList;
