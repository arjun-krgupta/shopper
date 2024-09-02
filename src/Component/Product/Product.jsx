
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Product.css'
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
import m6 from "../Assets/men/shirt.jpeg";
import w1 from "../Assets/women/lahanga.jpeg";
import w2 from "../Assets/women/suit.jpeg";
import w3 from "../Assets/women/one-piece.jpeg";
import w4 from "../Assets/women/jeans.jpeg";
import w5 from "../Assets/women/shirt.jpeg";
import w6 from "../Assets/women/t-shirt.jpeg";

function Product(props) {
  const redirect=useNavigate()
  return (
    <>
     <div className="Product">
        {/* <h2>Our Products</h2> */}
        {/* Mobile */}
        <div className="mobile-area mt-3 mx-2 pb-3 ">
          <div className="flex justify-between items-center pt-3 pb-4 mx-4">
            <h3 className='font-bold text-base md:text-xl cursor-pointer hover:underline' onClick={()=>{redirect('/mobile')}}>Mobile Category</h3>
            <Link to="/mobile" className='text-green-600 hover:underline hover:text-green-600 text-sm md:text-base'>View all</Link>
          </div>
          <div className="flex justify-around overflow-x-scroll webkit w-full gap-2 px-2  py-2 sm:px-3">
              <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44" onClick={()=>{redirect("/realme")}}>
                <img src={realme} alt="" className='max-w-full h-auto' />
                <div className='text-sm font-bold md:text-xl'>Realme </div>
                <div className="flex justify-between items-center gap-4">
                  <div className="text-xs sm:text-sm md:text-base">₹13,000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹15,000</div>
                </div>
              </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44" onClick={()=>{redirect("/vivo")}}>
              <img src={vivo} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-bold md:text-xl'>Vivo</div>
              <div className="flex justify-between items-center gap-4">
                  <div className="text-xs sm:text-sm md:text-base">₹14,999</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹17,999</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44" onClick={()=>{redirect('/poco')}}>
              <img src={poco} alt="" className='max-w-full h-auto'  />
              <div className='text-sm font-bold md:text-xl'>Poco</div>
              <div className="flex justify-between items-center gap-4">
                  <div className="text-xs sm:text-sm md:text-base">₹14,000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹16,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44" onClick={()=>{redirect("/oppo")}}>
              <img src={oppo} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-bold md:text-xl'>Oppo</div>
              <div className="flex justify-between items-center gap-4">
                  <div className="text-xs sm:text-sm md:text-base">₹13,999</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹16,999</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44" onClick={()=>{redirect('/samsung')}}>
              <img src={samsung} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-bold md:text-xl'>Samsung</div>
              <div className="flex justify-between items-center gap-4">
                  <div className="text-xs sm:text-sm md:text-base">₹45,000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹50,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44 " onClick={()=>{redirect("/iphone")}}>
              <img src={iphone} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-bold md:text-xl'>Iphone</div>
              <div className="flex justify-between items-center gap-4">
                  <div className="text-xs sm:text-sm md:text-base">₹63,000"</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹79,000</div>
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
          <div className="flex justify-around overflow-x-scroll webkit w-full gap-2 px-2 py-1 sm:px-3">
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44" onClick={()=>{redirect('/hp')}}>
              <img src={l1} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-bold md:text-xl'>Hp</div>
              <div className='flex justify-between items-center gap-4'>
               <span className="text-xs sm:text-sm md:text-base">₹40,000</span>
               <span className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹45,000</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44"  onClick={()=>{redirect('/dell')}}>
              <img src={l2} alt=""  className='max-w-full h-auto' />
              <div className='text-sm font-bold md:text-xl'>Dell</div>
              <div className="flex justify-between items-center gap-4">
              <div  className="text-xs sm:text-sm md:text-base">₹45,000</div>
              <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹49,000</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44"  onClick={()=>{redirect("/lenovo")}}>
              <img src={l3} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>Lenovo </div>
              <div className="flex justify-between items-center gap-4">
              <div  className="text-xs sm:text-sm md:text-base">₹45,000</div>
              <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹49,000</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44"  onClick={()=>{redirect('/asus')}}>
              <img src={l4} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>Asus</div>
              <div className="flex justify-between items-center gap-4">
              <div  className="text-xs sm:text-sm md:text-base">₹45,000</div>
              <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹49,000</div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44"  onClick={()=>{redirect('/apple')}}>
              <img src={l5} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>Apple</div>
              <div className="flex justify-between items-center gap-4">
              <div  className="text-xs sm:text-sm md:text-base">₹45,000</div>
              <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹49,000</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44"  onClick={()=>{redirect('/acer')}}>
              <img src={l6} alt=""  className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>Acer</div>
              <div className="flex justify-between items-center gap-4">
              <div  className="text-xs sm:text-sm md:text-base">₹45,000</div>
              <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹49,000</div>
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
          <div className="flex justify-around overflow-x-scroll webkit w-full gap-2 px-2 py-2 sm:px-3" onClick={()=>{redirect('/hoodie')}}>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={m1} alt=""  className='max-w-full h-auto' />
            <div  className='text-sm font-bold md:text-xl'>Hoodie</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹1400</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹1700</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={m2} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-bold md:text-xl'>T-Shirt</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹1000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹1200</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={m3} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-bold md:text-xl'>Jeans </div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹2000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹2200</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={m4} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-bold md:text-xl'>Lower</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹500</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹700</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={m5} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-bold md:text-xl'>Pant</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹1100</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹1500</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={m6} alt=""  className='max-w-full h-auto' />
              <div  className='text-sm font-bold md:text-xl'>Shirt</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹1500</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹1700</div>
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
          <div className="flex justify-around overflow-x-scroll webkit w-full gap-2 px-2 py-2 sm:px-3">
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={w1} alt="" className='max-w-full h-auto' />
              <div className='text-sm font-bold md:text-xl'>Lahanga</div>
              <div className="flex gap-4">
                  <div className="text-xs sm:text-sm md:text-base">₹12,000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹15,000</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={w2} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>Suit</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹1500</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹1700</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={w3} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>One-piece </div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹2000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹2200</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={w4} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>Jeans</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹1500</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹1700</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={w5} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>Shirt</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹1000</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹1300</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-32 border border-gray-50 py-2 px-3 cursor-pointer hover:scale-[1.04] hover:transition rounded sm:w-36 md:w-44">
              <img src={w6} alt="" className='max-w-full h-auto'/>
              <div className='text-sm font-bold md:text-xl'>T-Shirt</div>
              <div className="flex gap-5">
                  <div className="text-xs sm:text-sm md:text-base">₹500</div>
                  <div className='text-xs line-through text-gray-600 sm:text-sm md:text-base'>₹700</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;