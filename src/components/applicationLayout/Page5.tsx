"use client";
import React, { useState, useEffect, useRef } from "react";
import { Page5Data } from "../Constants/application/applicationLayout_data.json";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page5: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "10%" },
        {
          width: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-60% 80%",
            end: "60% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full h-max lg:mt-[4vh] mt-[10vh]  mb-[6vh] font-poppins">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#6f6f6f] w-[10%] lg:mx-[2vw] mx-[1rem]"
        ></div>
        <div className="flex lg:pt-[7vh] pt-[3vh] lg:pb-[5vh] pb-[2.5vh] px-[4vw] ">
          <h1 className="font-poppins font-semibold lg:text-[2rem] text-[1.4rem] mr-[1vw]">
            <span className="text-[#9e9c9c]">
              {Page5Data?.title.trim().replace(/\s+\S+$/, "")}
            </span>{" "}
            <span className="text-[#dc0e2a]">
              {Page5Data?.title.trim().match(/\S+$/)}
            </span>
          </h1>
        </div>
        <div
          className="w-full flex justify-center items-center px-[3vw]"
          ref={carouselRef}
        >
          <div className="lg:w-[72%] bg-white mx-[1.5vw] lg:py-[6vh] py-[2vh] lg:px-[2vw] px-[4vw] rounded-[0.5rem]">
            <div>
              <h2 className="font-semibold lg:text-[1.5rem] text-[1.2rem]">
                {Page5Data.subTitle}
              </h2>
              <div className="lg:border-t-[0.2rem] border-t-2 border-solid border-[#dc0e2a] lg:w-[6vw] w-[18vw] mt-[0.6rem]"></div>
            </div>
            <div className="h-[15.5rem] w-full mt-[2vh] overflow-hidden">
              <div className="h-full overflow-auto scrollbar-hide">
                {Page5Data.questions.map((item, idx) => (
                  <div key={idx} className="w-full lg:pt-[3vh] pt-[1vh]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleExpansion(idx)}
                    >
                      <h2 className="lg:text-[1.1rem] w-[70%] text-[0.9rem] font-medium font-poppins">
                        {item.que}
                      </h2>
                      {expandedIndex === idx ? (
                        <BsDashLg className="lg:text-2xl text-xl text-[#dc0e2a] font-bold" />
                      ) : (
                        <BsPlusLg className="lg:text-2xl text-xl" />
                      )}
                    </div>
                    <div className="lg:border-t-[0.2rem] border-[#d3d2d2] border-t-2 border-solid  mt-[0.5vh] lg:w-[70%] w-[80%]"></div>

                    {expandedIndex === idx && (
                      <div className="ml-[2vw] text-[#9e9c9c] py-[1vh] lg:text-[1rem] text-[0.8rem] w-[90%]">
                        <p>{item.ans}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[28%] lg:block hidden  mx-[1.5vw] bg-white rounded-[0.5rem] px-[0.5vw] py-[1vh]">
            <div className="px-[1vw] py-[1vh]">
              <div className="font-poppins mb-[1.8vh]">
                <div className="flex">
                  <h3 className="text-[1.1rem] font-semibold">
                    {Page5Data.formTitle}
                  </h3>
                </div>
                <p className="text-[#afacac] text-[0.9rem]">
                  {Page5Data.formPara}
                </p>
              </div>
              <form className="font-poppins">
                <div className="flex">
                  <div className="flex flex-col w-[49%] mr-[0.6vw]">
                    <label htmlFor="firstname" className="text-[0.9rem]">
                      {Page5Data.firstName}
                    </label>
                    <input
                      className="border-2 py-[0.4rem] px-[0.6vw] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder={Page5Data.tyler}
                    />
                  </div>
                  <div className="flex flex-col w-[49%]">
                    <label htmlFor="lastname" className="text-[0.9rem]">
                      {Page5Data.lastName}
                    </label>
                    <input
                      className="border-2 py-[0.4rem] px-[0.6vw] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder={Page5Data.durden}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[0.9rem]">
                    {Page5Data.emailAddress}
                  </label>
                  <input
                    className="border-2 py-[0.4rem] px-[0.6vw] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder={Page5Data.emailPlaceholder}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-[0.9rem]">
                    {Page5Data.password}
                  </label>
                  <input
                    className="border-2 py-[0.4rem] px-[0.6vw] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="twitterpassword" className="text-[0.9rem]">
                    {Page5Data.twitterPassword}
                  </label>
                  <input
                    className="border-2 py-[0.4rem] px-[0.6vw] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                    type="password"
                    name="twitterpassword"
                  />
                </div>
                <button className="border-2 py-[0.5rem] px-[0.6vw] text-[0.8rem] rounded-[0.5rem] bg-[#483d73] text-white w-full mt-[1.8vh]">
                  {Page5Data.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
