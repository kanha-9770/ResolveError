"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Page1Data } from "../Constants/mission&vision/mission&vision_data.json";

const Home: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width and set state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for lg
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to get the first 20 words
  const getFirst20Words = (text: string) => {
    return (
      text.split(" ").slice(0, 15).join(" ") +
      (text.split(" ").length > 15 ? "" : "")
    );
  };

  const handleMouseEnter = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveLink(-1);
  }, []);

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  const { scrollY } = useScroll();
  const videoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
  const videoX = useTransform(scrollY, [0, 300], ["0%", "-25%"]);
  return (
    <div className="relative lg:h-screen h-full flex flex-col items-center overflow-hidden min-h-screen w-full lg:top-3 top-[4rem] ">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <motion.div
          className="md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-120px)] rounded-xl px-[1rem] lg:px-0"
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <div className="relative w-full h-full">
              <video
                id="background-video"
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setIsVideoLoaded(true)}
              >
                <source src={Page1Data.video} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 w-full h-full lg:h-52 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="text-white flex lg:flex-row flex-col items-center justify-center w-[90vw] absolute lg:bottom-[12vh] bottom-[25vh]">
        <h1 className="lg:font-alexBrush font-poppins mx-[1rem] lg:text-[5.5rem] text-[3rem] w-[50%] lg:border-solid lg:border-r-[0.1rem] lg:border-white  text-center lg:leading-normal leading-[2.6rem] lg:mb-0 mb-[1rem] lg:font-normal font-medium">
          {Page1Data.title}
        </h1>
        <p className="lg:w-[50%] lg:mr-[1rem] lg:ml-0 ml-[1rem] mr-[1rem] lg:text-[1rem] text-[0.7rem] font-poppins text-center">
          {isMobile
            ? getFirst20Words(Page1Data.description)
            : Page1Data.description}
        </p>
        {/* Conditionally render this div only on mobile */}
        {isMobile && (
          <div className="bg-white mt-[1rem] w-[8rem] h-[2rem] rounded-[1rem] relative flex items-center">
            <button className="text-black text-[0.8rem] absolute left-[1rem]">
              {Page1Data.getaQuote}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Home.displayName = "Hero";

export default memo(Home);
