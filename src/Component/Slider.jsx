import React from 'react';
// import realme from '../Component/Assets/Slider/realme_12-pro-5g-removebg-preview.png'
function Slider(props) {
    return (
      <>
   
    <div className="flex justify-around items-center bg-[#646571] py-3 mt-3 h-[347px]">
           <div className='flex flex-col items-center gap-6 w-[60%]'>
           <h2 className='font-bold text-center text-4xl italic text-white'>Realme Smartphones</h2> 
           <h1 className='text-4xl uppercase font-bold text-white'>realme 12 Pro 5G | 8GB | 128GB</h1>
               <span className='text-center text-2xl text-white'>UPTO 15% OFF</span>
               {/* <span className='text-center text-2xl text-white'>JUST 40,000</span> */}
                <button className='bg-white text-yellow-600 p-3 uppercase font-bold'>shop Now</button>
              </div>
               <div className="w-[30%] mt-1">
               <img src='' alt=""  className='max-w-full h-auto '/>
               </div>
           </div>
          </>
    );
}

export default Slider;