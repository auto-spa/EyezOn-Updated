// Testimonials.jsx
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Travis Timmons",
    review: "One of the best! Professional, reliable, honest. Sometimes I don’t even see him on appointments and just leave the car open and always come back to an immaculate vehicle.",
  },
  {
    name: "Sarah Dam",
    review: "I had the pleasure of working with Jacob for my car service, and I couldn’t be more satisfied. Jacob was punctual and worked diligently to make my car look brand new again. I highly recommend Jacob for any detailing needs.",
  },
  {
    name: "Mizz Drea",
    review: "5 stars for sure! What is better than getting top-notch service, without having to leave your home! Eyez On The Prize has provided outstanding service for my vehicles on multiple occasions and each time, I’ve been impressed.",
  },
  {
    name: "Alex Brown",
    review: "Fantastic experience! The detailing was impeccable and truly exceeded my expectations. I’m definitely booking again for future needs.",
  },
  {
    name: "Linda Grey",
    review: "Great service, friendly staff, and amazing attention to detail. My car looks brand new, and I couldn’t be happier. Highly recommended!",
  },
  {
    name: "John Doe",
    review: "Professional and thorough service. I loved the result, and they really paid attention to every detail. Worth every penny!",
  },
];

const TestimonialsU = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Display three testimonials at a time
  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div
      className="relative bg-purple-600 text-white py-16 px-4 overflow-hidden"
      style={{
        clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        {/* Section Title with Background Label */}
        <div className="text-left w-full max-w-[960px]">
          <div className="text-xs font-semibold tracking-widest uppercase bg-black bg-opacity-50 inline-block px-3 py-1 mb-4">
            Testimonials · 5 Star Rated
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">What Our Clients Say</h2>
          <p className="text-gray-300 mb-10 text-left">
            Our clients are our pride, and their words mean the world to us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="flex justify-center space-x-4">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 h-60 flex flex-col justify-between"
            >
              <div className="flex justify-left mb-2">
                <div className="text-purple-500">★★★★★</div>
              </div>
              <p className="text-gray-300 mb-4 overflow-hidden text-ellipsis">
                {testimonial.review}
              </p>
              <p className="font-semibold text-white">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsU;
