import React, { useState, useEffect, useCallback, useRef } from "react";
import { OurStrengthContent } from "../Constants/OurStrength/OurStrength-Data";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

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
    <>
      <div className="relative h-screen  flex flex-col items-center overflow-hidden  min-h-screen w-full top-3">
        <div className="relative sm:p-8 md:p-2 lg:px-12 w-full  mt-11">
          <motion.div
            className=" w-full h-[85vh] rounded-xl"
            ref={videoRef}
            style={{ width: videoWidth, x: videoX, originX: 0.5 }}
          >
            <video
              id="background-video"
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={OurStrengthContent.bgVideo} type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 w-full h-[25rem] bg-gradient-to-t from-black  rounded-b-xl "></div>
          </motion.div>
          <div className="relative mx-5 w-full">
            <div className="absolute -top-[12rem] left-0 text-white text-[7rem] font-alexBrush">
              {OurStrengthContent.title}
            </div>
            <div className="absolute right-0 mx-5 px-7 -top-[10rem] w-[45vw] mt-5  text-1xl font-poppins text-white text-center">
              &quot;{OurStrengthContent.description}&quot;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
