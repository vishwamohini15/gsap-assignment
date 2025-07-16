"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {

  gsap.registerPlugin(ScrollToPlugin);

  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef([]);
  const [times, setTimes] = useState(1);
  const [scrollTimes, setScrollTimes] = useState(1);

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
    <section className="py-12 md:py-16 lg:py-20 lg:px-[100px]">
      <div className=" w-full mx-auto">

        <div className="flex max-[768px]:flex-col max-[1215px]:flex-col flex-row items-center justify-between mb-12 md:mb-16 lg:mb-20 max-[768px]:gap-[50px] gap-[80px]">

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
            className="max-[800px]:w-[80%] w-[678px]"
            style={{ lineHeight: "1.2" }}
          >
            <h2 className="w-full text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3B36]">
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
          <div className="max-[1215px]:hidden flex space-x-4">

            <button onClick={() => { scrollByAmount(-100), setScrollTimes(scrollTimes - 1) }} className="w-[60px] h-[60px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition duration-200 focus:outline-none relative overflow-hidden">
              <img className="absolute -right-4" src="./arrow_left.png" alt="" />
            </button>

            <button onClick={() => { scrollByAmount(100), setScrollTimes(scrollTimes + 1) }} className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition duration-200 focus:outline-none relative overflow-hidden">
              <img className="absolute -left-4" src="./arrow_right.png" alt="" />
            </button>

          </div>

        </div>

        {/* Product Cards with refs */}
        <div ref={containerRef} className="mx-auto w-full flex flex-row gap-[25px] overflow-scroll hideScrollbar">
          {products.map((product, index) => (
            <div key={product.id}>
              <div
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

        <div className="max-[1215px]:flex hidden space-x-4 justify-center mt-[40px]">

          <button onClick={() => { scrollByAmount(-100), setScrollTimes(scrollTimes - 1) }} className="w-[60px] h-[60px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition duration-200 focus:outline-none relative overflow-hidden">
            <img className="absolute -right-4" src="./arrow_left.png" alt="" />
          </button>

          <button onClick={() => { scrollByAmount(100), setScrollTimes(scrollTimes + 1) }} className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition duration-200 focus:outline-none relative overflow-hidden">
            <img className="absolute -left-4" src="./arrow_right.png" alt="" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;