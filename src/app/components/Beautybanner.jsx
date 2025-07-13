"use client"; 

import React from 'react';

const BeautyBanner = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="relative w-full aspect-video md:aspect-auto md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {/* Background Image */}
          <img
            src="/banner.png" 
            alt="Feel Beautiful Inside and Out"
            className="w-full h-full object-cover"
          />

          {/* Overlay with Text and Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 p-4 text-center">
            <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8 lg:mb-10">
              Feel Beautiful Inside and Out <br /> with Every Product.
            </p>
            <button className="bg-white text-[rgba(45,59,54,1)] px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-gray-200 transition duration-300 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyBanner;