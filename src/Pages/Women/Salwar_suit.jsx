import React from 'react';
import suitSalwar_product from '../../Component/Product/All-women-data/Suit_Salwar';

function Salwar_suit(props) {
    return (
        <>
        <div className="flex justify-center gap-3 flex-wrap overflow-x-scroll webkit w-full mt-4 mb-1 px-5">
            {suitSalwar_product.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-60" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
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