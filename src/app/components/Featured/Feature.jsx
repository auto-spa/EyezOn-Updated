// Featured.jsx
"use client";
import React from "react";

const Featured = () => {
  return (
    <div
      className="relative bg-purple-600 text-white p-8 md:p-16 overflow-hidden"
      style={{
        clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
      }}
    >
      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 lg:w-[61%] mb-8 md:mb-0 md:pr-8">
          <div className="text-xs font-semibold tracking-widest uppercase bg-black bg-opacity-50 inline-block px-3 py-1 mb-4 mt-8 sm:mt-0 ">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Red Fury</h2>
          <blockquote className="italic mb-4 text-lg text-gray-300">
            "It looks shinier now than when I picked it up new from the
            dealership"
          </blockquote>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            That’s what Randall – the owner of this stunning Mercedes-Benz C63 S
            AMG said once we completed the Ceramic Coating package. Most people
            aren’t aware that even brand-new vehicles from dealerships already
            have imperfections in the paint.
          </p>
          <a href="/gallery">
          <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-purple-700 transition">
            View Portfolio
          </button>
          </a>
        </div>

        {/* Video Section */}
        <div className="md:w-1/2 lg:w-5/12 flex justify-center md:justify-end">
          <div className="relative w-3/4  md:w-[300px] lg:w-[300px] xl:w-[300px] h-72 md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mx-auto mb-8">
            <video
              src=""
              controls
              className="w-full h-full object-cover rounded-lg"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
