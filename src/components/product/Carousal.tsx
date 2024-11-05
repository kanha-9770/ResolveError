"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Page1Data } from "../Constants/product/product_data.json";
import { gsap } from "gsap";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const autoSlideInterval = 3000; // Interval time in milliseconds
  const slideRef = useRef<HTMLDivElement>(null);

  // GSAP animation for slide transitions
  const animateSlide = (direction: string) => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, x: direction === "next" ? 500 : 0 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    }
  };

  // // Previous slide function
  // const prevSlide = (): void => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide
  //     ? Page1Data.products.length - 1
  //     : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  //   animateSlide("prev"); // Trigger GSAP animation for the previous slide
  // };

  // Next slide function
  const nextSlide = (): void => {
    const isLastSlide = currentIndex === Page1Data.products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    animateSlide("next"); // Trigger GSAP animation for the next slide
  };

  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto h-max group">
      <div className="flex w-full h-max" ref={slideRef}>
        {/* Slide content */}
        <div className="w-[50%] lg:pl-[1vw]">
          <h1 className="lg:text-[2.2rem] text-[1.4rem] font-bold italic text-[#9e9c9c] mb-[0.5rem]">
            {Page1Data.products[currentIndex].machineName}
          </h1>
          <p className="lg:text-[0.9rem] text-[#9e9c9c] text-[0.7rem] pr-[1vw]">
            {Page1Data.products[currentIndex].description}
          </p>
        </div>
        <div className="w-[50%] flex">
          <Image
            src={Page1Data.products[currentIndex].machineImg}
            alt={Page1Data.products[currentIndex].machineName}
            width={400}
            height={400}
            className="lg:w-[22vw] w-[45vw] lg:-mt-[4rem] mt-[2.5rem] lg:ml-0 ml-[2vw]"
          />
          <Image
            src={Page1Data.products[currentIndex].productImg}
            alt={Page1Data.products[currentIndex].machineName}
            width={400}
            height={400}
            className="lg:w-[6vw] w-[12vw] lg:-mt-[14rem] -mt-[8rem] lg:-ml-0 -ml-[14vw]"
          />
        </div>
      </div>
      <div className="absolute lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Page1Data.products.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-black" : "bg-[#9e9c9c]"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
