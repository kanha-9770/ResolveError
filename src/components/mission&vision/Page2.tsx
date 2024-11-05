"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Page2Data } from "../Constants/mission&vision/mission&vision_data.json";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const imageWidths = [
  "w-[9vw]", // Width for the mission image
  "w-[9vw]", // Width for the vision image
  "w-[12vw]", // Width for the culture image
  "w-[9vw]", // Width for the csr image
];

const imageRight = [
  "lg:right-[6.5vw] right-[14vw]", // Width for the mission image
  "lg:right-[6.5vw] right-[14vw]", // Width for the vision image
  "lg:right-[5vw] right-[14vw]", // Width for the culture image
  "lg:right-[6.5vw] right-[14vw]", // Width for the csr image
];

const expandedImageWidths = [
  "lg:w-[17vw] w-[25vw]", // Expanded width for the mission image
  "lg:w-[17vw] w-[25vw]", // Expanded width for the vision image
  "lg:w-[20vw] w-[28vw]", // Expanded width for the culture image
  "lg:w-[17vw] w-[25vw]", // Expanded width for the csr image
];

const imageBottoms = [
  "lg:bottom-[4vh] bottom-[1vh]", // Bottom position for the mission image
  "lg:bottom-[4.5vh] bottom-[1vh]", // Bottom position for the vision image
  "lg:bottom-[1vh] bottom-[0.5vh]", // Bottom position for the culture image
  "lg:bottom-[3.5vh] bottom-[1vh]", // Bottom position for the csr image
];

const leftClasses = [
  "lg:left-0",
  "lg:left-[22.9vw]",
  "lg:left-[45.7vw]",
  "lg:left-[68.6vw]",
];

const Page2 = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [blurringIndex, setBlurringIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setBlurringIndex(index); // Set the index of the box being toggled
    setExpanded((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (blurringIndex !== null) {
      const timer = setTimeout(() => {
        setBlurringIndex(null); // Remove blur after transition
      }, 200); // Adjust the duration to match the CSS transition (300ms)

      return () => clearTimeout(timer);
    }
  }, [blurringIndex]);

  return (
    <div className="lg:mx-[3rem] flex items-center justify-center">
      <div className="lg:mb-[4rem] lg:mt-[2rem] mb-[4rem] -mt-[10vh] w-[90vw] lg:h-[70vh] flex lg:flex-row flex-col lg:relative">
        {Page2Data.cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white flex lg:flex-col flex-row justify-center items-center lg:rounded-[2rem] rounded-[1rem] lg:px-[4rem] lg:py-[3.2rem] px-[4vw] relative lg:absolute  lg:my-0 my-[0.5rem] transition-all duration-300 ${
              expanded === index
                ? "lg:left-0 lg:right-0 lg:w-full h-[70vh] z-20"
                : `${leftClasses[index]}  lg:w-[23.9%] w-full lg:h-[70vh] h-[6.5vh] z-10`
            }`}
          >
            <button
              className={`text-[2rem] z-10 ${
                expanded === index ? "text-black" : "text-[#3a2a79]"
              } absolute lg:top-3 lg:right-3 right-2 top-[1.1vh]`}
              onClick={() => handleToggle(index)}
            >
              {expanded === index ? <IoIosCloseCircle /> : <IoIosAddCircle />}
            </button>
            <div
              className={`lg:text-[2.2rem] text-[1.5rem]  font-poppins font-extrabold text-[#000088] absolute lg:top-[6vh] ${
                expanded === index
                  ? "lg:left-[4vw] lg:top-[6vh] top-[1vh] text-center"
                  : " lg:left-[5vw] left-[3vw] lg:text-center lg:w-[12vw] "
              } transition-all duration-300 ease-in-out ${
                blurringIndex === 3 ? "blur-sm" : ""
              }`}
            >
              <h2>
                {expanded === 3 && index === 3 ? card.longTitle : card.title}
              </h2>
            </div>
            <p
              className={`text-center lg:text-[1rem] text-[0.8rem] font-poppins absolute ${
                expanded === index
                  ? "lg:left-[4vw] lg:w-[58vw] w-[75vw] lg:top-[30vh] top-[13vh]"
                  : "lg:w-[11vw] lg:top-[24vh]"
              } transition-all duration-300 ease-in-out ${
                blurringIndex === index ? "blur-sm" : ""
              } ${
                expanded === index ? "" : "hidden lg:block" // Hide on mobile unless expanded
              }`}
            >
              {expanded === index ? card.largeDescription : card.description}
            </p>

            {card.descriptionList && expanded === index && (
              <div
                className={`absolute lg:text-[1rem] text-[0.8rem] lg:left-[4vw] lg:bottom-[6vh] bottom-[20vh] flex lg:w-[58vw] w-[75vw] transition-all duration-300 ease-in-out ${
                  blurringIndex === index ? "blur-sm" : ""
                }`}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {card.descriptionList.map((item, idx) => (
                    <div key={idx} className="flex mx-[0.5vw]">
                      {index === 1 && (
                        <div className="flex">
                          <p className="text-[#000088] mr-[0.5vw] font-bold lg:text-[1.2rem]">
                            {item.listImg}
                          </p>
                          <p>{item.point}</p>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="flex">
                          <Image
                            src={item.listImg}
                            alt={item.point}
                            width={100}
                            height={100}
                            className="lg:w-[3vw] lg:h-[6vh] w-[8vw] h-[4vh]"
                          />
                          <p>{item.point}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Image
              src={card.image}
              alt="Content"
              width={100}
              height={100}
              className={`absolute ${
                expanded === index ? "lg:right-[2rem]" : imageRight[index]
              }  ${imageBottoms[index]} ${
                expanded === index
                  ? expandedImageWidths[index]
                  : imageWidths[index]
              } transition-all duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
    </div>
  );
  ``;
};

export default Page2;
