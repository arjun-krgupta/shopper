import React from 'react';
import suitSalwar_product from '../../Component/Product/All-women-data/Suit_Salwar';
import lehenga_icon from '../../Component/Assets/women/icon/Lehenga.jpeg'
import gown_icon from '../../Component/Assets/women/icon/gown.jpeg'
import onePiece_icon from '../../Component/Assets/women/icon/one-piece.jpeg'
import suitSalwar_icon from '../../Component/Assets/women/icon/suit-salwar.jpeg'
import suit_icon from '../../Component/Assets/women/icon/suit.jpeg'
import tShirt_icon from '../../Component/Assets/women/icon/t-shirt.jpeg'
import { useNavigate } from 'react-router-dom';

function Salwar_suit(props) {
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
        <hr className='w-full pt-[1px] mt-2 mx-auto'/>

        <div className="flex justify-center gap-3 flex-wrap overflow-x-scroll webkit w-full mt-4 mb-1 px-5">
            {suitSalwar_product.map((val,i)=>
              <div className="flex flex-col my-2 items-center gap-2 w-36 sm:w-40 md:w-60" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-3">
                    <div className="text-sm font-semibold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                    <div className="text-xs text-green-500">{val.offer}</div>
                </div>
                <div className='text-sm text-gray-500'>Size : {val.size}</div>
              </div>
            )}
          </div>
        </>
    );
}

export default Salwar_suit;