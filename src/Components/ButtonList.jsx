// import React from "react";
// import { buttonList } from "../constants/index.jsx";
// const ButtonList = () => {
//   return (
//     <div className="flex space-y-4 w-full fixed py-2 px-4 bg-white overflow-x-auto overflow-y-hidden scrollbar-hide my-3">
//      <div className="flex space-x-4 flex-nowrap mx-10 px-3">
//      {buttonList.map((item, index) => (
//         <div className="" key={index}>
//           <a href={item.href} className=" px-3 py-1 cursor-pointer bg-gray-200 hover:bg-gray-300 text-black font-semibold text-sm rounded-xl duration-150">{item.label}</a>
//         </div>
//       ))}
//      </div>
//     </div>
//   );
// };

// export default ButtonList;
import React from "react";
import { buttonList } from "../constants/index.jsx";

const ButtonList = () => {
  return (
    <div className="flex space-y-4 w-full fixed  py-5 px-4 bg-white overflow-x-auto overflow-y-hidden scrollbar-hide z-10">
      <div className="flex space-x-4 flex-nowrap mx-10 px-3">
        {buttonList.map((item, index) => (
          <div className="" key={index}>
            <a
              href={item.href}
              className="px-3 py-1 cursor-pointer bg-gray-200 hover:bg-gray-300 text-black font-semibold text-sm rounded-lg duration-150"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;