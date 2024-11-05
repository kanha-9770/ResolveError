"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { IoArrowRedoSharp } from "react-icons/io5";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/about/carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  slides,
  Sustainabilityheading,
} from "../Constants/About/AboutUsPage.json";

const NewSustainability: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleHover = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full p-8 bg-white lg:h-[95vh] h-screen overflow-hidden">
      <h2 className="lg:text-5xl text-2xl font-medium text-[#3a2a79] mb-8 top-[10] font-poppins ">
        {Sustainabilityheading.title}
      </h2>
      <div className="flex-none flex flex-col ">
        <Carousel className="lg:w-full lg:max-w-screen-sm relative lg:top-0 top-[20rem]">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={slide.id}
                className={currentSlide === index ? "block" : "hidden"}
              >
                <div className="lg:p-1 p-5">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center lg:p-5 ">
                      <div className="flex flex-col lg:mb-[20rem] lg:mr-10">
                        <h3 className="lg:text-4xl font-poppins font-normal relative lg:text-black text-[#138808] -top-7 lg:top-0 text-center lg:p-0 lg:text-left w-full text-2xl">
                          {slide.title}
                        </h3>
                        <div className="flex flex-row relative w-full mb-4 lg:hidden block  ">
                        <p className="lg:invisible visible relative text-[#138808] left-24"> <IoArrowRedoSharp size={20} /></p>
                        <h4 className="lg:invisible visible  text-black relative text-sm left-24 pl-1 font-bold">Our Approach</h4>
                        </div>

                        <div className="flex items-center justify-center lg:space-x-20  relative lg:left-5 lg:top-10 lg:mt-11 ">
                          <div className="flex-shrink-0 ">
                            <img
                              src={slide.img}
                              alt={`Slide ${index + 1} Icon`}
                              className="lg:w-32 lg:h-32 w-24 h-24 object-cover mb-2"
                            />
                          </div>
                          <p className="lg:text-sm lg:font-regular lg:w-[21rem] w-[21rem] text-xs font-poppins mb-3 relative">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrow buttons with onClick handlers */}
          <IoIosArrowBack
            size={30}
            className="absolute lg:left-0 right-12 lg:top-1/2 top-[75%] transform -translate-y-1/2 text-2xl z-10 bg-gray-200 rounded-full lg:bg-white"
            onClick={handlePrevious}
          />
          <IoIosArrowForward
            size={30}
            className="absolute lg:right-0 right-0 bg-gray-200 rounded-full lg:bg-white lg:top-1/2 top-[75%] transform -translate-y-1/2 text-2xl z-10"
            onClick={handleNext}
          />
        </Carousel>

        {/* Circle Images */}
        <div className="absolute lg:right-16 lg:top-[20vh] top-[15vh] lg:p-0 ">
          <div className="border-4 border-gray-300 w-[20rem] h-[20rem] rounded-full">
            <p className="absolute text-center top-[8rem] left-[5rem]  text-lg font-bold text-[#138808] w-[10rem]">
              {slides[currentSlide]?.title}
            </p>
           
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`bg-white relative w-20 h-20 rounded-full ${
                  index === 0
                    ? "top-[13rem] right-[1rem]"
                    : index === 1
                    ? "-top-[4rem] right-[1rem]"
                    : index === 2
                    ? "left-[11rem] -top-[12rem]"
                    : index === 3
                    ? "left-[17rem] -top-[7rem]"
                    : "-top-[4rem] left-[9rem]"
                }`}
                onMouseEnter={() => handleHover(index)}
              >
                <Image
                  src={slide.img}
                  alt={`icon ${index}`}
                  width={70}
                  height={70}
                  className={`transition-transform duration-300 ${
                    currentSlide === index
                      ? "opacity-100 scale-110"
                      : "opacity-50 hover:opacity-100 hover:scale-90"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center relative">
  <button className="lg:bottom-0 absolute lg:top-0 top-64 items-center justify-center text-center font-poppins border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white rounded-md z-10 w-[8rem] h-[2rem]">
    Read More
  </button>
</div>

        <div className="flex justify-center mt-40 lg:invisible visible">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 mx-2 rounded-full cursor-pointer transition-all ${
                currentSlide === index
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSustainability;
