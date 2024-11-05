"use client";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { companyContent } from "../Constants/About/AboutUsPage.json";




const Page4 = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="lg:w-full ">
      
      <div className="flex  pb-[5vh] px-[4vw]">
      </div>
      <div className="lg:w-[45%] w-[100%] flex items-center  lg:-ml-[1vh] relative justify-start  ">
        <div className="bg-gray-200 bg-opacity-45 py-[2.5vh] px-[1vw] rounded-[1rem] overflow-hidden">
          <button
            className="border-solid border-2  text-[#3a2a79] p-[0.4rem] text-[1.4rem] rounded-[2rem] bg-white absolute top-[28vh] left-2"
            onClick={scrollLeft}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="border-solid border-2  text-[#3a2a79] p-[0.4rem] text-[1.4rem] rounded-[2rem] bg-white absolute top-[28vh] right-0 hover:backdrop-blur-lg"
            onClick={scrollRight}
          >
            <IoIosArrowForward />
          </button>
          <div
            className="overflow-auto lg:w-full scrollbar-hide "
            ref={carouselRef}     

          >
            <div className="flex lg:justify-start  items-center lg:w-max">
              {companyContent.imageWithDescription.map((item, idx) => (
                <div
                  key={idx}
                  className="mx-[0.6vw]  lg:w-[30vw] w-full h-[50vh] bg-[#f2f2f2] flex flex-col items-center justify-center rounded-[1rem] overflow-hidden"
                >
                  <Image className="w-full h-full" width={200} height={200} src={item.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;