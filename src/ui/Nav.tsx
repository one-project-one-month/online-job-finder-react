import React from 'react';
import { FaRegMessage, FaPlus } from "react-icons/fa6";
import { GoHome, GoBookmark } from "react-icons/go";
import { LiaNetworkWiredSolid } from "react-icons/lia";

const Nav = () => {
  return (
    <div className="bg-white shadow-md flex justify-around items-center py-3 w-full fixed bottom-0 left-0">
      <GoHome className="text-xl text-gray-500 hover:text-black" />
      <LiaNetworkWiredSolid className="text-xl text-gray-500 hover:text-black" />
      <div className="w-12 h-12 flex justify-center items-center bg-indigo-900 text-white rounded-full shadow-lg">
        <FaPlus className="text-xl" />
      </div>
      <FaRegMessage className="text-xl text-gray-500 hover:text-black" />
      <GoBookmark className="text-xl text-gray-500 hover:text-black" />
    </div>
  );
};

export default Nav;



