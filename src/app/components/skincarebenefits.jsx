"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkincareBenefits = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" py-[60px] px-[30px] md:px-[60px] lg:px-[100px]"
    >
      <div className="flex flex-col lg:flex-row items-start gap-12 max-w-[1440px] mx-auto">

        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <button className="border border-[#2D3B36] text-[#2D3B36] text-sm md:text-base lg:text-base rounded-full px-6 py-3 lg:w-[260px] lg:h-[60px] font-medium flex items-center gap-2">
            <span className="w-[20px] h-[20px] rounded-full bg-[#2D3B36] inline-block"></span>
            Why Our Products
          </button>

          <h2
            ref={headingRef}
            className="text-[#2D3B36] font-normal leading-[100%] tracking-[-0.03em] text-[34px] md:text-[50px] lg:text-[60px] md:w-[533px] lg:w-[640px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            YOUR SKIN DESERVES <br className="hidden md:block" /> THE BEST CARE.
          </h2>

          <p
            ref={textRef}
            className="text-[#2D3B36] text-[16px] leading-[22px] tracking-[-0.03em] md:text-[18px] md:leading-[24px] lg:text-[18px] lg:leading-[24px] md:w-[605px] lg:w-[605px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love, backed by science, and inspired by nature.
          </p>

          {/* Features */}
          <div className="space-y-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <span className="text-[#293330] font-inter font-normal text-[34px] md:text-[60px] lg:text-[60px] tracking-[-0.02em]">
                01
              </span>
              <div>
                <h3 className="text-[34px] md:text-[60px] lg:text-[60px] text-[#2D3B36] leading-[100%] tracking-[-0.02em]">
                  Bio Ingredients
                </h3>
                <p className="text-[16px] text-[#525349] leading-[21px] tracking-[-0.03em] max-w-[261px]">
                  Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <span className="text-[#293330] font-inter font-normal text-[34px] md:text-[60px] lg:text-[60px] tracking-[-0.02em]">
                02
              </span>
              <div>
                <h3 className="text-[34px] md:text-[60px] lg:text-[60px] text-[#2D3B36] leading-[100%] tracking-[-0.02em]">
                  Everything Natural
                </h3>
                <p className="text-[16px] text-[#525349] leading-[22px] tracking-[-0.03em] max-w-[236px]">
                  Pure ingredients for pure skin. The perfect solution for your skin care needs.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <span className="text-[#293330] font-inter font-normal text-[34px] md:text-[60px] lg:text-[60px] tracking-[-0.02em]">
                03
              </span>
              <div>
                <h3 className="text-[34px] md:text-[60px] lg:text-[60px] text-[#2D3B36] leading-[100%] tracking-[-0.02em]">
                  All Handmade
                </h3>
                <p className="text-[16px] text-[#525349] leading-[22px] tracking-[-0.03em] max-w-[242px]">
                  Made with love and care. Just for you. Give your skin the tender loving care it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative flex justify-center">
          <img
            ref={imageRef}
            src="/5617a13221609fb0ba6cd721b235ba7e9b1ffa06 (1).png"
            alt="Skincare Model"
            className="w-[402px] h-[512px] md:w-[743px] md:h-[947px] lg:w-[849px] lg:h-[1081px] object-center rounded-[30px] shadow-xl"
          />

          {/* Badge on Image */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-3xl shadow-md text-center">
            <p className="text-sm md:text-base font-semibold text-gray-800">Best Skin Care Product</p>
            <p className="text-xs md:text-sm text-gray-600">Award Winning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkincareBenefits;
