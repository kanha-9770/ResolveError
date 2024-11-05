"use client";
import React, { useEffect, useRef } from "react";
import hero from "../../../public/assets/knowledgeCenter/hero.svg";
import Image from "next/image";
import "./style.css";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import bulbjson from "../../../public/assets/knowledgeCenter/bulbjson.json";
import lightglow from "../../../public/assets/knowledgeCenter/lightglow.svg";
import mainbulb from "../../../public/assets/knowledgeCenter/mainbulb.svg";
import { gsap } from "gsap";

const HeroSection = () => {
  const glowRef1 = useRef<HTMLImageElement>(null);
  const glowRef2 = useRef<HTMLImageElement>(null);
  const glowRef3 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const refs = [glowRef1.current, glowRef2.current, glowRef3.current];

    refs.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0.5 }, // Start partially visible
          {
            opacity: 1, // Fade to full opacity
            duration: 1,
            repeat: -1, // Repeat indefinitely
            yoyo: true, // Reverse the animation on repeat
          }
        );
      }
    });

    // Cleanup animation on component unmount
    return () => {
      refs.forEach((ref) => {
        gsap.killTweensOf(ref);
      });
    };
  }, []);

  useEffect(() => {
    // GSAP animation
    gsap.to(".light-bulb", {
      filter: "drop-shadow(0 0 80px rgba(255, 255, 255, 1))", // Intense white glow
      opacity: 1, // Full glow at peak
      duration: 1.5, // Time it takes to complete the glow
      yoyo: true, // Reverses animation back to original state
      repeat: -1, // Infinite loop
      ease: "power2.inOut", // Smooth ease in and out for the glow
    });
  }, []);
  return (
    <div className="flex pt-24 bg-black h-screen w-full flex-col">
      <div className="h-[10%]">
        <p className="text-5xl px-10 font-poppins font-bold  text-white">
          Knowledge Center
        </p>
      </div>
      <div className="h-[90%] flex flex-row w-full">
        <div className="w-1/2 ">
          <Image
            src={hero}
            className="h-full w-full object-contain"
            height={600}
            width={600}
            alt={"knowldege-hero"}
          />
        </div>
        <div className="w-1/2">
          {/* start */}
          <div className="bg-black text-white py-20">
            <h1 className="text-left text-4xl font-bold mb-10">
              Master Your Product, Machine, and Business with
              <span className="text-purple-500 ml-1">Nessco.</span>
            </h1>
            <div className="flex justify-center gap-10">
              <div className="text-center">
                <div className="relative  flex flex-col items-center justify-center">
                  {/* SVG Bulb Icon with Glow */}
                  <div className="">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 light-bulb w-14 glow"
                      viewBox="0 0 22 32"
                      enable-background="new 0 0 22 32"
                      fill="#000000"
                      transform="rotate(180)"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path
                            fill="#808184"
                            d="M16,27H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,28,7,28h9c0.276,0,0.5-0.224,0.5-0.5S16.276,27,16,27z"
                          ></path>
                          <path
                            fill="#808184"
                            d="M16.5,29.5c0-0.276-0.224-0.5-0.5-0.5H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,30,7,30h9C16.276,30,16.5,29.776,16.5,29.5z"
                          ></path>
                          <path
                            fill="#808184"
                            d="M9,31c-0.276,0-0.5,0.224-0.5,0.5S8.724,32,9,32h5c0.276,0,0.5-0.224,0.5-0.5S14.276,31,14,31H9z"
                          ></path>
                          <path
                            fill="#808184"
                            d="M17,25.5v-0.611c0-2.534,0.926-5.049,2.677-7.274c1.52-1.93,2.323-4.245,2.323-6.697 C22,4.897,17.065,0,11,0c-0.415,0-0.838,0.023-1.255,0.069c-4.872,0.536-8.92,4.41-9.625,9.212 c-0.495,3.374,0.566,6.709,2.913,9.15C4.946,20.423,6,22.897,6,25.398V25.5C6,25.776,6.224,26,6.5,26h10 C16.776,26,17,25.776,17,25.5z M9,14H7.25c-0.965,0-1.75-0.893-1.75-1.84s0.785-1.779,1.75-1.779S9,11.09,9,12.037V14z M12,25h-2 V15h2V25z M16,25h-3V15h1.75c1.517,0,2.75-1.341,2.75-2.84s-1.233-2.779-2.75-2.779S12,10.538,12,12.037V14h-2v-1.963 c0-1.499-1.233-2.718-2.75-2.718S4.5,10.661,4.5,12.16S5.733,15,7.25,15H9v10H6.992c-0.105-2.623-1.246-5.188-3.238-7.262 C1.623,15.521,0.66,12.492,1.11,9.426C1.75,5.067,5.428,1.55,9.854,1.063C15.898,0.391,21,5.075,21,10.917 c0,2.226-0.729,4.327-2.108,6.078C17,19.399,16,22.128,16,24.889V25z M13,14v-1.963c0-0.947,0.785-1.718,1.75-1.718 s1.75,0.893,1.75,1.84S15.715,14,14.75,14H13z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <Image
                    ref={glowRef1}
                    src={lightglow}
                    className="absolute top-[0.3rem] h-full w-full"
                    alt={""}
                  />
                  <div className="flex flex-col items-center justify-center mt-20 gap-2">
                    <AiOutlineProduct className="text-5xl" />
                    <h2 className="text-2xl font-bold">Know Your Product</h2>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative flex flex-col items-center justify-center">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 light-bulb w-14 glow"
                    viewBox="0 0 22 32"
                    enable-background="new 0 0 22 32"
                    fill="#000000"
                    transform="rotate(180)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          fill="#808184"
                          d="M16,27H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,28,7,28h9c0.276,0,0.5-0.224,0.5-0.5S16.276,27,16,27z"
                        ></path>
                        <path
                          fill="#808184"
                          d="M16.5,29.5c0-0.276-0.224-0.5-0.5-0.5H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,30,7,30h9 C16.276,30,16.5,29.776,16.5,29.5z"
                        ></path>
                        <path
                          fill="#808184"
                          d="M9,31c-0.276,0-0.5,0.224-0.5,0.5S8.724,32,9,32h5c0.276,0,0.5-0.224,0.5-0.5S14.276,31,14,31H9z"
                        ></path>
                        <path
                          fill="#808184"
                          d="M17,25.5v-0.611c0-2.534,0.926-5.049,2.677-7.274c1.52-1.93,2.323-4.245,2.323-6.697 C22,4.897,17.065,0,11,0c-0.415,0-0.838,0.023-1.255,0.069c-4.872,0.536-8.92,4.41-9.625,9.212 c-0.495,3.374,0.566,6.709,2.913,9.15C4.946,20.423,6,22.897,6,25.398V25.5C6,25.776,6.224,26,6.5,26h10 C16.776,26,17,25.776,17,25.5z M9,14H7.25c-0.965,0-1.75-0.893-1.75-1.84s0.785-1.779,1.75-1.779S9,11.09,9,12.037V14z M12,25h-2 V15h2V25z M16,25h-3V15h1.75c1.517,0,2.75-1.341,2.75-2.84s-1.233-2.779-2.75-2.779S12,10.538,12,12.037V14h-2v-1.963 c0-1.499-1.233-2.718-2.75-2.718S4.5,10.661,4.5,12.16S5.733,15,7.25,15H9v10H6.992c-0.105-2.623-1.246-5.188-3.238-7.262 C1.623,15.521,0.66,12.492,1.11,9.426C1.75,5.067,5.428,1.55,9.854,1.063C15.898,0.391,21,5.075,21,10.917 c0,2.226-0.729,4.327-2.108,6.078C17,19.399,16,22.128,16,24.889V25z M13,14v-1.963c0-0.947,0.785-1.718,1.75-1.718 s1.75,0.893,1.75,1.84S15.715,14,14.75,14H13z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <Image
                    ref={glowRef2}
                    src={lightglow}
                    className="absolute top-1 h-full w-full"
                    alt={""}
                  />
                  <div className="flex flex-col items-center justify-center mt-20 gap-2">
                    <LiaToolsSolid className="text-5xl" />
                    <h2 className="text-2xl text-center font-bold">
                      Know Your Machine
                    </h2>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="relative flex flex-col items-center justify-center">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 light-bulb w-14 glow"
                    viewBox="0 0 22 32"
                    enable-background="new 0 0 22 32"
                    fill="#000000"
                    transform="rotate(180)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          fill="#808184"
                          d="M16,27H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,28,7,28h9c0.276,0,0.5-0.224,0.5-0.5S16.276,27,16,27z"
                        ></path>
                        <path
                          fill="#808184"
                          d="M16.5,29.5c0-0.276-0.224-0.5-0.5-0.5H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,30,7,30h9 C16.276,30,16.5,29.776,16.5,29.5z"
                        ></path>
                        <path
                          fill="#808184"
                          d="M9,31c-0.276,0-0.5,0.224-0.5,0.5S8.724,32,9,32h5c0.276,0,0.5-0.224,0.5-0.5S14.276,31,14,31H9z"
                        ></path>
                        <path
                          fill="#808184"
                          d="M17,25.5v-0.611c0-2.534,0.926-5.049,2.677-7.274c1.52-1.93,2.323-4.245,2.323-6.697 C22,4.897,17.065,0,11,0c-0.415,0-0.838,0.023-1.255,0.069c-4.872,0.536-8.92,4.41-9.625,9.212 c-0.495,3.374,0.566,6.709,2.913,9.15C4.946,20.423,6,22.897,6,25.398V25.5C6,25.776,6.224,26,6.5,26h10 C16.776,26,17,25.776,17,25.5z M9,14H7.25c-0.965,0-1.75-0.893-1.75-1.84s0.785-1.779,1.75-1.779S9,11.09,9,12.037V14z M12,25h-2 V15h2V25z M16,25h-3V15h1.75c1.517,0,2.75-1.341,2.75-2.84s-1.233-2.779-2.75-2.779S12,10.538,12,12.037V14h-2v-1.963 c0-1.499-1.233-2.718-2.75-2.718S4.5,10.661,4.5,12.16S5.733,15,7.25,15H9v10H6.992c-0.105-2.623-1.246-5.188-3.238-7.262 C1.623,15.521,0.66,12.492,1.11,9.426C1.75,5.067,5.428,1.55,9.854,1.063C15.898,0.391,21,5.075,21,10.917 c0,2.226-0.729,4.327-2.108,6.078C17,19.399,16,22.128,16,24.889V25z M13,14v-1.963c0-0.947,0.785-1.718,1.75-1.718 s1.75,0.893,1.75,1.84S15.715,14,14.75,14H13z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <Image
                    ref={glowRef3}
                    src={lightglow}
                    className="absolute top-1 h-full w-full"
                    alt={""}
                  />
                  <div className="flex flex-col items-center justify-center mt-20 gap-2">
                    <IoBarChartOutline className="text-5xl" />
                    <h2 className="text-2xl font-bold">Know Your Business</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
