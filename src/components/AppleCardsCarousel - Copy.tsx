"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000); // Adjust delay as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      checkScrollability();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        // If we reach the end, reset to the beginning for infinite scrolling
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
      checkScrollability();
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full items-center">
      <div className="flex flex-col  h-[6rem] lg:h-[5rem] w-full lg:w-[20%] gap-1 px-2 lg:px-0">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-2xl font-semibold text-red-500 text-center">
            Announcements
          </h1>
          <p className="text-lg lg:text-lg text-center font-poppins font-medium">
            Our Latest Events
          </p>
        </div>
        <div className="flex justify-around w-full lg:w-auto">
          <button
            className="relative z-20 h-12 w-12 lg:h-14 lg:w-24 rounded-full flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <FaArrowLeft className="text-xl lg:text-2xl text-gray-500" />
          </button>
          <button
            className="relative z-20 h-12 w-12 lg:h-14 lg:w-24 rounded-full flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <FaArrowRight className="text-xl lg:text-2xl text-gray-500" />
          </button>
        </div>
      </div>
      <div
        className="flex w-full lg:w-[80%] overflow-x-scroll py-6 lg:py-10 scroll-smooth [scrollbar-width:none] -mx-4 lg:mx-0 px-4 lg:px-0"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 lg:pl-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[2%] rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  src: string | StaticImageData;
  title: string;
  category: string;
  date?: string;
}

export const Card = ({ src, title, category, date }: CardProps) => {
  return (
    <motion.div className="rounded-2xl bg-white shadow-lg  dark:bg-neutral-900 h-28 w-[18rem] md:h-[5rem] md:w-80 overflow-hidden flex items-center space-x-4 p-2">
      <div className="relative flex-shrink-0 h-12 w-12 md:h-16 md:w-16 rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-fill"
        />
      </div>
      <div className="flex flex-col font-poppins h-16 md:h-16">
        <h3 className="text-black text-base  font-medium">{title}</h3>
        <p className="text-gray-600 font-light text-sm  ">
          {category}
        </p>
        <p className="text-gray-500 font-light text-sm ">
          {date}
        </p>
      </div>
    </motion.div>
  );
};
