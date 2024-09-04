import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import lehenga, { gown, one_piece, suit, suit_salwar, tshirt_Women} from '../Component/Product/All-women-data/All_Women_data';
import lehenga_icon from '../Component/Assets/women/icon/Lehenga.jpeg'
import gown_icon from '../Component/Assets/women/icon/gown.jpeg'
import onePiece_icon from '../Component/Assets/women/icon/one-piece.jpeg'
import suitSalwar_icon from '../Component/Assets/women/icon/suit-salwar.jpeg'
import suit_icon from '../Component/Assets/women/icon/suit.jpeg'
import tShirt_icon from '../Component/Assets/women/icon/t-shirt.jpeg'

function Women(props) {
  const redirect=useNavigate()
    return (
        <>
        {/* Women Clothes icon */}
        <div className='flex justify-center items-center gap-4 w-full mt-2'>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/lehenga')}}>
            <img src={lehenga_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/gown')}}>
            <img src={gown_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7 " onClick={()=>{redirect('/one-piece')}}>
            <img src={onePiece_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/suit-salwar')}}>
            <img src={suitSalwar_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            </div>
           <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/suit')}}>
           <img src={suit_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
           </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/tshirt_women')}}>
            <img src={tShirt_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            </div>
        </div>

        <h1 className='text-4xl font-bold my-3 text-center md:text-5xl'>Shop by Categories</h1>
        
        <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-5">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/lehenga')}} >Lehenga</h4>
            <Link to='/lehenga' className=''>View all</Link>
            </div>
                {/* Lehenga*/}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {lehenga.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                {/* <div className="text-sm text-gray-400">{val.brand}</div> */}
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
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
        <div className="flex justify-between items-center px-5">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/gown')}} >Gown</h4>
            <Link to='/gown' className=''>View all</Link>
            </div>
                {/* Gown */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {gown.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                {/* <div className="text-sm text-gray-400">{val.brand}</div> */}
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
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
        <div className="flex justify-between items-center px-5">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/one-piece')}} >One Piece</h4>
            <Link to='/one-piece' className=''>View all</Link>
            </div>
                {/* One Piece */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {one_piece.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                {/* <div className="text-sm text-gray-400">{val.brand}</div> */}
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
        <div className="flex justify-between items-center px-5">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/suit-salwar')}} >Salwar Suit</h4>
            <Link to='/suit-salwar' className=''>View all</Link>
            </div>
                {/* Salwar Suit */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {suit_salwar.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                {/* <div className="text-sm text-gray-400">{val.brand}</div> */}
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
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
        <div className="flex justify-between items-center px-5">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/suit')}} >Suit</h4>
            <Link to='/suit' className=''>View all</Link>
            </div>
                {/* Suit */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {suit.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                {/* <div className="text-sm text-gray-400">{val.brand}</div> */}
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
        <div className="flex justify-between items-center px-5">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/tshirt_women')}} >T-Shirt</h4>
            <Link to='/tshirt_women' className=''>View all</Link>
            </div>
                {/* T-Shirt */}
            <hr className='w-full' />
            <div className="flex justify-center gap-4 overflow-x-scroll webkit w-full my-[10px]">
            {tshirt_Women.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                {/* <div className="text-sm text-gray-400">{val.brand}</div> */}
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
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

export default Women;