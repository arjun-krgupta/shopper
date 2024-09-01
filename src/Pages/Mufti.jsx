
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import allen_icon from '../Component/Assets/men/icon/allen-solly.png'
import mufti_icon from '../Component/Assets/men/icon/mufti.png'
import cobb_icon from '../Component/Assets/men/icon/cobb.png'
import adidas_icon from '../Component/Assets/men/icon/adidas.png'
import peter_icon from '../Component/Assets/men/icon/peter-england.png'
import nike_icon from '../Component/Assets/men/icon/nike.png'
import { hoodie, jeans, lower, pant, shirt, t_shirt } from '../Component/Product/All-men-data/All_Mufti';

function Mufti(props) {
    const redirect=useNavigate()
    return (
        <>
         {/* Men Clothes Brand icon */}
         <div className='flex justify-center items-center gap-4 w-full mt-2'>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/allen_solly')}}>
            <img src={allen_icon} alt="" className="max-w-full h-auto object-cover" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/mufti')}}>
            <img src={mufti_icon} alt="" className="max-w-full h-auto object-cover" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7 " onClick={()=>{redirect('/cobb')}}>
            <img src={cobb_icon} alt="" className="max-w-full h-auto object-cover" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/adidas')}}>
            <img src={adidas_icon} alt="" className="max-w-full h-auto object-cover" />
            </div>
           <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/peter_england')}}>
           <img src={peter_icon} alt="" className="max-w-full h-auto object-cover" />
           </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/nike')}}>
            <img src={nike_icon} alt="" className="max-w-full h-auto object-cover" />
            </div>
        </div>

        <h1 className='text-4xl font-semibold my-3 text-center md:text-5xl'>MUFTI</h1>
        
        <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer' onClick={()=>{redirect('/hoodie')}} >Hoodie</h4>
            <Link to='/hoodie' className=''>View all</Link>
            </div>
                {/* Hoodie */}
            <hr className='w-full' />
            <div className="flex justify-around overflow-x-scroll webkit w-full my-[10px]">
            {hoodie.map((val,i)=>
              <div className="flex flex-col items-center gap-2 px-3 w-36 sm:w-40 md:w-44 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer">{val.name}</div>
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

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer' onClick={()=>{redirect('/jeans')}} >Jeans</h4>
            <Link to='/jeans' className=''>View all</Link>
            </div>
                {/* Jeans */}
            <hr className='w-full' />
            <div className="flex justify-around overflow-x-scroll webkit w-full my-[10px]">
            {jeans.map((val,i)=>
              <div className="flex flex-col items-center gap-2 px-3 w-36 sm:w-40 md:w-44 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer">{val.name}</div>
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

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer' onClick={()=>{redirect('/shirt')}} >Shirt</h4>
            <Link to='/shirt' className=''>View all</Link>
            </div>
                {/* Shirt */}
            <hr className='w-full' />
            <div className="flex justify-around overflow-x-scroll webkit w-full my-[10px]">
            {shirt.map((val,i)=>
              <div className="flex flex-col items-center gap-2 px-3 w-36 sm:w-40 md:w-44 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer">{val.name}</div>
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

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer' onClick={()=>{redirect('/pant')}} >Pant</h4>
            <Link to='/pant' className=''>View all</Link>
            </div>
                {/* Pant */}
            <hr className='w-full' />
            <div className="flex justify-around overflow-x-scroll webkit w-full my-[10px]">
            {pant.map((val,i)=>
              <div className="flex flex-col items-center gap-2 px-3 w-36 sm:w-40 md:w-44 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer">{val.name}</div>
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

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer' onClick={()=>{redirect('/t-shirt')}} >T-Shirt</h4>
            <Link to='/t-shirt' className=''>View all</Link>
            </div>
                {/* T-shirt */}
            <hr className='w-full' />
            <div className="flex justify-around overflow-x-scroll webkit w-full my-[10px]">
            {t_shirt.map((val,i)=>
              <div className="flex flex-col items-center gap-2 px-3 w-36 sm:w-40 md:w-44 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer">{val.name}</div>
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

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer' onClick={()=>{redirect('/lower')}} >Lower</h4>
            <Link to='/lower' className=''>View all</Link>
            </div>
                {/* Lower */}
            <hr className='w-full' />
            <div className="flex justify-around overflow-x-scroll webkit w-full my-[10px]">
            {lower.map((val,i)=>
              <div className="flex flex-col items-center gap-2 px-3 w-36 sm:w-40 md:w-44 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer">{val.name}</div>
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

export default Mufti;