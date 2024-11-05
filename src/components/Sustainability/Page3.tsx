"use client";
import React, { useEffect, useRef } from "react";
import { Page3Data } from "../Constants/Sustainability/Sustainability-Data";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const globeRef = useRef(null);
  const screen = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(globeRef.current, { x: -120 }, { x: 0, duration: 3 });
    // Scroll animation
    gsap.fromTo(
      globeRef.current,
      { x: 0 },
      {
        x: -120,
        duration: 3,
        scrollTrigger: {
          trigger: screen.current,
          start: "30% bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div
          className="bg-[#388E3C] h-[29rem] relative w-full mt-[10rem] mx-[5rem] rounded-[2rem]"
          ref={screen}
        >
          <Image
            src={Page3Data.branchLeaves}
            alt="branchLeaves"
            className="absolute -top-[9.1rem] -left-[5rem] z-[300]"
          />

          <div className="flex absolute left-[3.3rem] top-[1.5rem] font-poppins">
            <h2 className="text-[3.3rem] font-extrabold text-white z-[301]">
              {Page3Data.titleWhite}
            </h2>
            <h2 className="absolute top-[4.5rem] whitespace-nowrap text-[3.3rem] font-extrabold text-black z-[301]">
              {Page3Data.titleBlack}
            </h2>
          </div>
          <div className=" flex absolute top-[14rem] left-[3.3rem] font-monserrat">
            <p className="w-full max-w-[50rem] text-white font-light leading-[1.3rem] text-[1rem] z-[301]">
              {Page3Data.description}
            </p>
          </div>
          <Image
            src={Page3Data.globe}
            alt="globe"
            className="absolute -bottom-[0.5rem] -right-[5.5rem] w-[22rem] "
            ref={globeRef}
          />
        </div>
      </div>
    </>
  );
};

export default Page3;
