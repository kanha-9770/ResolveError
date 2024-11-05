"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const clientele: React.FC = () => {
  const leftHandRef = useRef<HTMLDivElement>(null);
  const rightHandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
  
    // Check screen width to determine mobile or desktop behavior
    const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint
  
    const mobileX = 40;  // Movement for mobile screens
    const desktopX = 110; // Movement for desktop screens
  
    const moveX = isMobile ? mobileX : desktopX; // Choose based on screen size
  
    tl.to(leftHandRef.current, {
      x: moveX, // Move right
      duration: 4,
      ease: "power2.inOut",
    })
      .to(rightHandRef.current, {
        x: -moveX, // Move left
        duration: 4,
        ease: "power2.inOut",
      }, "<") // "<" syncs the two animations
      .to(leftHandRef.current, {
       // Move back to the original position
        duration: 4,
        ease: "power2.inOut",
      })
      .to(rightHandRef.current, {
       // Move back to the original position
        duration: 4,
        ease: "power2.inOut",
      }, "<");
  }, []);

  return (
    <>
      <div className="lg:h-full lg:w-full h-screen w-full bg-black">
        <h1 className="relative font-poppins font-medium text-5xl left-7 lg:top-[15vh] top-[10vh]  text-white ">
          Clientele
        </h1>
        <div className="flex justify-between relative  lg:top-0 top-32">
          {/* Left Hand */}
          <div className="relative lg:top-14 lg:left-[11vw] z-10" ref={leftHandRef}>
            <Image
              src="/assets/clientele/28.svg"
              alt="lefthand"
              height={500}
              width={500}
              className=" "
            />
          </div>

          {/* Right Hand */}
          <div className="relative lg:right-[12vw] lg:top-5 -top-3" ref={rightHandRef}>
            <Image
              src="/assets/clientele/29.svg"
              alt="righthand"
              height={500}
              width={500}
              className=""
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-row flex-col  w-full font-poppins lg:pl-5 text-white relative ">
          <div className=" lg:w-2/5 text-5xl font-medium lg:top-0  relative top-32 text-left">
            <p className="lg:w-[16rem]">More than 1000 customers</p>
          </div>

          <div className=" lg:w-3/5 relative lg:text-right lg:pr-5 p-2 lg:p-0 lg:top-0 top-[20vh]  text-left w-[80%] text-sm font-poppins font-regular">
            <p className="">
              We are fortunate to have produced presentation materials for all
              sectors of activity and company sizes, in all graphic universes.
            </p>
            <p className=" font-bold pt-2 text-md">
              37 CAC40 companies have placed their trust in us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default clientele;
