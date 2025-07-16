"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductDisplay = () => {
  const headingRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const productRefs = useRef([]);
  const cardsRef = useRef([]);
  const [times, setTimes] = useState(1);
  const [scrollTimes, setScrollTimes] = useState(1);


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
    { id: 1, name: "ALYA SKIN CLEANSER", src: "/alya.png", price: "$29.99", cartIcon: "🛒" },
    { id: 2, name: "GLOW SERUM", src: "/neces.png", price: "$27.99", cartIcon: "🛒" },
    { id: 3, name: "HYDRATING CREAM", src: "/ritiul.png", price: "$19.99", cartIcon: "🛒" },
  ];

  const heading = "Skincare That Brings Out Your Natural Radiance";

  const containerRef = useRef();

  const scrollByAmount = (amount) => {
    const container = containerRef.current;

    if (scrollTimes == times) {
      console.log("ALL DONE")
      return;
    }

    gsap.to(container, {
      scrollTo: {
        x: amount * scrollTimes,
      },
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    setTimes(Math.floor(container.scrollWidth / container.clientWidth));
  }, [])

  return (
    <section className="py-12 md:py-16 lg:py-20 max-[1215px]:px-0 px-[100px]">
      <div className="container mx-auto px-4">

        {/* Heading + Buttons */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16 lg:mb-20 text-center">
          {/* Animated Heading (word-by-word) */}
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-[#2D3B36]"
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


        {/* Product Cards with refs */}
        <div ref={containerRef} className="mx-auto w-full flex flex-row gap-[25px] overflow-scroll hideScrollbar">
          {products.map((product, index) => (
            <div key={product.id}>
              <div
                key={product.id}
                className="max-[768px]:w-[322px] max-[768px]:h-[478px] max-[1215px]:w-[560px] w-[560px] h-[770px]"
                ref={(el) => (cardsRef.current[index] = el)}
              >

                <div className="relative w-full h-full">

                  <img
                    src={product.src}
                    alt={product.name}
                    className="w-full h-full"
                  />

                  <div className="absolute bottom-4 left-4 right-4 h-[100px] p-[10px] bg-white bg-opacity-90 flex items-center justify-between rounded-2xl">

                    <div className="flex flex-col gap-[32px] pl-[10px]">
                      <span className="text-base font-normal text-gray-800 max-[768px]:text-[14px] text-[20px]">{product.name}</span>
                      <span className="text-base font-normal text-[#2D3B3680] max-[768px]:text-[10px] text-[16px]">FROM {product.price}</span>
                    </div>

                    <button className="w-20 h-20 bg-[#2D3B361A] text-white p-2 rounded-[10px] hover:bg-gray-800 transition duration-200 flex justify-center items-center">
                      <img src="./cart2.png" alt="" />
                    </button>

                  </div>

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