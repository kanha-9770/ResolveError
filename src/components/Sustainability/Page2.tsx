"use client";
import React, { useRef, useEffect } from "react";
import { Page2Data } from "../Constants/Sustainability/Sustainability-Data";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const leftFootRef = useRef(null);
  const rightFootRef = useRef(null);
  const cupRef = useRef(null);
  const screen = useRef(null);

  useEffect(() => {
    // Scroll animation
    gsap.to(rightFootRef.current, {
      y: 0,
      x: 0,
      opacity: 0,
    });
    gsap.fromTo(
      rightFootRef.current,
      { y: 0, x: 0, opacity: 1 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: screen.current,
          start: "top 70%", // Adjust as needed
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.to(leftFootRef.current, {
      y: 0,
      x: 0,
      opacity: 0,
    });
    gsap.fromTo(
      leftFootRef.current,
      { y: 0, x: 0, opacity: 1 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: screen.current,
          start: "top 60%", // Adjust as needed
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.to(rightFootRef.current, {
      y: 100,
      x: -50,
      opacity: 0,
    });

    gsap.fromTo(
      rightFootRef.current,
      {
        y: 100,
        x: -50,
        opacity: 1,
      },
      {
        y: 100,
        x: -50,
        opacity: 1,
        scrollTrigger: {
          trigger: screen.current,
          start: "top 50%", // Adjust as needed
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.to(leftFootRef.current, {
      y: 100,
      x: -50,
      opacity: 0,
    });
    gsap.fromTo(
      leftFootRef.current,
      { y: 100, x: -50, opacity: 1 },
      {
        y: 100,
        x: -50,
        opacity: 1,
        scrollTrigger: {
          trigger: screen.current,
          start: "top 40%", // Adjust as needed
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.to(rightFootRef.current, {
      y: 100,
      x: -50,
      opacity: 0,
    });
    gsap.fromTo(
      rightFootRef.current,
      { y: 100, x: -50, opacity: 0 },
      {
        y: 100,
        x: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: screen.current,
          start: "top 0%", // Adjust as needed
          end: "top -10%",
          scrub: true,
        },
      }
    );

    gsap.to(leftFootRef.current, {
      y: 100,
      x: -50,
      opacity: 0,
    });
    gsap.fromTo(
      leftFootRef.current,
      { y: 100, x: -50, opacity: 0 },
      {
        y: 100,
        x: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: screen.current,
          start: "top -10%", // Adjust as needed
          end: "top -20%",
          scrub: true,
        },
      }
    );
      //Cup Animation
      gsap.fromTo(
        cupRef.current,
        { y: 100 },
        {
          y: 0, // Adjust the end value as needed
          duration: 2,
          scrollTrigger: {
            trigger: screen.current,
            start: "20% 35%", 
            end: "80% 60% ",
            scrub: true,
          },
        }
      );
  }, []);

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="mx-20 mt-9 relative h-[70vh] " ref={screen}>
        <div className="grid grid-flow-col gap-14">
          <div className="h-[31rem] w-[33rem]">
            <video
              id="background-video"
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={Page2Data.bgGarden} type="video/mp4" />
            </video>
          </div>
          <div>
            <Image
              src={Page2Data.leftFootprint}
              alt="footprint"
              width={40}
              className="absolute -top-8 -right-1"
              ref={leftFootRef}
            />
            <Image
              src={Page2Data.rightFootprint}
              alt="footprint"
              width={40}
              className="absolute -top-14 -right-10"
              ref={rightFootRef}
            />
            <h1 className="text-[3.2rem] font-black">{Page2Data.title1}</h1>
            <h1 className="text-[3.2rem] font-black text-[#95C43C]">
              {Page2Data.title2}
            </h1>
            <div className=" w-full h-[20rem] bg-[#0D340F] rounded-[40px] mt-5 relative ">
              <p className="text-center text-white text-[1.07rem] p-8 font-[200]">
                {Page2Data.description}
              </p>
              <Image
                src={Page2Data.leafs}
                alt="leafs"
                width={55}
                className="absolute top-2 -left-6"
              />
              <Image
                src={Page2Data.cup}
                alt="cup"
                width={80}
                className="absolute -bottom-8 -right-9"
                ref={cupRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
