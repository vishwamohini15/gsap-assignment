"use client";
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedBox = () => {

    gsap.registerPlugin(ScrollTrigger);
    const parent = useRef()

    const coverRef = useRef(null);
    const mainBoxRef = useRef(null);

    useEffect(() => {
        const cover = coverRef.current;
        const box = mainBoxRef.current;

        const enter = () => {
            gsap.to(cover, {
                x: "100%",
                duration: 0.6,
                ease: "power2.out",
            });
        };

        const leave = () => {
            gsap.to(cover, {
                x: "0%",
                duration: 0.6,
                ease: "power2.in",
            });
        };

        box.addEventListener("mouseenter", enter);
        box.addEventListener("mouseleave", leave);

        return () => {
            box.removeEventListener("mouseenter", enter);
            box.removeEventListener("mouseleave", leave);
        };
    }, []);

    return (
        <div className="absolute max-[768px]:static max-[768px]:mt-[1320px] max-[768px]:mx-auto max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center max-[1215px]:top-[967px] max-[1215px]:pr-[40px] max-[1215px]:left-[0px] top-[814px] left-[100px] w-full h-[60px]">

           <div className='absolute w-[180px] h-[60px] overflow-hidden group rounded-full  max-[1215px]:justify-self-end'>
             {/* Overlay Text */}
            <h2 className="absolute top-[50%] left-[25%] -translatex-[50%] -translate-y-[50%]  font-[Inter] font-normal text-[20px] leading-[100%] tracking-[0%] text-white text-center z-30 mix-blend-difference pointer-events-none">
                Shop Box
            </h2>

            {/* Main Box */}
            <div
                ref={mainBoxRef}
                className="w-full h-full bg-[#2D3B36] relative z-10 flex items-center justify-center"
            >
            </div>

            {/* Covering Box */}
            <div
                ref={coverRef}
                className="absolute top-0 left-[-100%] w-full h-full bg-[#EFF5E1] z-20 flex items-center justify-center"
            >
            </div>
           </div>

        </div>
    )
}

export default AnimatedBox