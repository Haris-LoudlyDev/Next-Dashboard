"use client";
import { Dashboard } from "@/Components/Dashboard/Dashboard";
import Login from "@/Components/Login/Login";
import Sidebar from "@/Components/SideBar/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [handleSider, sethandleSider] = useState(false);

  const toggleSidebar = () => {
    sethandleSider(!handleSider);
  };

  console.log(handleSider, "handleSider");
  return (
    <div>
      <div className="flex justify-between h-[100vh] w-[100%]">
        <div
          className={`${
            handleSider
              ? "w-[5%] h-[100vh] transition-all duration-500 ease-in-out"
              : "w-[15%] h-[100vh] transition-all duration-500 ease-in-out"
          }`}
        >
          <Sidebar toggleSidebar={toggleSidebar} handleSider={handleSider} />
        </div>
        <div
          className={`${  
            handleSider
              ? "w-[95%] h-[100vh] overflow-auto transition-all duration-500 ease-in-out"
              : "h-[100vh] w-[85%] overflow-auto transition-all duration-500 ease-in-out"
          }`}
        >
          <Dashboard />
        </div>    
      </div> 
      <Login/> 
    </div>
  ); 
}
