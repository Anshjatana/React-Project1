import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#53389E] p-4 ">
      <div className="max-w-[1240px] flex items-center justify-between ">
        <div className="flex">
          <div className="w-9 mx-5 md:ml-[60px]">
            <img src="assets/logo.png" alt="logo" />
          </div>
          <div className="text-2xl font-semibold mt-1 text-white">
            Hourglass
          </div>

          <ul className="md:flex hidden text-white gap-6 text-lg px-16  mt-1.5">
            <li>Home</li>
            <li>Products</li>
            <MdKeyboardArrowDown className="ml-[-18px] mt-[7px]" />
            <li>Resources</li>
            <MdKeyboardArrowDown className="ml-[-18px] mt-[7px]" />
          </ul>

          <ul
            className={`md:hidden duration-500 text-white text-lg h-screen fixed w-full flex flex-col items-center bg-[#130c26] top-[73px]
        ${toggle ? "left-[0%]" : "left-[-100%]"} 
         `}
          >
            <li className="p-2">Home</li>
            <li className="p-2">Products</li>
            <li className="p-2">Resources</li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className=" md:flex hidden relative items-center  text-white  ">
            Support
          </div>
          <div className="ml-[15px] mr-6 pl=[15px] md:flex hidden md:text-sm text-white bg-[#7F56D9] border rounded-lg border-transparent font-normal px-[18px] py-[10px]">
            <button>Talk to sales</button>
          </div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}
        </div>
      </div>
    </div>
  );
}
