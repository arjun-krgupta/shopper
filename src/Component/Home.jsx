import React from "react";
import {useNavigate } from "react-router-dom";
import mobile from "../Component/Assets/Front icon/phones.png";
import laptop from "../Component/Assets/Front icon/laptop.png";
import men from "../Component/Assets/Front icon/man-removebg-preview.png";
import women from "../Component/Assets/Front icon/women.png";
import slide1 from '../Component/Assets/Slider/mobile-banner.png'
import slide2 from '../Component/Assets/Slider/laptop banner.png'
import slide3 from '../Component/Assets/Slider/man banner.png'
import slide4 from '../Component/Assets/Slider/woman banner.png'

import Product from "../Component/Product/Product";
// import Slider from "../Slider";

function Home(props) {
 const redirect=useNavigate()
  return (
    <>
      {/* front-view */}
      <div className="flex justify-center items-center gap-2 mt-3 lg:mt-4" >
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer  sm:me-3 md:me-7 lg:me-32" onClick={()=>{redirect('/mobile')}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={mobile} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-sm md:text-base'>Mobile</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer sm:me-3 md:me-7 lg:me-24" onClick={()=>{redirect("/laptop")}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={laptop} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-sm md:text-base'>Laptop</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer sm:me-3 md:me-7 lg:me-24" onClick={()=>{redirect("/men")}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={men} alt="" className="max-w-full h-auto" />
            </div>
          <p className='text-sm md:text-base'>Men</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer sm:" onClick={()=>{redirect("/women")}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={women} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-sm md:text-base'>Women</p>
        </div>
      </div>
   
      {/* Slider */}
      <div id="carouselExampleIndicators" className="carousel slide mt-1" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide1}
              className="img-fluid max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide2}
              className="img-fluid max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide3}
              className="img-fluid max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide4}
              className="img-fluid max-w-100 h-auto "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
       <Product/>
       {/* <Slider/> */}
       
    </>
  );
}

export default Home;
