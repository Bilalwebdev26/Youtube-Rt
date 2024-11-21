import React from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { useAuthHook } from "./context/AuthProvider.jsx";
import {Route, Routes} from "react-router-dom"
import Home from "./Components/Home.jsx";
import Search from "./Components/Search.jsx";
import PlayingVideo from "./Components/PlayingVideo.jsx";
import ButtonList from "./Components/ButtonList.jsx";

const App = () => {
  const { loading, data } = useAuthHook();
  console.log("App loading",loading)
  console.log("App data :",data)
  return (
    <div>
      <Navbar />
      <ButtonList/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/search/:searchQuery" element={<Search/>}/>
        <Route path="/video/:id" element={<PlayingVideo/>}/>
      </Routes>
    </div>
  );
};

export default App;
