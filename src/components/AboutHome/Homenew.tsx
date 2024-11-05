"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Page1Data } from "@/components/Constants/About/AboutUsPage.json";
import { gsap } from "gsap";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleAnimation = () => {
      if (mediaQuery.matches) {
        const triggerElement = document.querySelector(".trigger");
        const textElement = document.querySelector(".text-element");

        gsap.to(triggerElement, {
          backgroundColor: "#ffffff",
          height: "13vh",
          paddingLeft: "1vw",
          scrollTrigger: {
            trigger: triggerElement,
            start: "40% 10%",
            end: "10%",
            scrub: true,
          },
        });

        gsap.to(textElement, {
          fontSize: "2rem",
          paddingTop: "5vh",
          scrollTrigger: {
            trigger: triggerElement,
            start: "30% 10%",
            end: "10%",
            scrub: true,
          },
        });

        gsap.to(".text-element span", {
          color: "#ededed",
          fontWeight: "300",
          scrollTrigger: {
            trigger: ".trigger",
            start: "30% 10%",
            end: "10%",
            scrub: true,
          },
        });

        gsap.to(".text-element .lg\\:text-\\[\\#e12d2c\\]", {
          color: "#ededed",
          fontWeight: "350",
          scrollTrigger: {
            trigger: ".trigger",
            start: "30% 10%",
            end: "10%",
            scrub: true,
          },
        });
      }
    };

    // Call the function initially and also when the viewport size changes
    handleAnimation();
    mediaQuery.addEventListener("change", handleAnimation);

    // Cleanup function to remove the event listener
    return () => {
      mediaQuery.removeEventListener("change", handleAnimation);
    };
  }, []);

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
    <div className="relative lg:h-screen flex flex-col items-center overflow-hidden min-h-screen w-full lg:top-3 top-[4vh] ">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <div className="trigger lg:fixed lg:-top-[1vh] absolute z-30 lg:mt-[5vh] lg:w-full w-[13rem] lg:text-left text-center pl-[4vw] lg:left-0 lg:h-[18.5vh] left-[20vw] bottom-[20vh]">
          <h1 className="text-element font-poppins lg:pt-[6vh] lg:pl-[1vw] lg:text-[4rem] text-[3.5rem] lg:leading-normal leading-[5.6vh] font-medium">
            <span className="lg:text-[#9e9c9c] text-white">
              <span className="lg:font-medium">
                {Page1Data.title
                  .trim()
                  .replace(/\s+\S+$/, "")
                  .charAt(0)}
              </span>
              {Page1Data.title
                .trim()
                .replace(/\s+\S+$/, "")
                .slice(1)}
            </span>{" "}
            <span className="lg:text-[#e12d2c] text-white">
              <span className="lg:font-medium">
                {Page1Data.title.trim().match(/\S+$/)?.[0].charAt(0) || ""}
              </span>
              {Page1Data.title.trim().match(/\S+$/)?.[0].slice(1) || ""}
            </span>
          </h1>
        </div>
        <motion.div
          className="h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-120px)] rounded-xl px-[0.5rem]"
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <>
              <div className="relative w-full lg:h-[68vh] h-[75vh] lg:top-[17vh]">
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
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="text-white flex lg:flex-row flex-col items-center justify-center w-[88vw] absolute lg:bottom-[6vh] bottom-[25vh] lg:px-[3vw]">
        <div className="lg:w-[38%] lg:relative flex items-center justify-center">
          <Image
            src={Page1Data.leftBorderImg}
            alt="Content"
            height={100}
            width={100}
            className="w-[10vw] absolute -left-[1vw] -top-[3vw] hidden lg:block"
          />
          <p className="lg:static absolute bottom-[6vh] lg:w-[95%] lg:mx-[1rem] mx-[1rem] text-sm font-regular font-poppins text-center">
            {isMobile
              ? getFirst20Words(Page1Data.description)
              : Page1Data.description}
          </p>
        </div>
        <div className="lg:static absolute bottom-[32vh] left-[35vw] w-[22%] flex items-center justify-center">
          <Image
            src={Page1Data.mainImg}
            alt="Content"
            height={100}
            width={100}
            className="lg:w-[16vw] max-w-[40vw] "
          />
        </div>
        <div className="w-[38%] lg:relative flex items-center justify-center ">
          {Page1Data.image.map((item, index) => (
            <div
              key={index}
              className="w-[95%] flex flex-col items-center justify-center"
            >
              <Image
                src={item.img}
                alt="Content"
                height={100}
                width={100}
                className="w-[6vw] hidden lg:block"
              />
              <p className="font-medium  text-[1.1rem] hidden lg:block">
                {item.title}
              </p>
            </div>
          ))}
          <Image
            src={Page1Data.rightBorderImg}
            alt="Content"
            height={100}
            width={100}
            className="w-[10vw] absolute top-[1vh] -right-[1.5vw] hidden lg:block"
          />
        </div>

        {/* Conditionally render this div only on mobile */}
        {isMobile && (
          <div className="bg-white mt-[1rem] w-[8rem] h-[2rem] rounded-[1rem] relative flex items-center">
            <button className="text-black text-[0.8rem] absolute left-[1rem]">
              {Page1Data.getaQuote}
            </button>
            <button className="text-[#483d73] text-[1.6rem] absolute right-[0.1rem]">
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Home.displayName = "Hero";

export default memo(Home);