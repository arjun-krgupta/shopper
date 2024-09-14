
import React from 'react';
import slider1 from '../Component/Assets/Slider/full-shot-pretty-woman-smiling-removebg-preview (1).png'

const Slider = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-3">
        <div className="bg-yellow-400 flex items-center justify-around p-10">
          <div>
            <h2 className="text-white text-3xl font-bold mb-4 italic">Women Clothes</h2>
            <p className="text-white text-4xl font-semibold ">
              GOWN | LEHENGA | T-SHIRT | SUIT
            </p>
            <p className="text-white text-md mt-2">UPTO 10% OFF</p>
            <button className="mt-4 bg-white text-yellow-400 font-bold py-2 px-4 rounded">
              EXPLORE NOW
            </button>
          </div>
          <div>
            <img
              src={slider1}
              alt="Women Clothes Banner"
              className="h-64"
            />
          </div>
        </div>
    </div>
  );
};

export default Slider;
