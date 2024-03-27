import React, { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function SchedulePage() {
  useEffect(() => {
    let container = document.querySelector(".sang-drag-container");

    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      startY = e.pageY - container.offsetTop;
      scrollLeft = container.scrollLeft;
      scrollTop = container.scrollTop;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseLeave = () => {
      isDragging = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const y = e.pageY - container.offsetTop;
      const walkX = (x - startX) * 1; // Tăng độ nhạy cảm cho di chuyển ngang
      const walkY = (y - startY) * 1; // Tăng độ nhạy cảm cho di chuyển dọc
      container.scrollLeft = scrollLeft - walkX;
      container.scrollTop = scrollTop - walkY;
    };
    if (!container) return;
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listeners
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="w-full mt-5 px-20">
      <div
        className="rounded-lg border border-[#E5E7EB] mb-6"
        style={{ height: "calc(100vh - 116px)" }}
      >
        <div className="px-6 py-4 flex justify-between border-b border-[#E5E7EB] bg-[#F9FAFB] rounded-t-lg">
          <div>
            <time datetime="2022-01-22" class="text-[#111827] font-semibold">
              27 tháng 3, 2024
            </time>
            <p className="text-sm text-[#6B7280] mt-1">Thứ tư</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex border rounded-lg shrink-0 border-[#E5E7EB]">
              <button className="btn btn-outline no-animation border-none rounded-none rounded-tl-lg rounded-bl-lg">
                <FaAngleLeft />
              </button>
              <button className="btn btn-outline no-animation border-none rounded-none">
                Hôm nay
              </button>
              <button className="btn btn-outline no-animation border-none rounded-none rounded-tr-lg rounded-br-lg">
                <FaAngleRight />
              </button>
            </div>
            <select className="select select-bordered w-full max-w-xs bg-transparent border-[#E5E7EB]">
              <option selected>Lịch ngày</option>
              <option>Lịch tuần</option>
              <option>Lịch tháng</option>
            </select>
            <div className="h-3/5 w-1 bg-[#D1D5DB] mx-3"></div>
            <button className="btn btn-primary">Thêm lịch đặt</button>
          </div>
        </div>
        <div className="flex" style={{ height: "calc(100% - 83px)" }}>
          <div className="w-3/4 flex overflow-auto">
            <div className="w-28 shrink-0 pr-2 border-r border-[#E5E7EB] h-fit">
              <div className="px-4 h-12 font-semibold"></div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                12AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                1AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                2AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                3AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                4AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                5AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                6AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                7AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                8AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                9AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                10AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                11AM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                12PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                1PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                2PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                3PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                4PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                5PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                6PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                7PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                8PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                9PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                10PM
              </div>
              <div className="h-16 flex items-center justify-end -translate-y-1/2 relative after:absolute after:w-1 after:h-[2px] after:bg-[#b7babe] after:top-full after:left-full after:-translate-x-1/2 after:-translate-y-1/2">
                11PM
              </div>
            </div>
            <div className=" overflow-auto flex h-fit  sang-drag-container">
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0  bg-white shadow">
                  Sân Loại A - 1
                </div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
              </div>
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0 bg-white shadow">
                  Sân Loại A - 2
                </div>
                <div
                  className="h-80 border-t cursor-not-allowed hover:bg-[#F9FAFB] transition"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, #fff, #fff 6px, #dbdbdb 0, #dbdbdb 12px)",
                  }}
                ></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div
                  className="h-32 border-t cursor-not-allowed hover:bg-[#F9FAFB] transition"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, #fff, #fff 6px, #dbdbdb 0, #dbdbdb 12px)",
                  }}
                ></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div
                  className="h-32 border-t cursor-not-allowed hover:bg-[#F9FAFB] transition"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, #fff, #fff 6px, #dbdbdb 0, #dbdbdb 12px)",
                  }}
                ></div>
              </div>
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0 bg-white shadow">
                  Sân Loại A - 3
                </div>
                <div
                  className="h-64 border-t cursor-not-allowed hover:bg-[#F9FAFB] transition"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, #fff, #fff 6px, #dbdbdb 0, #dbdbdb 12px)",
                  }}
                ></div>
                <div className="h-20 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-24 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-12 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
              </div>
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0 bg-white shadow">
                  Sân Loại A - 4
                </div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
              </div>{" "}
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0 bg-white shadow">
                  Sân Loại A - 4
                </div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
              </div>{" "}
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0 bg-white shadow">
                  Sân Loại A - 4
                </div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
              </div>{" "}
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0 bg-white shadow">
                  Sân Loại A - 4
                </div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
              </div>{" "}
              <div className="border-r min-w-40 w-full h-fit">
                <div className="px-4 h-12 flex items-center justify-center font-semibold sticky top-0 bg-white shadow">
                  Sân Loại A - 4
                </div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
                <div className="h-16 border-t cursor-pointer hover:bg-[#F9FAFB] transition"></div>
              </div>
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
