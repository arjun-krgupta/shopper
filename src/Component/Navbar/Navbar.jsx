import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  // const[state,setState]= useState({
  //   className:"flex justify-between w-[80%] border bg-white ps-4 pe-2 mx-auto rounded sm:hidden"
  // })
  // const searchBar=()=>
  // {
  //   if(state.className==="sm:hidden")
  //   {
  //     setState({className:"sm:flex sm:justify-between sm:w-[35%] sm:pe-2 sm:border bg-white sm:ps-2 rounded sm:mx-auto sm:block sm:absolute top-5 left-52 md:left-[250px] lg:left-[360px] "})
  //   }
  //   else{
  //     setState({className:"sm:hidden"})
  //   }
  // }
  return (
    <>
  <nav className=" flex flex-col gap-2 h-[80px] py-1 sm:h-[65px] w-full bg-[#0d6efd] md:px-3 lg:px-14">
      <div className="flex justify-around items-center">
           <Link to="/" className="flex items-center text-white">
            <div className="w-8 sm:w-14">
              <img src={logo} alt="" className="max-w-full h-auto" />
            </div>
            <p className="font-bold text-xl sm:text-[24px] md:text-[27px] lg:text-[35px]"> Shopper</p>
          </Link>
          {/* Search box */}
          <div className="hidden sm:flex sm:justify-between bg-white sm:w-[35%] md:w-[33%] lg:w-[25%] sm:h-7 sm:rounded sm:pe-2">
            <input type="text" placeholder="Search..." className="w-full border-0 outline-none ps-3 rounded text-sm"/>
            <i className="fa-solid fa-magnifying-glass cursor-pointer  text-[#0d6efd] text-xl lg:text-[20px]"></i>
          </div>
     {/* menu */}
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-user text-white text-base sm:text-lg md:text-xl lg:me-5 lg:text-[22px]"></i>
            <span className="text-white text-base sm:text-lg md:text-xl lg:me-5 lg:text-[22px]">
              Login
            </span>
            <div className="flex text-white text-base ">
              <i className="fa-solid fa-cart-shopping md:text-xl lg:text-[22px]"></i>
              <span className="mt-[-13px] ms-[1px]">0</span>
            </div>
          </div>
      </div>

       {/* Search box */}
       <div className="flex justify-between bg-white w-[75%] mx-auto h-7 rounded pe-2 sm:hidden">
            <input type="text" placeholder="Search..." className="w-full border-0 outline-none ps-3 rounded text-sm"/>
            <i className="fa-solid fa-magnifying-glass cursor-pointer  text-[#0d6efd] text-xl lg:text-[20px]"></i>
          </div>
 </nav>

    </>
  );
}

export default Navbar;
