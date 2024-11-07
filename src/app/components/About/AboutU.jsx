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
        <h4 className="text-sm font-semibold text-purple-600 uppercase mb-2">About Us</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Passion Meets Experience</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae lacinia sapien. Fusce tincidunt bibendum risus, sed venenatis massa pellentesque et. Duis felis odio, laoreet non viverra vel, commodo id elit.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Praesent eros diam, molestie eget condimentum eget, tempus nec nisi. Nullam fermentum gravida mi, non interdum augue egestas vel. Nullam eget rhoncus ex. Ut sed dolor dui.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
