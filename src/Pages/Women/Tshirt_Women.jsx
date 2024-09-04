import React from 'react';
import tshirt_Women from '../../Component/Product/All-women-data/T-shirt';


function Tshirt_Women(props) {
    return (
        <>
        <div className="flex justify-center gap-5 flex-wrap overflow-x-scroll webkit w-full mt-4 mb-1">
            {tshirt_Women.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-48" key={i}>
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

export default Tshirt_Women;