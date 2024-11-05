"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdInformationCircleOutline, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Page4Data } from "./applicationLayout_data.json";
import { Label } from "@radix-ui/react-label";

gsap.registerPlugin(ScrollTrigger);

interface Page4Props {
  page4product: {
    imageWithDescription: {
      img: string;
      h1: string;
      h2: string;
      h3: string;
      image: string;
      information: string;
      sInformation: string;
      imageInformation: string;
      s: string;
    }[];
  };
}

const RelatedProduct: React.FC<Page4Props> = ({ page4product }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

  const scrollbarLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollbarRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "10%" },
        {
          width: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-80% 80%",
            end: "70% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full lg:mt-[12vh] mt-[4vh] font-poppins">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#f2f2f2] w-[10%] lg:mx-[2rem] mx-[1rem]"
        ></div>
        <div className="flex flex-col lg:my-[6vh] my-[4vh] bg-white lg:px-[2rem] px-[1rem] relative">
          <div className="pt-[3vh]">
            <h2 className="lg:text-[2.6rem] text-[1.5rem] font-semibold">
              <span className="text-[#9e9c9c]">
                {Page4Data?.title.trim().replace(/\s+\S+$/, "")}
              </span>{" "}
              <span className="text-[#dc0e2a]">
                {Page4Data?.title.trim().match(/\S+$/)}
              </span>
            </h2>
            <button
              className="text-[#cccaca] lg:text-[2rem] text-[1.8rem] absolute lg:right-20 right-16 lg:bottom-4 bottom-3 hover:text-black"
              onClick={scrollbarLeft} 
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className="text-[#cccaca] lg:text-[2rem] text-[1.8rem] absolute lg:right-8 right-4 lg:bottom-4 bottom-3 hover:text-black"
              onClick={scrollbarRight} 
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>

          {/* Main Carousel Container */}
          <div
            className="w-full h-full flex items-center overflow-hidden"
            
          >
            <div
              className="overflow-auto h-full scrollbar-hide px-1 pt-[3vh]"
              ref={carouselRef}
            >
              <div className="w-max flex items-center justify-center space-x-8">
                {page4product.imageWithDescription.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative lg:mb-20 mb-16 lg:w-[24vw] w-[70vw] bg-gradient-to-b from-[#f5f5f5] to-[#f2f2f2] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                    
                  >
                    {/* Icons */}
                    <div className="absolute top-6 right-4 flex space-x-2">
                      <div className="w-6 h-6 p-[0.2rem] bg-white border-solid border-[0.1rem] border-[#f5f5f5] hover:border-[#dc0e2a] rounded-full flex items-center justify-center relative group">
                        <Image src={item.image} alt="" width={400} height={400} />
                        <div className="hidden group-hover:flex absolute bottom-7 right-0 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                          <p className="lg:text-[0.8rem] text-[0.7rem] text-black">
                            {item.imageInformation}
                          </p>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center font-medium cursor-pointer relative group hover:text-[#dc0e2a]">
                        {item.s}
                        <div className="hidden group-hover:flex absolute bottom-7 right-0 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                          <p className="lg:text-[0.8rem] text-[0.7rem] text-black font-normal">
                            {item.sInformation}
                          </p>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer relative group hover:text-[#dc0e2a] text-[1.1rem]">
                        <IoMdInformationCircleOutline />
                        <div className="hidden group-hover:flex absolute bottom-7 right-0 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                          <p className="lg:text-[0.8rem] text-[0.7rem] text-black">{item.information}</p>
                        </div>
                      </div>
                    </div>
      
                    {/* Title */}
                    <div className="pt-6 pl-6">
                      <h2 className="lg:text-[1.1rem] text-[1rem] font-semibold w-[65%]">{item.h1}</h2>
                      <h3 className="lg:text-lg text-[0.9rem] font-medium">{item.h2}</h3>
                      <p className="lg:text-sm text-[0.8rem] text-gray-600">{item.h3}</p>
                    </div>
      
                    {/* Image */}
                    <div className="flex justify-center items-center">
                      <div className="mt-[2vh] w-[70%] lg:h-[28vh] flex justify-center items-center">
                        <Image src={item.img} alt="" width={400} height={400} />
                      </div>
                    </div>
      
                    {/* Key Points or View Machine Button */}
                    <div className="my-[2vh] flex lg:flex-rows flex-col items-center justify-center lg:h-[6vh]">
                      <button
                        className="lg:text-[1rem] text-[0.9rem] w-[65%] lg:h-[5vh] h-[3.5vh] border-[0.1rem] border-solid font-medium rounded-lg transition-colors duration-300 border-[#9c9c9c] hover:border-black hover:bg-black hover:text-white"
                      >
                        {Page4Data.viewMachine}
                      </button>
                    </div>
      
                    {/* Separator */}
                    <div className="w-full h-px bg-[#9c9c9c]"></div>
      
                    {/* Checkbox */}
                    <div className="my-4 flex items-center justify-center">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <Label htmlFor="addToEnquiry" className="text-sm">
                          {Page4Data.inquiry}
                        </Label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;