import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import allen_solly from '../Component/Product/All-men-data/All_data';

function Men(props) {
  const redirect=useNavigate()
    return (
        <>
        <h1 className='text-4xl font-bold my-3 text-center md:text-6xl'>Shop by Brand</h1>
        <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px]' onClick={()=>{redirect('/allen_solly')}} >Allen Solly</h4>
            <Link to='/allen_solly' className=''>View all</Link>
            </div>
                {/* Realme */}
            <hr className='w-full' />
            <div className="flex justify-around overflow-x-scroll webkit w-full my-[10px]">
            {allen_solly.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-44 md:h-32 px-3 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-sm">{val.name}</div>
               </div>
                <div className="flex gap-2">
                    <div className="text-sm px-1 bg-green-700 text-white">{val.rating}☆</div>
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