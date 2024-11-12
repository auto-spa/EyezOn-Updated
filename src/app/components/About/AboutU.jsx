// AboutUs.jsx
"use client";
import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-8 md:p-16 pb-32">
      
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        {/* Main Image */}
        <div className="w-56 h-64 md:w-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/s51.png"
            alt="Car Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Overlapping Image with Arbitrary Margin for Custom Positioning */}
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg -mt-[-10rem] -ml-[2rem] md:-mt-[-14rem] md:-ml-[5rem]">
          <img
            src="/images/s52.png"
            alt="Car Interior"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-sm font-semibold text-[#912ED9] uppercase mb-2">About Us</h4>
        <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-4">Discover How We Bring Outstanding Excellence to Car Detailing!</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
        At Eyez at the Prize Auto Spa, we specialize in top-class mobile auto detailing services in Charlotte, NC, catering to vehicles and boats with recognized interest in detail. Our complete car cleaning and detailing services in Charlotte are designed to give your vehicle a new life from the inside out. We provide professional boat waxing and polishing services in Charlotte, making sure your boat looks great on the water. 
        </p>
        <p className="text-gray-600 leading-relaxed">
        Our car exterior cleaning services carefully remove every part of the dirt, while our interior and exterior detailing services in Charlotte repair your car to showroom condition. Trust us to enhance your vehicle’s look and protect its value with our expert detailing strategies. Choose Eyez on the Prize Auto Spa for excellence in every detail.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
