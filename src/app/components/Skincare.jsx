"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skincare = () => {
  const parent = useRef();
  const textRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: "100%" },
        {
          x: "0%",
            delay: 3, 
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
            // markers: true
          },
          ease: "power2.out",
        }
      );
    }, parent);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={parent}
      className="w-full absolute max-[768px]:top-[824px] max-[1215px]:top-[1112px] top-[982px] left-0 opacity-100 overflow-hidden bg-transparent"
    >
      <div
        ref={textRef}
        className="font-[Inter] font-extrabold max-[1215px]:text-[170px] max-[768px]:text-[85px] text-[280px] leading-[100%] tracking-[0%] uppercase text-[#2D3B36] -z-10"
      >
        skincare
      </div>
    </div>
  );
};

export default Skincare;
