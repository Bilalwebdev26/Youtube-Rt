import React from "react";
import {
  firstSec,
  secondSec,
  thirdSec,
  forthSec,
  fifthSec,
} from "../constants";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const SideBar = () => {
  const open = useSelector((state) => state.app.open);
  console.log(open);

  return (
    <div
      className={`px-6 w-[250px] h-[calc(100vh-60px)] overflow-y-auto fixed bg-white overflow-x-hidden scrollbar scrollbar-thumb-gray-300 transform transition-transform duration-500 shadow-lg z-50 `}
      style={{
        transform: open ? "translateX(0)" : "translateX(-100%)",
        // top: "60px", // Adjust based on header height
        left: "0",
      }}
    >
      <div className=" items-center space-y-2 mt-2">
        {firstSec.map((label, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 hover:bg-gray-300 px-1 py-2 cursor-pointer duration-300 rounded-xl"
          >
            <span className="text-2xl">{label.icon}</span>

            {/* <IoHomeOutline size={"24px"} className="cursor-pointer" /> */}
            <span className="font-medium">{label.lable}</span>
          </div>
        ))}
      </div>
      <hr className="border-gray-600 my-4" />
      <div className=" items-center space-y-2">
        <div className=" flex items-center space-x-3 px-1 py-2 hover:bg-gray-300 duration-200 rounded-xl">
          <h1 className="text-xl font-semibold cursor-pointer">You</h1>
          <FaChevronRight size={"20px"} />
        </div>
        {secondSec.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 hover:bg-gray-300 px-1 py-2 cursor-pointer duration-300 rounded-xl"
          >
            <span className="text-2xl">{item.icon}</span>

            {/* <IoHomeOutline size={"24px"} className="cursor-pointer" /> */}
            <span className="font-medium">{item.lable}</span>
          </div>
        ))}
      </div>
      <hr className="border-gray-600 my-4" />
      <div className=" items-center space-y-2 mb-2">
        <div className=" flex items-center space-x-3 px-1 py-2 hover:bg-gray-300 duration-200 rounded-xl">
          <h1 className="text-xl font-semibold cursor-pointer">Explore</h1>
        </div>
        {thirdSec.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 hover:bg-gray-300 px-1 py-2 cursor-pointer duration-300 rounded-xl"
          >
            <span className="text-2xl">{item.icon}</span>

            {/* <IoHomeOutline size={"24px"} className="cursor-pointer" /> */}
            <span className="font-medium">{item.lable}</span>
          </div>
        ))}
      </div>
      <hr className="border-gray-600 my-4" />
      <div className=" items-center space-y-2 mb-2">
        <div className=" flex items-center  px-1 py-2 hover:bg-gray-300 duration-200 rounded-xl cursor-pointer">
          <h1 className="font-semibold cursor-pointer">More from Youtube</h1>
        </div>
        {forthSec.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 hover:bg-gray-300 px-1 py-2 cursor-pointer duration-300 rounded-xl"
          >
            <span className="text-2xl text-red-600">{item.icon}</span>

            {/* <IoHomeOutline size={"24px"} className="cursor-pointer" /> */}
            <span className="font-medium">{item.lable}</span>
          </div>
        ))}
      </div>
      <hr className="border-gray-600 my-4" />
      <div className=" items-center space-y-2 mb-2">
        {fifthSec.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 hover:bg-gray-300 px-1 py-2 cursor-pointer duration-300 rounded-xl"
          >
            <span className="text-2xl">{item.icon}</span>

            {/* <IoHomeOutline size={"24px"} className="cursor-pointer" /> */}
            <span className="font-medium">{item.lable}</span>
          </div>
        ))}
      </div>
      <hr className="border-gray-600 my-4" />
      <div className="">
        <span className="text-sm text-gray-800 cursor-pointer font-bold">
          About Press Copyright <br /> Contact-us Creator <br />
          Advertise Developers
        </span>
        <p className="text-gray-800 cursor-pointer text-sm font-bold mt-5">
          Terms Privacy Policy & Safety How YouTube works Test new features
        </p>
        <p className="text-gray-700 text-xs my-3">© 2024 Google LLC</p>
      </div>
    </div>
  );
};

export default SideBar;
