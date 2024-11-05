"use client";
import React, { useEffect, useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";
import { Page2Data } from "../Constants/application/application_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "./Modal";

gsap.registerPlugin(ScrollTrigger);

const Page2: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(Page2Data.products[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const rightContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSwipe = (direction: "left" | "right") => {
    const currentIndex = Page2Data.products.indexOf(selectedProduct);
    if (direction === "left" && currentIndex > 0) {
      setSelectedProduct(Page2Data.products[currentIndex - 1]);
    } else if (
      direction === "right" &&
      currentIndex < Page2Data.products.length - 1
    ) {
      setSelectedProduct(Page2Data.products[currentIndex + 1]);
    }
  };

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.changedTouches[0].screenX;
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndX = event.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        handleSwipe("right");
      } else if (touchEndX - touchStartX > 50) {
        handleSwipe("left");
      }
    };

    const container = rightContainerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [selectedProduct]);

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "2%" },
        {
          width: "15%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "10% 70%",
            end: "15% 80%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (rightContainerRef.current) {
      gsap.fromTo(
        rightContainerRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [selectedProduct]);

  const handleProductClick = (product: (typeof Page2Data.products)[0]) => {
    setSelectedProduct(product);
  };

  const handleViewAllClick = () => {
    setIsModalOpen(true); // Open modal
  };

  return (
    <>
      <div className="w-full lg:mt-[30vh] px-[1rem] font-poppins flex lg:flex-row flex-col items-center justify-center overflow-hidden">
        {/* Left-side product grid */}
        <div className="lg:w-[50%] lg:mx-[1rem] lg:pl-[4vw]">
          {/* Product Grid */}
          <div className="lg:w-[70%] lg:h-[85vh] bg-white rounded-[0.8rem] lg:px-[1rem] px-[0.5rem] py-[1rem] flex flex-col items-center justify-center">
            <div className="flex w-full">
              <div className="flex w-[60%] lg:h-[5.5vh] h-[3.5vh] rounded-[2rem] bg-[#f2f2f2] border-2 border-solid border-[#f2f2f2] overflow-hidden hover:border-[#d9d9d8] lg:mr-[1rem] mr-[0.4rem] text-[#6f6f6f] items-center">
                <button className="ml-[0.5rem] text-black lg:text-[1.2rem]">
                  <GrSearch />
                </button>
                <input
                  type="search"
                  placeholder={Page2Data.placeholder}
                  className="w-full px-[0.5rem] outline-none bg-transparent lg:text-[0.9rem] text-[0.7rem] text-[#6f6f6f]"
                />
              </div>
              <div className="w-[40%] lg:h-[5.5vh] h-[3.5vh] rounded-[2rem] bg-[#f2f2f2] border-2 border-solid border-[#f2f2f2] overflow-hidden hover:border-[#d9d9d8] px-[0.5rem] flex items-center">
                <select
                  id="Category"
                  name="Category"
                  className="w-full outline-none bg-transparent text-[#6f6f6f] lg:text-[0.9rem] text-[0.7rem]"
                >
                  <option value="" disabled selected>
                    {Page2Data.category}
                  </option>
                  <option value="item1">Paper Cup</option>
                  <option value="item2">Paper Bowl</option>
                  <option value="item3">Paper Roll</option>
                </select>
              </div>
            </div>

            <div className="lg:w-full w-[86vw] mt-[1rem] overflow-hidden">
              <div className="h-full overflow-auto pt-1 lg:px-3 scrollbar-hide">
                <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 gap-x-2 flex">
                  {Page2Data.products.map((item, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer"
                      onClick={() => handleProductClick(item)}
                    >
                      <div
                        className={`bg-[#f2f2f2] border-2 border-solid lg:hover:border-[#483d73] ${
                          selectedProduct === item
                            ? "border-[#483d73]"
                            : "border-[#f2f2f2]"
                        } lg:h-[16vh] h-[7vh] lg:w-full w-[15.5vw] rounded-[0.8rem] flex items-center justify-center`}
                      >
                        <Image
                          className="lg:h-[14vh] h-[6vh]"
                          width={100}
                          height={100}
                          src={item.img}
                          alt={item.title}
                        />
                      </div>
                      <div className="lg:h-[8vh] lg:mt-[1vh]">
                        <p
                          className={`text-center lg:text-[1rem] text-[0.6rem] font-normal lg:hover:text-[#483d73] lg:hover:font-semibold ${
                            selectedProduct === item
                              ? "text-[#483d73] font-semibold"
                              : "text-[#c6c5c5]"
                          } `}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-[2vh] lg:hidden">
              <button
                onClick={handleViewAllClick}
                className="bg-[#f2f2f2] text-[#6f6f6f] py-1 px-2 rounded-[0.5rem] text-[0.8rem]"
              >
                {Page2Data.viewAll}
              </button>
            </div>
          </div>
        </div>

        {/* Right side container with swipe animation */}
        <div
          className="lg:w-[50%] w-full lg:mx-[1rem] lg:h-[85vh] lg:px-[2rem] lg:mt-0 mt-[4vh]"
          ref={rightContainerRef}
        >
          <div className="lg:h-[15vh]">
            <div>
              <h2 className="lg:text-[2.2rem] text-[1.5rem] font-semibold">
                <span className="text-[#c6c5c5]">
                  {selectedProduct.title.trim().replace(/\s+\S+$/, "")}
                </span>{" "}
                <span className="text-[#dc0e2a]">
                  {selectedProduct.title.trim().match(/\S+$/)}
                </span>
              </h2>
            </div>
            <div
              className="border-t-[0.2rem] border-solid border-[#dc0e2a] w-[5rem] lg:mt-[1rem] mt-[0.5rem]"
              ref={borderRef}
            ></div>
          </div>
          <div className="lg:h-[40vh] h-[25vh] flex items-center justify-center">
            <Image
              className="lg:w-[80%] w-full"
              width={400}
              height={400}
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
          </div>
          <div className="lg:h-[21vh] flex items-center justify-center">
            <p className="lg:text-[1rem] text-[0.8rem]">
              {selectedProduct.description}
            </p>
          </div>

          <div className="bg-[#483d73] lg:w-[14.2vw] lg:mt-0 mt-[3vh] w-[45%] relative lg:h-[3rem] h-[2rem] rounded-[2rem] flex items-center">
            <button className="text-white lg:text-[1.4rem] absolute left-5 whitespace-nowrap">
              {Page2Data.viewMore}
            </button>
            <button className="text-white lg:text-[2.6rem] text-[1.8rem] absolute right-[0.1rem]">
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for view all */}
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      )}
    </>
  );
};

export default Page2;
