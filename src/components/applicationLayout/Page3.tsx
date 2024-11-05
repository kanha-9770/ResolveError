"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Page3Data } from "../Constants/application/applicationLayout_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Page3Props {
  page3product: {
    image: { img: string }[];
  };
}

const Page3: React.FC<Page3Props> = ({ page3product }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    page3product.image[0].img // Set the first image as the default selected image
  );
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
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
            end: "85% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full lg:mt-[16vh] mt-[8vh] font-poppins">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#6f6f6f] w-[10%] lg:mx-[2rem] mx-[1rem]"
        ></div>
        <div className="flex lg:flex-row flex-col lg:py-[14vh] py-[2vh] px-[1rem] lg:static relative">
          <div className="lg:w-[22%] lg:pt-[5vh] lg:relative">
            <div className="flex flex-col lg:items-center lg:justify-center">
              <h2 className="lg:text-[2.6rem] text-[1.5rem] lg:text-center font-semibold lg:mb-[2vh]">
                <span className="text-[#9e9c9c]">
                  {Page3Data?.title.trim().replace(/\s+\S+$/, "")}
                </span>{" "}
                <span className="text-[#dc0e2a]">
                  {Page3Data?.title.trim().match(/\S+$/)}
                </span>
              </h2>
              <p className="text-[#9e9c9c] lg:w-[70%] lg:text-center mb-[2vh] lg:text-[1rem] text-[0.8rem]">
                {Page3Data.description}
              </p>
            </div>
            <button
              className="text-[#9e9c9c] lg:text-[2rem] lg:bg-transparent bg-white p-1 rounded-full text-[1.2rem] absolute lg:bottom-[5vh] lg:left-[3vw] right-16 -bottom-8 hover:text-[#dc0e2a]"
              onClick={scrollLeft}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="text-[#9e9c9c] lg:text-[2rem] text-[1.2rem] lg:bg-transparent bg-white p-1 rounded-full absolute lg:bottom-[5vh] lg:right-[3vw] right-4 -bottom-8 hover:text-[#dc0e2a]"
              onClick={scrollRight}
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Display selected image in mobile view */}
          <div className="w-full h-[25vh] mb-[2vh] lg:hidden px-[0.2rem]">
            <Image
              src={selectedImage!}
              alt="Selected image"
              width={400}
              height={400}
              className="w-full h-full rounded-[0.5rem]"
            />
          </div>

          <div className="lg:w-[78%] flex items-center overflow-hidden px-[0.2rem]">
            <div
              className="w-full overflow-auto scrollbar-hide"
              ref={carouselRef}
            >
              <div className="w-max flex items-center justify-center">
                {page3product.image.map((item, idx) => (
                  <div
                    key={idx}
                    className={`mx-[0.8vw] bg-white lg:w-[26vw] lg:h-[60vh] lg:rounded-[1rem] rounded-[0.5rem] flex items-center justify-center overflow-hidden cursor-pointer ${
                      selectedImage === item.img
                        ? "lg:border-none border-2 border-[#dc0e2a]"
                        : "border-none"
                    }`}
                    onClick={() => setSelectedImage(item.img)}
                  >
                    <Image
                      src={item.img}
                      alt={`Image ${idx + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
