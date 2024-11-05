"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Page2Data } from "../Constants/product/product_data.json";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbCircleLetterSFilled } from "react-icons/tb";
import gsap from "gsap";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Label } from "@radix-ui/react-label";

const productPage2 = () => {
  // State to manage the expanded item index
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Refs for animations
  const leftBorderRef = useRef<HTMLDivElement | null>(null);
  const bottomBorderRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Toggle function to expand/collapse items
  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
    if (expandedIndex !== null) {
      const tl = gsap.timeline();

      // Animate the left border height
      tl.to(leftBorderRef.current, {
        height: "21rem",
        duration: 0.6,
        ease: "power2.out",
      })
        // Animate the bottom border width
        .to(bottomBorderRef.current, {
          width: "5.5vw",
          duration: 0.4,
          ease: "power2.out",
        })
        // Show the circle after borders
        .to(circleRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "back.out(1.7)",
        })
        // Show the mapped items one by one
        .to(
          itemsRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.1,
            stagger: 0.2, // Stagger items' appearance
            ease: "power2.out",
          },
          "-=0.2" // Overlap with circle animation
        );
    }
  }, [expandedIndex]);

  return (
    <>
      <div className="w-full bgLines font-poppins bg-grid-black/[0.2] px-[2vw] pt-[5rem] pb-[4rem] flex items-center justify-center relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-[#f2f2f2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="bg-white w-full rounded-[0.5rem] px-[2.2vw] pb-[1.8rem] z-20">
          {Page2Data.card.map((item, idx) => (
            <div key={idx} className="w-full">
              <div
                className="flex items-center cursor-pointer py-[0.4rem] relative group"
                onClick={() => toggleExpansion(idx)}
              >
                <Image
                  src={item.img}
                  alt={""}
                  width={400}
                  height={400}
                  className={`${
                    expandedIndex === idx
                      ? "lg:h-[4rem] lg:w-[4rem] h-[2rem] w-[2rem]"
                      : "lg:h-[2.5rem] lg:w-[2.5rem] h-[1.5rem] w-[1.5rem]"
                  }`}
                />
                <div
                  className={`border-r-2 border-solid border-transparent lg:h-[3rem] h-[2rem] ${
                    expandedIndex === idx
                      ? "hidden"
                      : "group-hover:border-[#dc0e2a] lg:ml-[1vw] ml-[1.5vw]"
                  }`}
                ></div>

                <h2
                  className={` ${
                    expandedIndex === idx
                      ? "lg:text-[1.8rem] text-[1.2rem] font-semibold lg:ml-[3vw] ml-[4vw]"
                      : "lg:text-[1.2rem] text-[0.9rem] ml-[1vw]"
                  }`}
                >
                  {item.title}
                </h2>
                {expandedIndex === idx ? (
                  <IoIosArrowUp className="lg:text-[2rem] text-xl absolute right-0" />
                ) : (
                  <IoIosArrowDown className="lg:text-[2rem] text-xl absolute right-0" />
                )}
              </div>
              <div className="relative">
                <div
                  className={`bg-gradient-to-r from-white via-[#dddddd] to-white h-[0.1rem] w-full absolute top-0 ${
                    expandedIndex === idx ? "hidden" : ""
                  }`}
                ></div>
              </div>

              {expandedIndex === idx && (
                <div className="w-full relative">
                  <div className="bg-gradient-to-r from-white via-[#dddddd] to-white h-[0.1rem] w-full absolute bottom-0"></div>
                  <div className="w-full lg:pl-[8vw] pl-[13vw] relative">
                  {/* Left Border Animation */}
                  <div
                    ref={leftBorderRef}
                    className="border-l-2 border-solid border-[#dc0e2a] h-[0rem] lg:-top-[4rem] -top-[2.2rem] left-[2.2rem] lg:left-[4.7rem]  absolute"
                  ></div>
                  {/* Bottom Border Animation */}
                  <div
                    ref={bottomBorderRef}
                    className="border-b-2 border-solid border-[#dc0e2a] w-0 absolute left-[2.2rem] lg:left-[4.7rem] lg:top-[17rem] top-[18.8rem]"
                  ></div>
                  {/* Circle Animation */}
                  <div
                    ref={circleRef}
                    className="border-2 border-solid border-[#dc0e2a] lg:w-[1rem] lg:h-[1rem] w-[0.5rem] h-[0.5rem] lg:left-[9rem] left-[3.5rem]  lg:top-[16.6rem] top-[18.6rem] absolute rounded-full bg-[#dc0e2a] opacity-0 scale-0"
                  ></div>
                  <div className="py-[1vh] lg:text-[1rem] text-[0.7rem] font-light lg:w-[60%]">
                    <p>{item.description}</p>
                  </div>
                  <div className="w-[95%] ml-[4.2vw] mb-[1rem] flex items-center overflow-hidden">
                    <div
                      className="w-full overflow-auto px-2 scrollbar-hide lg:pt-[4rem] pt-[2rem]"
                      ref={carouselRef}
                    >
                      <div className="w-max flex items-center justify-center lg:space-x-8 space-x-4">
                        {item.container &&
                          item.container.map((containerItem, containerIdx) => (
                            <div
                              key={containerIdx}
                              ref={(el) => {
                                itemsRef.current[containerIdx] = el;
                              }}
                              className="relative lg:mb-20 mb-16 lg:w-[20vw] w-[60vw] bg-gradient-to-b from-[#f5f5f5] to-[#f2f2f2] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0 -translate-x-20"
                            >
                              {/* Icons */}
                              <div className="absolute top-4 right-2 flex space-x-2">
                                <div className="w-6 h-6 p-[0.2rem] bg-white border-solid border-[0.1rem] border-[#f5f5f5] hover:border-[#dc0e2a] rounded-full flex items-center justify-center relative group">
                                  <Image
                                    src={containerItem.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                  />
                                  <div className="hidden group-hover:flex absolute bottom-7 right-0 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                                    <p className="lg:text-[0.8rem] text-[0.7rem] text-black">
                                      {containerItem.imageInformation}
                                    </p>
                                  </div>
                                </div>
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center font-medium cursor-pointer relative group hover:text-[#dc0e2a]">
                                  {containerItem.s}
                                  <div className="hidden group-hover:flex absolute bottom-7 right-0 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                                    <p className="lg:text-[0.8rem] text-[0.7rem] text-black font-normal">
                                      {containerItem.sInformation}
                                    </p>
                                  </div>
                                </div>
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer relative group hover:text-[#dc0e2a] text-[1.1rem]">
                                  <IoMdInformationCircleOutline />
                                  <div className="hidden group-hover:flex absolute bottom-7 right-0 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                                    <p className="lg:text-[0.8rem] text-[0.7rem] text-black">
                                      {containerItem.information}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Title */}
                              <div className="pt-4 px-4">
                                <h2 className="lg:text-[1rem] text-[0.9rem] font-semibold w-[50%]">
                                  {containerItem.h1}
                                </h2>
                                <h3 className="lg:text-[0.9rem] text-[0.8rem] font-medium">
                                  {containerItem.h2}
                                </h3>
                                <p className="lg:text-[0.8rem] text-[0.7rem] text-gray-600">
                                  {containerItem.h3}
                                </p>
                              </div>

                              {/* Image */}
                              <div className="flex justify-center items-center">
                                <div className="mt-[2vh] w-[70%] lg:h-[16vh] flex justify-center items-center">
                                  <Image
                                    src={containerItem.img}
                                    alt=""
                                    width={400}
                                    height={400}
                                  />
                                </div>
                              </div>

                              {/* Key Points or View Machine Button */}
                              <div className="mt-[2vh] mb-[1vh] flex lg:flex-rows flex-col items-center justify-center lg:h-[5vh]">
                                <button className="lg:text-[0.9rem] text-[0.8rem] w-[65%] lg:h-[4vh] h-[3vh] border-[0.1rem] border-solid font-medium rounded-lg transition-colors duration-300 border-[#9c9c9c] hover:border-black hover:bg-black hover:text-white">
                                  {Page2Data.viewMachine}
                                </button>
                              </div>

                              {/* Separator */}
                              <div className="w-full h-px bg-[#9c9c9c]"></div>

                              {/* Checkbox */}
                              <div className="my-2 flex items-center justify-center">
                                <div className="flex items-center space-x-2">
                                  <input type="checkbox" />
                                  <Label
                                    htmlFor="addToEnquiry"
                                    className="text-sm whitespace-nowrap"
                                  >
                                    {Page2Data.inquiry}
                                  </Label>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex -mt-16 lg:mb-[2rem] mb-[1rem] justify-end">
                    <FaArrowLeftLong
                      onClick={scrollbarLeft}
                      className="mr-2 hover:text-[#dc0e2a]"
                    />
                    <FaArrowRightLong
                      onClick={scrollbarRight}
                      className="hover:text-[#dc0e2a]"
                    />
                  </div>
                  <div className="flex items-center justify-end text-black hover:text-[#dc0e2a]">
                    <button className="lg:text-[0.9rem] text-[0.8rem] font-medium ">
                      {Page2Data.viewAllMachines}
                    </button>
                    <IoArrowForwardCircleSharp className="lg:text-[1.4rem] ml-[0.5vw]" />
                  </div>
                </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default productPage2;
