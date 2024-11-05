"use client";

import Image from "next/image";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { data } from "../Constants/Navbar/about-data";
import { IoAddCircle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { cards, Heading } from "../Constants/About/AboutUsPage.json";

type Card = {
  video: string;
  hoverSrc:string;
};

type ExampleComponentProps = {
  active: Card;
  cards: Card[];
};

const truncateText = (text: string, maxWords: number) => {
  const wordsArray = text.split(" ");
  if (wordsArray.length > maxWords) {
    return wordsArray.slice(0, maxWords).join(" ") + "...";
  }
  return text; // Return full text if it's within the limit
};

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const maxWordsForMobile = 10;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    setActive(null);
  };

  useEffect(() => {
    cards.forEach((card) => {
      const preloadimg = new window.Image();
      preloadimg.src = card.video;
    });
  }, [cards]);

  return (
    <div className="lg:h-full h-[100vh] w-full bg-white overflow-hidden relative">
      <h2 className="lg:text-5xl text-2xl font-medium text-[#3a2a79] mb-4 top-6 font-poppins relative lg:left-9 left-4">
        {Heading.title}
      </h2>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] backdrop-blur-md">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex relative top-14 bg-white  left-[40vw]  items-center justify-center  rounded-full lg:h-7 lg:w-7 lg:p-1 lg:left-36 lg:top-[23vh]"
              onClick={handleClose}
            >
              <RxCross2 className="text-[#3a2a79] " size={20} />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[90vw] lg:w-[20rem]  lg:h-[80vh]  md:max-h-[60%] lg:mt-20 -mt-44  flex flex-col bg-[#f7f7f7] dark:bg-neutral-900 sm:rounded-3xl overflow-hidden rounded-xl"
            >
              <div className="relative w-full h-52 lg:h-44 sm:rounded-tr-lg sm:rounded-tl-lg overflow-hidden">
                {/* Background video */}
                <Image
                  src={active.video}
                  alt="gif"
                  width={100}
                  height={100}
                  className="absolute inset-0 w-full h-full object-cover bg-[#3a2a79]"
                />

                {/* Title */}
                <h1 className="absolute font-poppins bottom-2 left-0 right-0 text-center font-bold text-lg text-white z-10">
                  {active.title}
                </h1>

                {/* Overlay image */}
                <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <Image
                
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-20 h-20 sm:rounded-lg object-cover invert"
                  />
                </motion.div>
              </div>

              <div className="">
                <div className="pt-4 relative p-12 top-3 text-center">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-sm font-regular font-poppins h-40 md:h-fit flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.description === "function"
                      ? active.description
                      : active.description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" lg:p-12 lg:space-y-3 grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:flex-col p-5 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className=" lg:flex flex  flex-col-reverse lg:flex-row justify-between items-center bg-[#f7f7f7] dark:hover:bg-neutral-800 rounded-lg cursor-pointer group lg:w-full lg:h-full h-[40vh]"
          >
            <div className="md:flex gap-4 flex-col lg:flex-row lg:p-6 grid grid-cols-1 sm:grid-cols-2 ">
              <div className=" col-span-1">
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-black font-poppins text-center md:text-left lg:w-[70vw] lg:text-sm font-regular text-xs w-[45vw] lg:px-0 px-2"
                >
                  {/* Title */}
                  <span className="text-center lg:text-left lg:text-md text-lg lg:-mt-0 relative lg:-top-0 -top-8 font-medium lg:text-[#3a2a79] text-black font-poppins block">
                    {card.title}
                  </span>

                  {/* Paragraph */}
                  <span className="block">
                    {/* Conditionally render a shorter version on mobile */}
                    <span className="block lg:hidden relative -top-7">
                      {/* Use utility function to truncate text */}
                      {truncateText(card.description, maxWordsForMobile)}
                    </span>

                    {/* Full description for larger screens */}
                    <span className="hidden lg:block font-poppins">
                      {card.description}
                    </span>
                  </span>
                  <IoAddCircle
                    className="relative left-[31vw] block lg:hidden text-[#3a2a79]"
                    size={30}
                  />
                </motion.p>

                <div className=" lg:visible invisible relative -left-5 top-[4.5vh] h-[2px] w-[55vh] bg-[#2d1f66] rounded-sm "></div>
              </div>
            </div>
            <div className="flex lg:space-x-8 lg:ml-24 ">
              <div className=" lg:visible invisible relative left-5  w-[2px] bg-[#2d1f66] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                key={index}
                className="w-full lg:p-5 h-full flex items-center justify-center  lg:bg-[#000088] lg:rounded-tr-lg lg:rounded-br-lg transition-colors duration-300 p-7 group "
              >
                <Image
                  src={card.src}
                  alt="svg"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full transition-transform duration-300 invert "
                />
               
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      <div className="flex justify-center bg-slate-50">
  <button className=" absolute bottom-2 w-[8rem]  text-base hover:font-medium font-normal font-poppins h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10 ">
    Read More
  </button>
</div>

    </div>
  );
}
