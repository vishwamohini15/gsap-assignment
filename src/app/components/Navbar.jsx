"use client";
import React from 'react'

const Navbar = () => {
  const navList = ["all Products", "serum", "sunscreen", "bundle"];

  return (
    <div className="w-full max-[768px]:h-[70px] h-[100px] absolute top-0 left-0 flex justify-between items-center max-[1215px]:px-[40px] px-[100px]">
      {/* Logo */}
      <div className="font-[Inter] font-extrabold max-[1215px]:text-[25px] text-[30px] leading-[100%] uppercase text-black">
        skincare
      </div>

      {/* Navigation List */}
      <div className="flex items-center flex-row justify-evenly max-[1215x]:gap-[30px] gap-[60px] max-[768px]:hidden">
        {navList.map((list, index) => (
          <div key={index} className="font-[Inter] font-normal max-[1215px]:text-[12px] text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-black">
            {list}
          </div>
        ))}
      </div>

      {/* Icon Section */}
      <div className="flex flex-row gap-[10px] items-center">
        <div className="max-[1215px]:w-[30px] w-[40px] max-[1215px]:h-[30px] h-[40px] rounded-[40px] bg-[#FFFFFF] flex items-center justify-center">
          <img src="/cart.png" alt="cart" />
        </div>

        <div className="max-[1215px]:hidden block font-[Inter] font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-black mr-[10px]">
          Cart (1)
        </div>

        <div className="max-[1215px]:w-[30px] w-[40px] max-[1215px]:h-[30px] h-[40px] rounded-[40px] bg-[#FFFFFF] flex items-center justify-center">
          <img src="/heart.png" alt="heart" />
        </div>

        <div className="max-[1215px]:w-[30px] w-[40px] max-[1215px]:h-[30px] h-[40px] rounded-[40px] bg-[#FFFFFF] flex items-center justify-center">
          <img src="/person.png" alt="person" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;