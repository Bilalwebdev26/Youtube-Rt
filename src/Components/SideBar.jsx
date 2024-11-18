import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaHistory } from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { FaMusic } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineSportsScore } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { FiFlag } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";


const firstSec = [
  { lable: "Home", icon: <IoHomeOutline /> },
  { lable: "Shorts", icon: <SiYoutubeshorts /> },
  { lable: "Subscription", icon: <MdSubscriptions /> },
];
const secondSec = [
  { lable: "Liked Video", icon: <AiOutlineLike /> },
  { lable: "History", icon: <FaHistory /> },
  { lable: "Playlist", icon: <CgPlayListSearch /> },
  { lable: "Watch Later", icon: <MdOutlineWatchLater /> },
];
const thirdSec = [
  { lable: "Trending", icon: <IoMdTrendingUp /> },
  { lable: "Music", icon: <FaMusic /> },
  { lable: "Gaming", icon: <SiYoutubegaming /> },
  { lable: "News", icon: <FaNewspaper /> },
  { lable: "Sports", icon: <MdOutlineSportsScore /> },
];
const forthSec = [
    { lable: "Youtube Premium", icon: <FaYoutube /> },
    { lable: "Youtube Music", icon: <SiYoutubemusic /> },
    { lable: "Youtube Kids", icon: <SiYoutubekids /> },
  ];
  const fifthSec = [
    { lable: "Setting", icon: <CiSettings /> },
    { lable: "Report History", icon: <FiFlag /> },
    { lable: "Help", icon: <MdHelpOutline /> },
    { lable: "Send Feedback", icon: <RiFeedbackLine /> },
  ];  

const SideBar = () => {
  return (
    <div className="px-6 w-[19%] h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-300 mt-14">
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
        <span className="text-sm text-gray-800 cursor-pointer font-bold">About Press Copyright <br /> Contact-us Creator <br />Advertise Developers</span>
        <p className="text-gray-800 cursor-pointer text-sm font-bold mt-5">Terms Privacy Policy & Safety How YouTube works Test new features</p>
        <p className="text-gray-700 text-xs my-3">© 2024 Google LLC</p>
      </div>
    </div>
  );
};

export default SideBar;
