"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Page1Data } from "../Constants/Sustainability/Sustainability-Data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const butterflyRef = useRef(null);
  const grassRef = useRef(null);
  const treesRef = useRef(null);
  const screen = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      butterflyRef.current,
      { x: 0, opacity: 0 },
      { x: 80, opacity: 1, duration: 2 }
    );
    // Scroll animation
    gsap.fromTo(
      butterflyRef.current,
      { x: 80, opacity: 1 },
      {
        x: 0, // Adjust the end value as needed
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: screen.current,
          start: "top", // Adjust as needed
          scrub: true,
        },
      }
    );

    gsap.fromTo(treesRef.current, { y: 0 }, { y: -290, duration: 0.5 });

    gsap.fromTo(
      treesRef.current,
      { y: -290 },
      {
        y: 0, // Adjust the end value as needed
        duration: 0.3,
        scrollTrigger: {
          trigger: screen.current,
          start: "top ", // Adjust as needed
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      grassRef.current,
      { y: 0, opacity: 0 },
      { y: -110, opacity: 1, duration: 0.5, delay: 0.4 }
    );

    gsap.fromTo(
      grassRef.current,
      { y: -110 },
      {
        y: 0, // Adjust the end value as needed
        duration: 0.2,
        delay: 10,
        scrollTrigger: {
          trigger: screen.current,
          start: "top", // Adjust as needed
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className="mt-8 flex items-center justify-center h-screen"
      ref={screen}
    >
      <Image
        src={Page1Data.butterfly}
        alt="butterfly"
        className="absolute top-[5rem] left-0 w-[20rem] z-[1]"
        ref={butterflyRef}
      />
      <div className="w-full h-[80vh] mx-20 bg-white rounded-[40px] relative overflow-hidden">
          <div className="flex flex-col items-center justify-center  h-full relative z-[5] ">
            <h2 className="text-[6.3rem] font-black text-[#0C350F] font-poppins text-center">
              {Page1Data.title}
            </h2>
            <h2 className="relative right-[11rem] bottom-5 text-xl font-poppins font-thin">
              {Page1Data.description}
            </h2>
          </div>
        <Image
          src={Page1Data.grass}
          alt="grass"
          width={1100}
          height={400}
          className="absolute left-3 -bottom-[8.1rem] "
          ref={grassRef}
        />
        <div>
          <Image
            src={Page1Data.trees}
            alt="trees"
            className="absolute right-0 -bottom-[19rem] z-[10] h-[44vh] w-[35rem]"
            ref={treesRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
