"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {teampage} from "../Constants/ourCompany/OurcompanyPage.json"
export default function TeamPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (video && container) {
      gsap.registerPlugin(ScrollTrigger);

      const updateVideoTime = () => {
        const duration = video.duration;
        const scrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        const videoTime = duration * scrollFraction;
        video.currentTime = videoTime;
      };

      window.addEventListener("scroll", updateVideoTime);

      return () => {
        window.removeEventListener("scroll", updateVideoTime);
      };
    }
  }, []);

  return (
    <div
      className="relative h-[90vh] w-screen overflow-hidden lg:top-0 top-10"
      ref={containerRef}
    >
      <div className="absolute top-12 w-full text-center z-10 ">
        <h1 className="text-3xl font-medium  font-poppins text-white">
         {teampage.heading} <span className="text-rose-500">{teampage.highlight}</span>
        </h1>
        <h1 className="lg:text-lg text-3xl font-regular font-poppins text-white">
         {teampage.quote}
        </h1>
      </div>
      <video
        ref={videoRef}
        className="absolute lg:top-0 top-28 left-0 lg:w-full lg:h-[80vh] object-cover w-full"
        src={teampage.video}
        muted
        playsInline
      />
      
      <div className=" items text-center text-white  absolute bottom-[25vh]">
       
        <p className="text-center font-poppins px-5 lg:invisible  ">{teampage.description} </p>
        </div>
     
    </div>
  );
}
