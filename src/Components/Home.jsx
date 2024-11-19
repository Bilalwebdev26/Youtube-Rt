import React from "react";
import SideBar from "./SideBar.jsx";
import Video from "./Video.jsx";
import { useAuthHook } from "../context/AuthProvider";
const Home = () => {
  const { loading, data } = useAuthHook();
  console.log("App loading", loading);
  console.log("App data :", data);
  return (
    <div className="flex mt-14">
      <SideBar />
    <div className=" flex-1 h-[calc(100vh-60px)] overflow-y-auto scrollbar-hide">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {data.map((item,index) => {
          if (item.type !== "video") return false;
          return <Video key={index} video={item?.video} />;
        })}
      </div>
    </div>
    </div>
  );
};

export default Home;
