"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./History.module.css";
import { FaRegCircle } from "react-icons/fa6";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

const events: TimelineEvent[] = [
  {
    year: "1990",
    title: "Our History",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
  {
    year: "1991",
    title: "Expansion",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
  {
    year: "1992",
    title: "Technological Advancements",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
  {
    year: "1993",
    title: "Technological Advancements",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
  {
    year: "2010",
    title: "Technological Advancements",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
  {
    year: "2011",
    title: "Technological Advancements",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
  {
    year: "2012",
    title: "Technological Advancements",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
  {
    year: "2013",
    title: "Technological Advancements",
    description:
      "Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.",
    image: "/assets/about/nessco-team.webp",
  },
];

const Timeline = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefix, setPrefix] = useState("19"); // Default prefix for the initial year

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const sectionHeight = window.innerHeight;
        const index = Math.min(
          Math.floor(scrollTop / sectionHeight),
          events.length - 1
        );

        if (currentEvent !== index) {
          setCurrentEvent(index);
        }
      }
    };

    containerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [currentEvent]);

  useEffect(() => {
    const currentYear = events[currentEvent].year;
    setPrefix(currentYear.slice(0, 2));
  }, [currentEvent]);

  return (
    <div
      className={`h-screen w-full relative bottom-16 ${styles["hide-scrollbar"]}`}
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-black" />
      <div className="sticky z-50 bg-black -mt-[2rem] w-full text-center mr-5">
        <h2 className="text-white text-6xl font-montserrat ml-10  ">
          Our <span className="text-red-500"> History</span>
        </h2>
      </div>
      <div
        className={`h-screen top-[5rem] w-full overflow-y-scroll ${styles["hide-scrollbar"]}`}
        ref={containerRef}
      >
        <div className="flex flex-col h-[300vh]">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-screen w-full transition-opacity  ${
                currentEvent === index ? "opacity-100" : "opacity-100"
              }`}
            >
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl h-full mx-auto text-white p-10 rounded-2xl  ">
                <div className="flex flex-col items-start justify-center w-full md:w-1/2 pr-10 ">
                  <div className={styles["year-animation"]}>
                    <div className={styles["year-animation__prefix"]}>
                      {prefix}
                    </div>
                    <div className="relative">
                      <div className="absolute top-[-4rem] left-[6rem] text-thin ">
                        <FaRegCircle size={27} />
                      </div>
                    </div>
                    <div className={styles["year-animation__separator"]} />
                    <div className={styles["year-animation__suffix"]}>
                      {event.year.slice(2)}
                    </div>
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden mt-5 ml-10 ">
                  <Image
                    src={event.image}
                    alt={event.year}
                    width={400}
                    height={350}
                    objectFit="cover"
                    className={`rounded-2xl p-1 mt-20   ${styles["image-animation"]}`}
                  />
                </div>
                <p
                  className={`mt-28 w-[80%]  font-montserrat text-left text-justify ml-10 ${styles["slide-in"]}`}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
