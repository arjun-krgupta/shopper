import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import realme,{ iphone, oppo, poco, samsung, vivo } from '../Component/Product/All-mobile-data/All_Mobile_product';
import sl1 from '../Component/Assets/Slider/1.jpg'
import sl2 from '../Component/Assets/Slider/2.jpg'
import sl3 from '../Component/Assets/Slider/3.jpg'
import sl4 from '../Component/Assets/Slider/4.jpg'
import sl5 from '../Component/Assets/Slider/5.jpg'
import sl6 from '../Component/Assets/Slider/6.jpg'
import sl7 from '../Component/Assets/Slider/7.jpg'
import m1 from '../Component/Assets/Mobile/icon/realme.png'
import m2 from '../Component/Assets/Mobile/icon/iphone.png'
import m3 from '../Component/Assets/Mobile/icon/oppo.png'
import m4 from '../Component/Assets/Mobile/icon/poco.png'
import m5 from '../Component/Assets/Mobile/icon/samsung.jpg'
import m6 from '../Component/Assets/Mobile/icon/vivo.png'


function Mobile(props) {
  const redirect=useNavigate()
    return (
        <>
        {/* Mobile icon */}
          <div className='flex justify-center items-center gap-2 w-full mt-2'>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/realme')}}>
            <img src={m1} alt="" className="max-w-full h-auto rounded-full" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/iphone')}}>
            <img src={m2} alt="" className="max-w-full h-auto rounded-full" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7 " onClick={()=>{redirect('/oppo')}}>
            <img src={m3} alt="" className="max-w-full h-auto rounded-full" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/poco')}}>
            <img src={m4} alt="" className="max-w-full h-auto rounded-full" />
            </div>
           <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/samsung')}}>
           <img src={m5} alt="" className="max-w-full h-auto rounded-full" />
           </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/vivo')}}>
            <img src={m6} alt="" className="max-w-full h-auto rounded-full" />
            </div>
        </div>
       {/* Realme */}
       <h1 className='text-4xl font-bold my-3 text-center md:text-6xl'>Shop by Brand</h1>
 {/* Slider */}
 <div id="carouselExampleIndicators" className="carousel slide mt-1" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={sl1}
              className="img-fluid  max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sl2}
              className="img-fluid  max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sl3}
              className="img-fluid  max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sl4}
              className="img-fluid  max-w-100 h-auto "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sl5}
              className="img-fluid  max-w-100 h-auto "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sl6}
              className="img-fluid  max-w-100 h-auto "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sl7}
              className="img-fluid  max-w-100 h-auto "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-4">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/realme')}} >Realme Smartphones</h4>
            <Link to='/Realme' className=''>View all</Link>
            </div>
                {/* Realme */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-[10px] px-3">
            {realme.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-44 px-2 " key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.detail})</div>
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
          {/* Vivo */}
          <hr className='w-full' />
        <div className="flex justify-between items-center px-4">
        <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/vivo')}}>Vivo Smartphones</h4>
            <Link to='/vivo'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-[10px] px-3">
            {vivo.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-44 px-2" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className=" text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.detail})</div>
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
          {/* Samsung */}
          <hr className='w-full' />
        <div className="flex justify-between items-center px-4">
        <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/samsung')}}>Samsung Smartphones</h4>
            <Link to='/samsung'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-[10px] px-3">
            {samsung.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-44 px-2" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className=" text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.detail})</div>
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
           {/* Poco */}
           <hr className='w-full' />
        <div className="flex justify-between items-center px-4">
        <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/poco')}}>Poco Smartphones</h4>
            <Link to='/poco'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-[10px] px-3">
            {poco.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-44 px-2" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className=" text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.detail})</div>
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
           {/* Oppo */}
           <hr className='w-full' />
        <div className="flex justify-between items-center px-4">
        <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/oppo')}}>Oppo Smartphones</h4>
            <Link to='/oppo'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-[10px] px-3">
            {oppo.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-44 px-2" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className=" text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.detail})</div>
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
           {/* Iphone */}
           <hr className='w-full' />
        <div className="flex justify-between items-center px-4">
        <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/iphone')}}>Apple Smartphones</h4>
            <Link to='/iphone'>View all</Link>
            </div>
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-[10px] px-3">
            {iphone.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-44 px-2" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className=" text-sm font-bold">{val.name}</div>
                <div className="text-sm">({val.detail})</div>
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

export default Mobile;