import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import allen_solly, { adidas, Cobb, mufti, nike, peter_england } from '../Component/Product/All-men-data/All_data';
import allen_icon from '../Component/Assets/men/icon/allen-solly.png'
import mufti_icon from '../Component/Assets/men/icon/mufti.png'
import cobb_icon from '../Component/Assets/men/icon/cobb.png'
import adidas_icon from '../Component/Assets/men/icon/adidas.png'
import peter_icon from '../Component/Assets/men/icon/peter-england.png'
import nike_icon from '../Component/Assets/men/icon/nike.png'

function Men(props) {
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

        <h1 className='text-4xl font-bold my-3 text-center md:text-6xl'>Shop by Brand</h1>
        
        <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/allen_solly')}} >Allen Solly</h4>
            <Link to='/allen_solly' className=''>View all</Link>
            </div>
                {/* Allen Solly */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {allen_solly.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48" key={i}>
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/mufti')}} >Mufti</h4>
            <Link to='/mufti' className=''>View all</Link>
            </div>
                {/* Mufti */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {mufti.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48" key={i}>
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/cobb')}} >Cobb Italy</h4>
            <Link to='/cobb' className=''>View all</Link>
            </div>
                {/* Cobb */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {Cobb.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48" key={i}>
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/adidas')}} >Adidas</h4>
            <Link to='/adidas' className=''>View all</Link>
            </div>
                {/* Adidas */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {adidas.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48 " key={i}>
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/peter_england')}} >Peter England</h4>
            <Link to='/peter_england' className=''>View all</Link>
            </div>
                {/* Peter England */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {peter_england.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48 " key={i}>
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/nike')}} >Nike</h4>
            <Link to='/nike' className=''>View all</Link>
            </div>
                {/* Nike */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {nike.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48 " key={i}>
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

export default Men;