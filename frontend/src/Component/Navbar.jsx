import React from "react";
import { Link } from "react-router-dom";
import logo from "../Component/Assets/logo.png";

function Navbar() {
  return (
    <>
  <nav className=" flex flex-col gap-[6px] h-[80px] py-1 sm:h-[65px] w-full bg-[#0d6efd] px-2">
      <div className="flex justify-between sm:justify-around items-center mt-1 sm:mt-0 px-4 sm:px-10">
           <Link to="/" className="flex items-center text-white">
            <div className="w-8 sm:w-14">
              <img src={logo} alt="" className="max-w-full h-auto" />
            </div>
            <p className="font-bold text-xl sm:text-[24px] md:text-[27px] lg:text-[35px]"> Shopper</p>
          </Link>
          {/* Search box */}
          <div className="hidden sm:flex sm:justify-between bg-white sm:w-[40%] md:w-[37%] lg:w-[25%] sm:h-7 sm:rounded sm:px-2 ">
            <input type="text" placeholder="Search..." className="w-full border-0 outline-none rounded text-sm"/>
            <i className="fa-solid fa-magnifying-glass cursor-pointer  text-[#0d6efd] text-xl lg:text-xl"></i>
          </div>
     {/* menu */}
          <div className="flex items-center gap-3 ">
            <i className="fa-solid fa-user text-white text-base md:me-4 sm:text-lg md:text-xl lg:text-xl"></i>
            <span className="text-white text-base md:me-4 sm:text-lg md:text-xl lg:text-xl">
              Login
            </span>
            <div className="flex text-white text-base ">
              <i className="fa-solid fa-cart-shopping md:text-xl lg:text-xl"></i>
              <span className="mt-[-13px] ms-[1px]">0</span>
            </div>
          </div>
      </div>

       {/* Search box */}
       <div className="flex justify-between bg-white w-[85%] mx-auto h-7 rounded px-2 sm:hidden">
            <input type="text" placeholder="Search..." className="w-full border-0 outline-none ps-2 rounded text-sm"/>
            <i className="fa-solid fa-magnifying-glass cursor-pointer  text-[#0d6efd] text-xl lg:text-xl"></i>
          </div>
 </nav>

    </>
  );
}

export default Navbar;
