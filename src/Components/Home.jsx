import React from "react";
import SideBar from "./SideBar.jsx";
import Video from "./Video.jsx";
import { useAuthHook } from "../context/AuthProvider";
import ButtonList from "./ButtonList.jsx";
const Home = () => {
  const { loading, data } = useAuthHook();
  console.log("App loading", loading);
  console.log("App data :", data);
  return (
    <div className=" mt-14">
      <div className="flex">
      <SideBar />
      </div>
     
    <div className=" flex-1 h-[calc(100vh-60px)] overflow-y-auto scrollbar-hide">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {!loading && data.map((item,index) => {
          if (item.type !== "video") return false;
          return <Video key={index} video={item?.video} />;
        })}
      </div>
    </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import SideBar from "./SideBar.jsx";
// import Video from "./Video.jsx";
// import { useAuthHook } from "../context/AuthProvider";
// import ButtonList from "./ButtonList.jsx";

// const Home = () => {
//   const { loading, data } = useAuthHook();
//   console.log("App loading", loading);
//   console.log("App data :", data);

//   return (
//     <div className="mt-14">
//       <div className="flex">
//         {/* Sidebar */}
//         <SideBar />
//         {/* Main Content Area */}
//         <div className="flex-1">
//           {/* Button List - Positioned at the top */}
//           <ButtonList />
        
//           {/* Video Content */}
//           <div className="h-[calc(100vh-60px)] overflow-y-auto scrollbar-hide mt-16">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
//               {data.map((item, index) => {
//                 if (item.type !== "video") return null;
//                 return <Video key={index} video={item?.video} />;
//               })}
//             </div>
//           </div>
//           {/* flex-1 */}
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

