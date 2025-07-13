"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductDisplay = () => {
  const headingRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const productRefs = useRef([]);
  

useEffect(() => {
  // Animate heading word-by-word
  if (headingRef.current) {
    const words = headingRef.current.innerText.split(" ");
    headingRef.current.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block opacity-0 translate-y-2">${word}</span>`
      )
      .join(" ");

    gsap.to(headingRef.current.querySelectorAll("span"), {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
    });
  }

  // ❌ Removed buttonGroupRef GSAP animation (as requested)

  // Animate product cards (fade-in one by one)
  if (productRefs.current.length > 0) {
    gsap.from(productRefs.current, {
      scrollTrigger: {
        trigger: productRefs.current[0],
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }
}, []);


  const products = [
    { id: 1, name: "ALYA SKIN CLEANSER", src:"/alya.png", cartIcon: "🛒" },
    { id: 2, name: "GLOW SERUM", src: "/neces.png", cartIcon: "🛒" },
    { id: 3, name: "HYDRATING CREAM", src: "/ritiul.png", cartIcon: "🛒" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading + Buttons */}
       <div className="flex flex-col items-center justify-center mb-12 md:mb-16 lg:mb-20 text-center">
  {/* Animated Heading (word-by-word) */}
  <h2
    ref={headingRef}
    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
  >
    Feel Beautiful Inside and Out <br className="hidden md:block" /> with Every Product.
  </h2>

  {/* Animated Buttons */}
  <div
    ref={buttonGroupRef}
    className="flex flex-wrap justify-center gap-4"
  >
    <button className="product-btn transition-all duration-300 active:scale-95">
      ANTI AGGING
    </button>
    <button className="product-btn transition-all duration-300 active:scale-95">
      ACNE FIGHTER
    </button>
    <button className="product-btn transition-all duration-300 active:scale-95">
      CLEANSING
    </button>
    <button className="product-btn transition-all duration-300 active:scale-95">
      NEW ARRIVAL
    </button>
  </div>
</div>


        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[index] = el)}
              className="bg-white p-7 rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full lg:h-[540px] object-contain"
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

export default ProductDisplay;
