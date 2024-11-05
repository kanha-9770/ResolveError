"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Page1Data } from "../Constants/product/product_data.json";
import Carousal from "./Carousal";

// Debounce function to limit the rate of invoking a function
const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const ProductPage1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const totalSlides = Page1Data.products.length;

  // Function to handle dot click event and scroll to the selected slide
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  // Function to scroll to a specific slide
  const scrollToSlide = (index: number) => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      slideRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  // Debounced scroll handler to update the current slide index
  const handleScroll = debounce(() => {
    if (slideRef.current) {
      const scrollPosition = slideRef.current.scrollLeft;
      const slideWidth = slideRef.current.clientWidth;
      const newSlide = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(newSlide);
    }
  }, 100); // Adjust debounce delay as needed

  // Use effect to add scroll event listener
  useEffect(() => {
    const currentRef = slideRef.current;
    currentRef?.addEventListener("scroll", handleScroll);
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Use effect to automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Use effect to scroll to the current slide with a slight delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToSlide(currentSlide);
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className="bg-white w-full lg:mt-[8vh] mt-[7vh] flex lg:flex-row flex-col font-poppins border-b-2 border-solid border-[#cacaca]">
      {/* Product Information Section */}
      <div className="lg:w-[40%] lg:px-[2vw] px-[4vw]">
        <h1 className="lg:text-[3rem] text-[1.8rem] w-[16vw] lg:leading-[3.5rem] lg:my-[1.2rem] my-[0.5vh]">
          <span className="text-[#9e9c9c] font-medium">
            {Page1Data.ourProduct.trim().replace(/\s+\S+$/, "")}
          </span>{" "}
          <span className="text-[#dc0e2a] font-semibold">
            {Page1Data.ourProduct.trim().match(/\S+$/)}
          </span>
        </h1>
        <p className="lg:w-[76%] lg:text-[0.9rem] text-[#9e9c9c] text-[0.8rem]">{Page1Data.description}</p>
      </div>
      {/* Decorative Elements */}
      <div>
        <div className="border-r-2 border-solid border-[#e7e7e7] lg:block hidden h-[10rem] mt-[1.3rem] relative"></div>
        <div className="bg-gradient-to-t from-white w-[0.2vw] lg:block hidden h-[8rem] absolute top-[8rem]"></div>
      </div>
      {/* Slides Container */}
      <div className="lg:w-[60%] lg:my-0 my-[2vh] lg:px-0 px-[4vw]">
        <h2 className="lg:text-[1.5rem] text-[1.2rem] font-medium text-[#dc0e2a] my-[0.4rem] lg:pl-[1vw]">
          {Page1Data.featuredProducts}
        </h2>
        <Carousal/>
      </div>
    </div>
  );
};

export default ProductPage1;