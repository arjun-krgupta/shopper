import React from 'react';
import laptop_slider from '../Component/Assets/Slider/laptop slider.jpg'
import hp from '../Component/Assets/Laptop/icon/hp.jpg';
import asus from '../Component/Assets/Laptop/icon/asus.jpg';
import dell from '../Component/Assets/Laptop/icon/dell.jpg';
import lenovo from '../Component/Assets/Laptop/icon/lenovo.jpg';
import apple from '../Component/Assets/Laptop/icon/apple.jpg';
import acer from '../Component/Assets/Laptop/icon/acer.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import hp_product, { acer_product, apple_product, asus_product, lenovo_product } from '../Component/Product/All-laptop-data/All_laptop_data';
import { dell_product } from '../Component/Product/All-laptop-data/All_laptop_data';

function Laptop(props) {
    const redirect =useNavigate()
    return (
        <>
            {/* laptop Brands */}
        <div className='flex justify-center items-center gap-2 w-full mt-3'>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/hp')}}>
            <img src={hp} alt="" className="max-w-full h-auto " />
            </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/asus')}}>
            <img src={asus} alt="" className="max-w-full h-auto" />
            </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition " onClick={()=>{redirect('/dell')}}>
            <img src={dell} alt="" className="max-w-full h-auto" />
            </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/lenovo')}}>
            <img src={lenovo} alt="" className="max-w-full h-auto" />
            </div>
           <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/apple')}}>
           <img src={apple} alt="" className="max-w-full h-auto" />
           </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/acer')}}>
            <img src={acer} alt="" className="max-w-full h-auto" />
            </div>
        </div>
        {/* Banner */}
         <div className='w-100 h-auto mt-3'>
              <img src={laptop_slider} alt="" className='max-w-100 h-auto'/>
         </div>
         {/* Hp */}
         <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/hp')}} >Hp Laptops</h4>
            <Link to='/hp' className='text-green-600 hover:underline hover:text-green-600'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3">
            {hp_product.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:scale-[1.01] hover:transition[0.3s]" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.Detail})</div>
               </div>
                <div className="flex gap-2">
                    <div className="text-sm px-1 bg-green-700 text-white">{val.rating}</div>
                    <div className="text-xs">({val.review})</div>
                </div>
                <div className="flex gap-4">
                    <div className="text-sm">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>
          {/* Dell */}
          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/dell')}} >Dell Laptops</h4>
            <Link to='/dell' className='text-green-600 hover:underline hover:text-green-600'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3">
            {dell_product.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:scale-[1.01] hover:transition[0.3s] " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.Detail})</div>
               </div>
                <div className="flex gap-2">
                    <div className="text-sm px-1 bg-green-700 text-white">{val.rating}</div>
                    <div className="text-xs">({val.review})</div>
                </div>
                <div className="flex gap-3">
                    <div className="text-sm">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>
             {/* Lenovo */}
             <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/lenovo')}}>Lenovo Laptops</h4>
            <Link to='/lenovo' className='text-green-600 hover:underline hover:text-green-600'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3">
            {lenovo_product.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:scale-[1.01] hover:transition[0.3s] " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.Detail})</div>
               </div>
                <div className="flex gap-2">
                    <div className="text-sm px-1 bg-green-700 text-white">{val.rating}</div>
                    <div className="text-xs">({val.review})</div>
                </div>
                <div className="flex gap-3">
                    <div className="text-sm">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>
           {/* Asus */}
           <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/asus')}}>Asus Laptops</h4>
            <Link to='/asus' className='text-green-600 hover:underline hover:text-green-600'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3">
            {asus_product.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:scale-[1.01] hover:transition[0.3s] " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.Detail})</div>
               </div>
                <div className="flex gap-2">
                    <div className="text-sm px-1 bg-green-700 text-white">{val.rating}</div>
                    <div className="text-xs">({val.review})</div>
                </div>
                <div className="flex gap-3">
                    <div className="text-sm">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>
            {/* Acer */}
            <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/acer')}}>Acer Laptops</h4>
            <Link to='/acer' className='text-green-600 hover:underline hover:text-green-600'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3">
            {acer_product.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:scale-[1.01] hover:transition[0.3s] " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.Detail})</div>
               </div>
                <div className="flex gap-2">
                    <div className="text-sm px-1 bg-green-700 text-white">{val.rating}</div>
                    <div className="text-xs">({val.review})</div>
                </div>
                <div className="flex gap-3">
                    <div className="text-sm">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>
          {/* Apple */}
          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/apple')}}>Apple Laptops</h4>
            <Link to='/apple' className='text-green-600 hover:underline hover:text-green-600'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3">
            {apple_product.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:scale-[1.01] hover:transition[0.3s] " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.Detail})</div>
               </div>
                <div className="flex gap-2">
                    <div className="text-sm px-1 bg-green-700 text-white">{val.rating}</div>
                    <div className="text-xs">({val.review})</div>
                </div>
                <div className="flex gap-3">
                    <div className="text-sm">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>

        </>
    );
}

export default Laptop;