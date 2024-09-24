
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import realme from "../Assets/Mobile/Realme/realme 11x5g black.jpg";
import vivo from "../Assets/Mobile/Vivo/vivo T2 pro 5g.jpg";
import samsung from "../Assets/Mobile/Samsung/samsung A05.jpg";
import poco from "../Assets/Mobile/Poco/Poco C61.jpg";
import oppo from "../Assets/Mobile/Oppo/Oppo A17k.jpg";
import iphone from "../Assets/Mobile/Iphone/Apple iphone 12.jpg"
import l1 from "../Assets/Laptop/Hp/HP 250 G9 Intel Core i3.jpeg";
import l2 from "../Assets/Laptop/Dell/DELL 3540 Intel Core i3 12th Gen.jpeg";
import l3 from "../Assets/Laptop/Lenovo/Lenovo AMD Ryzen 5 Hexa Core 7530.jpeg";
import l4 from "../Assets/Laptop/Asus/ASUS Vivobook Go 15 Intel Celeron Dual Core N4020.jpeg";
import l5 from "../Assets/Laptop/Apple/i6.jpeg";
import l6 from "../Assets/Laptop/Acer/ac5.jpeg";
import m1 from "../Assets/men/Hoodie.jpeg";
import m2 from "../Assets/men/T-shirt.jpeg";
import m3 from "../Assets/men/jeans.jpeg";
import m4 from "../Assets/men/lower.jpeg";
import m5 from "../Assets/men/pant.jpeg";
import m6 from "../Assets/men/shirt.jpg";
import w1 from "../Assets/women/Lehenga.jpeg";
import w2 from "../Assets/women/suit-salwar.jpeg";
import w3 from "../Assets/women/one-piece.jpeg";
import w4 from "../Assets/women/suit.jpeg";
import w5 from "../Assets/women/gown.jpeg";
import w6 from "../Assets/women/t-shirt.jpeg";

