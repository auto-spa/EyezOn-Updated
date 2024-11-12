// hero.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar1';

const HeroU = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero-car.jpg")' }}>
        
        
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50">
        
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-[#912ED9]">Your Prize,</span> Our Passion
        </h1>
        <p className="text-lg md:text-xl mt-4">Services By The Best Detailers in Charlotte NC</p>
        <a href='/about-us'>
        <button className="mt-6 px-6 py-3 bg-[#912ED9] text-white font-semibold rounded-md hover:bg-purple-600 transition">
          Learn More
        </button>
        </a>
      </div>
    </div>
  );
};

export default HeroU;
