
import React from 'react';
import laptop_slider from '../../Component/Assets/Slider/laptop slider.jpg'
import hp from '../../Component/Assets/Laptop/icon/hp.jpg';
import asus from '../../Component/Assets/Laptop/icon/asus.jpg';
import dell from '../../Component/Assets/Laptop/icon/dell.jpg';
import lenovo from '../../Component/Assets/Laptop/icon/lenovo.jpg';
import apple from '../../Component/Assets/Laptop/icon/apple.jpg';
import acer from '../../Component/Assets/Laptop/icon/acer.jpg';
import { useNavigate } from 'react-router-dom';
import apple_laptop from '../../Component/Product/All-laptop-data/Apple';



function Apple(props) {
    const redirect =useNavigate()
    return (
       <>
          {/* laptop Brands */}
          <div className='flex justify-center items-center gap-1 w-full mt-3'>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-1 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/hp')}}>
            <img src={hp} alt="" className="max-w-full h-auto " />
            </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-1 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/asus')}}>
            <img src={asus} alt="" className="max-w-full h-auto" />
            </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-1 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition " onClick={()=>{redirect('/dell')}}>
            <img src={dell} alt="" className="max-w-full h-auto" />
            </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-1 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/lenovo')}}>
            <img src={lenovo} alt="" className="max-w-full h-auto" />
            </div>
           <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-1 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/apple')}}>
           <img src={apple} alt="" className="max-w-full h-auto" />
           </div>
            <div className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer lg:me-7 sm:hover:scale-[1.05] sm:hover:transition" onClick={()=>{redirect('/acer')}}>
            <img src={acer} alt="" className="max-w-full h-auto" />
            </div>
        </div>
        {/* Banner */}
         <div className='w-100 h-auto mt-3'>
              <img src={laptop_slider} alt="" className='max-w-100 h-auto'/>
         </div>
         {/* lenovo laptops content */}
       <div className='mt-3'>
            {
                apple_laptop.map((val,ind)=>
                    <div className="flex justify-center sm:gap-3 md:gap-8 lg:gap-10 bg-white pt-2 pb-3 mb-3 w-full cursor-pointer border-bottom" key={ind}>
                <div className="w-[20%] sm:w-[30%] md:w-[25%] lg:w-[22%]">
                    <img src={val.image} alt="" className='max-w-full h-auto'/>
                </div>
                <div className="flex flex-col gap-1 w-[58%] sm:w-[50%] lg:w-[40%]">
                    <h5 className='hover:text-blue-600 font-bold text-base md:text-lg'>{val.name}</h5>
                    <div className="flex gap-1 text-sm text-gray-500">
                        <button className='bg-green-600 text-white py-[1px] px-[2px] rounded'>{val.rating}</button>
                        <div>{val.review}</div>
                    </div>
                    <ul className='list-disc ms-3 text-sm'>
                        <li>{val.description.d1}</li>
                        <li>{val.description.d2}</li>
                        <li>{val.description.d3}</li>
                        <li>{val.description.d4}</li>
                        <li>{val.description.d5}</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-[2px]">
                    <h6 className='text-lg md:text-xl font-bold'>{val.new_price}</h6>
                    <div className="text-gray-600 line-through text-sm md:text-base">{val.old_price}</div>
                    <div className='text-green-700 text-xs md:text-sm'>{val.offer}</div>
                </div> 
                </div>
           
                )
            }
            </div>
       </>
    );
}

export default Apple;