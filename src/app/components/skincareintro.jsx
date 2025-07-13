"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkincareIntro = () => {
  const paraRef = useRef(null);

  useEffect(() => {
    const lines = paraRef.current.querySelectorAll("span");

    gsap.set(lines, { opacity: 0, y: 20 });

    gsap.to(lines, {
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.25,
      ease: "power2.out",
    });
  }, []);

  // Break the text into spans with <br/> at manual points for lines to appear
  const paragraphLines = [
    "Experience the ultimate in skincare with our expertly formulated products,",
    "crafted to nourish, protect, and rejuvenate your skin. Combining the finest",
    "natural ingredients with advanced science, our collection ensures every",
    "skin type can achieve a radiant, healthy glow. Embrace your beauty with",
    "confidence every day. Experience the ultimate in skincare with our",
    "expertly formulated products, crafted to nourish, protect, and rejuvenate",
    "your skin.",
  ];

  return (
    <section className="bg-white flex justify-center items-center px-[30px] md:px-[40px] lg:px-[102px] py-[80px] md:py-[100px] lg:py-0  lg:mb-24">
      <div className="container mx-auto max-w-[1716px] max-h-[507px]">
        <p
          ref={paraRef}
          className="font-[var(--font-inter)] text-[20px] leading-[30px] tracking-[-0.035em]
            md:text-[31px] md:leading-[46px] md:tracking-[-0.05em]
            lg:text-[43px] lg:leading-[78px] lg:tracking-[-0.035em] text-start text-[#2D3B36]"
        >
          {paragraphLines.map((line, index) => (
            <span
              key={index}
              className="block"
              style={{ display: "block", overflow: "hidden" }}
            >
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default SkincareIntro;
