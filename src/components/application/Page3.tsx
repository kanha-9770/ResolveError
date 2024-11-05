"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Page3Data } from "../Constants/application/application_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "2%" },
        {
          width: "13%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-40% 40%",
            end: "-10% 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div
        className="w-full lg:mt-[8rem] mt-[6vh] lg:px-[2rem] px-[1rem] font-poppins"
        ref={carouselRef}
      >
        <div className="lg:px-[1rem] lg:mb-[8vh] mb-[4vh]">
          <div>
            <h2 className="lg:text-[2.9rem] text-[1.5rem] font-medium">
              <span className="text-[#c6c5c5]">
                {Page3Data.craftsmanshipTechnology
                  .trim()
                  .replace(/\s+\S+$/, "")}
              </span>{" "}
              <span className="text-[#dc0e2a]">
                {Page3Data.craftsmanshipTechnology.trim().match(/\S+$/)}
              </span>
            </h2>
          </div>
          <div
            className="border-t-[0.2rem] border-solid border-[#dc0e2a] w-[8rem] lg:mt-[1rem] mt-[0.5rem]"
            ref={borderRef}
          ></div>
          <div className="lg:w-[54vw] w-[98%] lg:mt-[2rem] mt-[1rem]">
            <p className="lg:text-[1rem] text-[0.8rem]">
              {Page3Data.paragraph}
            </p>
          </div>
        </div>
        {Page3Data.container.map((item, idx) => (
          <div
            key={idx}
            className="w-full lg:h-[26vh] h-[12vh] mt-[1.6vh] flex"
          >
            <div className="lg:w-[80%] w-[70%] h-full bg-white mr-[0.5rem] rounded-[0.5rem] p-[0.5rem] lg:p-[1rem]">
              <div>
                <h2 className="text-[#483d73] font-medium lg:text-[1.6rem] text-[0.7rem]">
                  {item.title}
                </h2>
              </div>
              <div className="h-max w-full lg:pl-[2rem] lg:mt-[1.5vh] mt-[0.5vh]">
                <p className="lg:text-[1rem] text-[0.5rem] w-[98%]">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="lg:w-[20%] w-[30%] h-full rounded-[0.5rem] overflow-hidden">
              <Image
                className="lg:h-[26vh] h-full w-full"
                width={300}
                height={300}
                src={item.craftsmanshipImg}
                alt={""}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page3;
