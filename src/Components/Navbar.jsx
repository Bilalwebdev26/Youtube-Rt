import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FiMic } from "react-icons/fi";
import Logo from "../assets/Logo.png";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.jpg"
import Avatar from "react-avatar"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 fixed top-0 w-[100%] bg-white">
      <div className="flex items-center space-x-4">
        <GiHamburgerMenu size={"24px"} className="cursor-pointer" />
        <img src={Logo} alt="logo" className="w-28 cursor-pointer" />
      </div>

      <div className="w-[40%] flex ">

        <div className="border border-gray-500 rounded-l-3xl w-[100%] px-3 py-2 flex">
          <input type="text" placeholder="Search" className="outline-none w-[100%]" />
        </div>
          <button className="py-2 px-3 border border-gray-500 rounded-r-3xl bg-gray-100">
            <FaSearch size={"20px"} />
          </button>
          <button >
               <FiMic size={"42px"} className="ml-3 border-none rounded-full hover:bg-gray-200 duration-200 p-2"/>
        </button>

      </div>

      <div className="flex items-center space-x-3">

          <RiVideoAddLine size={"42px"} className="p-2 hover:bg-gray-200 duration-200 border-none rounded-full cursor-pointer"/>
          <FaRegBell size={"42px"} className="p-2 hover:bg-gray-200 duration-200 border-none rounded-full cursor-pointer"/>
          <Avatar src={profile} round={true} size="32" />
      </div>
    </div>
  );
};

export default Navbar;
