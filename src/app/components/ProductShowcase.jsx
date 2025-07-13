"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate button
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
      },
    });

    // Animate heading word-by-word
    const headingWords = headingRef.current.querySelectorAll(".word");
    gsap.from(headingWords, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
      },
    });

    // Animate product cards
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });
  }, []);

  const products = [
    { id: 1, name: "ALYA SKIN CLEANSER", src: "/alya.png", cartIcon: "🛒" },
    { id: 2, name: "GLOW SERUM", src: "/neces.png", cartIcon: "🛒" },
    { id: 3, name: "HYDRATING CREAM", src: "/ritiul.png", cartIcon: "🛒" },
  ];

  const heading = "Skincare That Brings Out Your Natural Radiance";

  return (
    <section className="py-12 md:py-16 lg:py-20 lg:px-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 lg:mb-20 gap-8 md:gap-0">
          {/* Best Selling Products Button */}
          <button
            ref={buttonRef}
            className="flex items-center space-x-2 p-3 rounded-full hover:bg-gray-100 transition duration-200 focus:outline-none border border-[#2D3B36]"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center"></div>
            <span className="text-lg md:text-xl font-semibold text-gray-800">
              Best Selling Products
            </span>
          </button>

          {/* Heading with word-by-word span */}
          <div
            ref={headingRef}
            className="text-center md:flex-1 md:mx-4"
            style={{ lineHeight: "1.2" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {heading.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block word"
                  style={{ marginRight: "0.3em" }}
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* Arrows (No change) */}
          <div className="flex space-x-4">
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition duration-200 focus:outline-none">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition duration-200 focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Product Cards with refs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white p-7 rounded-lg shadow-lg overflow-hidden group"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="relative">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-96 object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white bg-opacity-90 flex items-center justify-between rounded-2xl">
                  <span className="text-base md:text-lg font-semibold text-gray-800">{product.name}</span>
                  <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-200 focus:outline-none">
                    {product.cartIcon}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
