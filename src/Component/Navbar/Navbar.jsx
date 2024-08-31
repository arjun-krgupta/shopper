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
      <div className="flex flex-col w-full h-[85px] sm:h-[72px] bg-[#0d6efd]">
        <div className="flex justify-between p-2 px-3 items-center w-full cursor-pointer">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center text-white sm:ps-2 md:ps-6 lg:ps-20"
          >
            <div className="w-8 sm:w-12 md:w-14">
              <img src={logo} alt="" className="max-w-full h-auto" />
            </div>
            <p className="font-bold text-xl sm:text-2xl md:text-[27px] lg:text-[35px]">
              Shopper
            </p>
          </Link>
          {/* menu */}
          <div className="flex items-center gap-3 md:pe-4 lg:pe-20">
            {/* <i className="fa-solid fa-magnifying-glass cursor-pointer text-base text-white hidden sm:text-lg sm:block md:text-xl lg:me-3"></i> */}
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
        {/* search box */}
        <div className="flex justify-between w-[80%] border bg-white ps-4 pe-2 mx-auto rounded sm:w-[35%] sm:absolute top-5 left-52 md:left-[250px] lg:left-[450px] lg:w-[30%]" >
          <input type="text" placeholder="Search..." className="border-0 outline-none" />
          <i className="fa-solid fa-magnifying-glass cursor-pointer  text-[#0d6efd] text-xl lg:text-2xl"></i>
         </div>

        {/* <div className="flex justify-between w-full bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="border-0 outline-none"
          />
          <i className="fa-solid fa-magnifying-glass cursor-pointer bg-black  text-[#fff] text-xl lg:text-2xl"></i>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
