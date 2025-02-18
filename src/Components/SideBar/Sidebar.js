import React from "react";
import { FaPlus, FaUser } from "react-icons/fa6";

import { FaUserInjured } from "react-icons/fa";
import Image from "next/image";
import pic from "../../images/profile.jpg";
import smalllogo from "../../images/Logo2-removebg-preview.png";
import logo from "../../images/autoplai (1).png";
import Link from "next/link";

const Sidebar = ({ toggleSidebar, handleSider }) => {
  const listArray = [
    "Patient",
    "Overview",
    "Map",
    "Departments",
    "Doctor",
    "History",
    "Settings",
  ];

  return (
    <div>
      <div className="bg-zinc-600 h-[100vh] w-[100%]">
        <div className="mb-10 pr-4 pl-8 pt-4 ">
          {handleSider ? (
            <Image
              src={smalllogo}
              onClick={toggleSidebar}
              className="transition-transform duration-500 ease-in-out"
            />
          ) : (
            <Image
              src={logo}
              onClick={toggleSidebar}
              className="transition-transform duration-500 ease-in-out"
            />
          )}
        </div>
        <div className="flex flex-col items-center mb-10 pr-4 pl-4">
          <button
            className={`${
              handleSider
                ? "bg-violet-900 pt-3 pb-3 pl-4 pr-4 cursor-pointer rounded-xl flex flex-row items-center justify-between text-white gap-2 transition-all duration-500 ease-in-out font-mono"
                : "bg-violet-900 pt-3 pb-3 pl-4 pr-4 cursor-pointer rounded-xl flex flex-row items-center justify-between text-white gap-2 transition-all duration-500 ease-in-out font-mono"
            }`}
          >
            {handleSider ? <FaPlus /> : "Regsiter Patient"}
          </button>
        </div>
        <div className="mb-10">
          <ul>
            {listArray.map((item) => (
              <li
                className={`${
                  handleSider
                    ? "p-4 text-zinc-900 text-lg flex flex-row item-center gap-4 pl-8 cursor-pointer hover:bg-gray-400 transition-all ease-in-out duration-500 font-mono"
                    : "p-4 text-zinc-900 text-lg flex flex-row item-center gap-4 pl-4 cursor-pointer hover:bg-gray-400 transition-all ease-in-out duration-500 font-mono"
                }`}
              >
                {handleSider ? (
                  <FaUserInjured className="w-[1.5rem] h-[1.5rem]" />
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="pr-4 pl-4">
          <Link href="/login">
            <Image src={pic} className="rounded-xl w-[100%] h-[100%]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