function Product(props) {
  const redirect=useNavigate()
  return (
    <>
     <div className="Product">
        {/* <h2>Our Products</h2> */}
        {/* Mobile */}
        <div className="mobile-area mt-3 mx-2 pb-3 px-3 ">
          <div className="flex justify-between items-center pt-3 pb-4 mx-4">
            <h3 className='font-bold text-base md:text-xl cursor-pointer hover:underline' onClick={()=>{redirect('/mobile')}}>Mobile Category</h3>
            <Link to="/mobile" className='text-green-600 hover:underline hover:text-green-600 text-sm md:text-base'>View all</Link>
          </div>
          <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 lg:gap-4 py-2">
              <div className="flex flex-col gap-1 items-center border border-gray-50 px-1 py-1 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded" onClick={()=>{redirect("/realme")}}>
                <img src={realme} alt="" className='max-w-full h-auto' />
                <div className='text-sm font-semibold md:text-base lg:text-lg'>Realme </div>
                <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹13,000</div>
                </div>
              </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-1 px-1 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect("/vivo")}}>
              <img src={vivo} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Vivo</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹14,999</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-1 px-1 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/poco')}}>
              <img src={poco} alt="" className='max-w-full h-auto'  />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Poco</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹14,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-1 px-1 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect("/oppo")}}>
              <img src={oppo} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Oppo</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹13,999</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-1 px-1 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/samsung')}}>
              <img src={samsung} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Samsung</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹25,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-1 px-1 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded  " onClick={()=>{redirect("/iphone")}}>
              <img src={iphone} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Iphone</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹50,000</div>
                </div>
            </div>
          </div>
        </div>
        {/* laptop */}
        <div className="laptop-area mt-3 mx-2 pb-3">
          <div className="flex justify-between items-center pt-3 pb-4 mx-4">
            <h3 className='font-bold text-base cursor-pointer md:text-xl hover:underline' onClick={()=>{redirect('/laptop')}}>Laptops</h3>
            <Link to="/laptop"  className='text-green-600 hover:underline hover:text-green-600 text-sm md:text-base'>View all</Link>
          </div>
          <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 py-2 px-3">
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-2 px-2 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/hp')}}>
              <img src={l1} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Hp</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹40,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-2 px-2 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded "  onClick={()=>{redirect('/dell')}}>
              <img src={l2} alt=""  className='max-w-full h-auto' />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Dell</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹45,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-2 px-2 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded "  onClick={()=>{redirect("/lenovo")}}>
              <img src={l3} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Lenovo </div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start</div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹30,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-2 px-2 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded "  onClick={()=>{redirect('/asus')}}>
              <img src={l4} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Asus</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹40,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] items-center  border border-gray-50 py-2 px-2 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded "  onClick={()=>{redirect('/apple')}}>
              <img src={l5} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Apple</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start</div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹60,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center  border border-gray-50 py-2 px-2 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded "  onClick={()=>{redirect('/acer')}}>
              <img src={l6} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Acer</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base"> Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹45,000</div>
                </div>
            </div>
          </div>
        </div>
        {/* Mens */}
        <div className="men-area mt-3 mx-2 pb-3 ">
          <div className="flex justify-between items-center pt-3 pb-4 mx-4">
            <h3 className='font-bold text-base cursor-pointer md:text-xl hover:underline' onClick={()=>{redirect('/men')}}>Men Collection</h3>
            <Link to="/men" className='text-green-600 hover:underline hover:text-green-600 text-sm md:text-base'>View all</Link>
          </div>
          <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 lg:gap-4 py-2 px-3" >
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-100 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/hoodie')}}>
              <img src={m1} alt=""  className='max-w-full h-auto' />
            <div  className='text-sm font-semibold md:text-base lg:text-lg'>Hoodie</div>
            <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹1000</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-100 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/tshirt_men')}}>
              <img src={m2} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-semibold md:text-base lg:text-lg'>T-Shirt</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹900</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-100 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/jeans')}}>
              <img src={m3} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-semibold md:text-base lg:text-lg'>Jeans </div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹1200</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-100 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/lower')}}>
              <img src={m4} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-semibold md:text-base lg:text-lg'>Track Pants</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹500</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-50 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/pant')}}>
              <img src={m5} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Pant</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start</div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹1100</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-100 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/shirt')}}>
              <img src={m6} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-semibold md:text-base lg:text-lg'>Shirt</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹1500</div>
                </div>
            </div>
          </div>
        </div>
        {/* Women */}
        <div className="women-area mt-3 mx-2 pb-3">
          <div className="flex justify-between items-center pt-3 pb-4 mx-4">
            <h3 className='font-bold text-base cursor-pointer hover:underline md:text-xl' onClick={()=>{redirect('/women')}}>Women Collection</h3>
            <Link to="/women" className='text-green-600 hover:underline hover:text-green-600 text-sm md:text-base'>View all</Link>
          </div>
          <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 lg:gap-4 py-2 px-3">
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-50 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/lehenga')}}>
              <img src={w1} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Lehenga</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start </div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹12,000</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-50 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/suit-salwar')}}>
              <img src={w2} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Suit-Salwar</div>
              <div className="flex gap-5 lg:gap-4">
                  <div className="text-xs sm:text-sm lg:text-base">Start</div>
                  <div className='text-xs sm:text-sm lg:text-base'>₹1500</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-50 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/one-piece')}}>
              <img src={w3} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>One-piece </div>
              <div className="flex gap-5 lg:gap-4">
              <div className="text-xs sm:text-sm lg:text-base">Start</div>
              <div className='text-xs sm:text-sm lg:text-base'>₹2000</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-50 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/suit')}}>
              <img src={w4} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Suit</div>
              <div className="flex gap-5 lg:gap-4">
              <div className="text-xs sm:text-sm lg:text-base">Start</div>
              <div className='text-xs sm:text-sm lg:text-base'>₹1500</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-50 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/gown')}}>
              <img src={w5} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>Gown</div>
              <div className="flex gap-5 lg:gap-4">
              <div className="text-xs sm:text-sm lg:text-base">Start</div>
              <div className='text-xs sm:text-sm lg:text-base'>₹1000</div>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-1 items-center  border border-gray-50 cursor-pointer hover:scale-[1.01] hover:transition[0.3s] rounded " onClick={()=>{redirect('/tshirt_women')}}>
              <img src={w6} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-semibold md:text-base lg:text-lg'>T-Shirt</div>
              <div className="flex gap-5 lg:gap-4">
              <div className="text-xs sm:text-sm lg:text-base">Start</div>
              <div className='text-xs sm:text-sm lg:text-base'>₹800</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;