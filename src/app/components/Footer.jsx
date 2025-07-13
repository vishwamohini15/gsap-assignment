"use client"; 

import React from 'react';

const Footer = () => {
  return (
    <section className="relative bg-[rgba(45,59,54,1)] text-white py-12 md:py-16 lg:py-20 w-full h-[350px] md:h-[450px] lg:h-[800px] rounded">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 lg:mb-16 gap-6 md:gap-0 px-4 md:px-28">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Join The Skincare <br className="hidden md:block" /> Community Now.
            </h2>
          </div>

          <div className="text-center md:text-right">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">Get in Touch</p>
            <a href="mailto:contact.skincare.com" className="text-base md:text-lg text-gray-300 hover:text-white transition duration-200">
              contact.skincare.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm md:text-base mb-8 md:mb-12 lg:mb-16 gap-4 px-4 md:px-28 mt-8 md:mt-16 lg:mt-24 lg:py-44">
          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="hover:text-white transition duration-200">Facebook</a>
            <a href="#" className="hover:text-white transition duration-200">Instagram</a>
            <a href="#" className="hover:text-white transition duration-200">YouTube</a>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-200">Cookies Policy</a>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 w-full h-[100px] md:h-[150px] lg:h-[200px] rounded-b-lg overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: "url('/skincare.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(45, 59, 54, 1)',
          }}
        >
        </div>
      </div>
    </section>
  );
};

export default Footer;