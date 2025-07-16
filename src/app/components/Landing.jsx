"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import bannerGirl from "../assets/bannerGirl.png"
// import bannerCream from "../assets/bannerCream.jpg"
import Navbar from "./Navbar";
import Skincare from "./Skincare";
import AnimatedBox from "./AnimatedBox";

function Landing() {
    const [count, setCount] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        // Count from 0 to 100
        document.body.style.overflow = "hidden";
        const obj = { val: 0 };
        gsap.to(obj, {
            val: 100,
            duration: 1,
            ease: "power1.out",
            onUpdate: () => {
                setCount(Math.round(obj.val));
            },
            onComplete: () => {
                // Animate text after counting finishes

                gsap.fromTo(
                    ".navbarParent",
                    { opacity: 0, y: -40 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
                );

                gsap.fromTo(
                    ".glow",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
                );

                gsap.fromTo(
                    ".leftText",
                    { opacity: 0, x: -40 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
                );

                gsap.fromTo(
                    ".girlBanner",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
                );

                gsap.fromTo(
                    ".creamBanner",
                    { opacity: 0, x: 40 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
                );

                gsap.fromTo(
                    ".glow",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
                );

                gsap.fromTo(
                    ".counter",
                    { opacity: 1, y: 0 },
                    { opacity: 0, y: 0, duration: 1.5, ease: "power2.out" }
                );

                document.body.style.overflow = "auto";

            },
        });
    }, []);

    return (
        <div className="relative flex font-sans text-[#EFF5E1] overflow-hidden justify-center items-center max-[768px]:pb-0 max-[1215px]:pb-20 pb-0">

            <div className="navbarParent opacity-0 w-full h-[100px] absolute top-0 left-0 flex items-center">
                <Navbar />
            </div>

            <div className="glow max-[768px]:w-[402px] max-[768px]:top-[150px] max-[768px]:text-[75px] max-[768px]:leading-[60px] max-[768px]:right-0 w-[398px] max-[1215px]:w-[830px] absolute max-[1215px]:top-[534px] top-[318px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 font-[Inter] font-bold text-[100px] leading-[90px] tracking-[-3%] uppercase text-black z-20" >
                <p className="max-[1215px]:hidden">Glow Natur-ally</p>
                <p className="max-[1215px]:block hidden">Glowwww Naturally</p>
            </div>

            <div className="leftText absolute max-[768px]:w-[342px] max-[768px]:text-[16px] max-[768px]:top-[295px] max-[768px]:left-auto max-[1215px]:w-[234px] w-[335px] max-[1215px]:left-[40px] top-[301px] left-[100px] font-[Inter] font-normal max-[1215px]:text-[14px] text-[20px] leading-[100%] indent-[105px] tracking-[0%] text-black opacity-0">
                Transform your skincare routine with premium products that restore, protect, and enhance your nautural glow every day.
            </div>

            <img className="creamBanner absolute max-[768px]:top-[881px] max-[768px]:w-[402px] max-[768px]:h-[399px] max-[768px]:right-auto w-[222px] h-[220px] max-[1215px]:w-[335px] max-[1215px]:h-[332px] max-[1215px]:top-[200px] top-[234px] right-[100px] rounded-[20px] opacity-0 z-20" src="/bannerCream.jpg" alt="" srcSet="" />

            <Skincare />

            <AnimatedBox />

            <div className="girlBanner max-[768px]:absolute max-[768px]:top-[401px] max-[768px]:w-[402px] max-[768px]:h-[441px] max-[768px]:mt-[0px] max-[768px]:ml-0 max-[1215px]:w-[360px] max-[1215px]:h-[400px] w-[610px] h-[676px] max-[1215px]:mt-[792px] max-[1215px]:ml-[40px] mt-[571px] m-auto rounded-[30px] opacity-0 overflow-hidden">

                <img className="w-full h-full" src="/bannerGirl.png" alt="" srcSet="" />

                <div className="absolute max-[768px]:w-[332px] max-[768px]:h-[80px]  bottom-[30px] left-[50%] -translate-x-[50%]  max-[1215px]:w-[318px] max-[1215px]:h-[67px] w-[476px] h-[100px] rounded-[100px] flex flex-row max-[1215px]:gap-[16px] gap-[38px] bg-[#EFF5E1] items-center p-[6px]">

                    <div className="relative max-[1215px]:w-[57px] max-[1215px]:h-[57px]  w-[88px] h-[88px] border-2 border-dotted border-[#2D3B36] rounded-full flex justify-center items-center p-[3px]">
                        <img className="" src="/cream2.png" alt="" srcSet="" />
                    </div>

                    <p className="max-[1215px]:w-[211px] w-[304px] font-normal max-[1215px]:text-[14px] text-[20px] leading-[100%] tracking-[0] font-inter text-[#2D3B36]">While giving you an invigorating cleansing experience.</p>

                </div>

            </div>


            <div className="counter fixed w-[223px] h-[102px] bottom-0 right-0 opacity-100 font-[Inter] font-normal text-[140px] leading-[60px] tracking-[-5%] uppercase text-black">{count}</div>

        </div>
    );
}

export default Landing;