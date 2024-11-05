"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./machine.css";
import BreadcrumbProduct from "@/components/ui/BreadCrumbProduct";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RightSidebar from "./RightSidebar";
// Define the type for the specification image object
interface SpecificationImage {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
  fifth?: string;
}

interface Rating {
  stars: number;
  reviews: number;
}

interface TechnicalSpecifications {
  title: string;
  specifications: string[];
}

interface Advantages {
  title: string;
  items: string[];
}

interface PaperTypes {
  title: string;
  types: Array<{
    type: string;
    image: string;
  }>;
}

interface MachineProps {
  product_heading: string;
  name: string;
  first_name: string;
  second_name: string;
  application: string;
  image: string;
  mimage: string;
  description: string;
  specification_image: SpecificationImage[];
  status: string;
  rating: Rating;
  technicalSpecifications: TechnicalSpecifications;
  advantages: Advantages;
  paperTypes: PaperTypes;
}

const NewMachine: React.FC<MachineProps> = ({
  product_heading,
  description,
  name,
  image,
  application,
  mimage,
  first_name,
  second_name,
  specification_image,
  status,
  rating,
  technicalSpecifications,
  advantages,
  paperTypes,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>(image);
  useEffect(() => {
    checkScrollability();
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  const images = specification_image.flatMap((img) => Object.values(img)); // Flattening the images array
  const shouldShowArrows = images.length > 4;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: name, current: true },
  ];

  return (
    <div className="h-screen font-poppins  mt-20 px-10">
      <div className="flex flex-row gap-4">
        <div className="font-poppins bg-white rounded-xl  w-[67%]">
          <div className="p-4 pl-4">
            <BreadcrumbProduct items={breadcrumbItems} />
          </div>
          <div className="flex h-[70vh] w-full">
            <div className="w-full h-full flex justify-center relative">
              <div className="w-full h-full flex flex-col justify-center items-center relative">
                <div className="h-2/3 p-4 flex justify-center items-center">
                  {/* Main Image */}
                  <Image
                    src={selectedImage}
                    height={800}
                    width={400}
                    alt={name}
                    className="h-full w-auto"
                  />
                </div>
                {/* Small image positioned at the top right corner */}
                <div className="absolute top-0 right-20 p-2">
                  <Image
                    src={mimage}
                    height={60}
                    width={60}
                    alt="Small Image"
                    className="object-cover"
                  />
                </div>
                <div className="h-1/3 grid grid-rows-1 gap-2 grid-cols-4">
                  <div className="relative flex flex-row items-center mx-auto w-[62vw]">
                    {/* Left Arrow */}
                    {shouldShowArrows && (
                      <button
                        className="h-12 w-16 z-20 cursor-pointer rounded-full hidden lg:flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                      >
                        <IoIosArrowBack className="text-2xl text-gray-500" />
                      </button>
                    )}

                    {/* Carousel */}
                    <div
                      className={`hidden lg:flex overflow-x-auto py-8 ${
                        shouldShowArrows ? "scroll-smooth" : ""
                      } [scrollbar-width:none] gap-3`}
                      ref={carouselRef}
                      onScroll={checkScrollability}
                    >
                      {images.map((image, index) => (
                        <div key={index} className="flex flex-col space-y-4">
                          <motion.div
                            className={`relative flex-shrink-0 w-[11rem] h-28 border-2 rounded-2xl p-1 flex flex-col justify-center items-center ${
                              selectedImage === image ? "border-red-500" : ""
                            }`}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            onClick={() => setSelectedImage(image)} // Set selected image on click
                          >
                            <div className="relative w-full h-full flex justify-center items-center">
                              <Image
                                src={image}
                                alt={`Image ${index}`}
                                width={196}
                                height={196}
                                className="object-contain w-full h-full cursor-pointer"
                              />
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    {/* Right Arrow */}
                    {shouldShowArrows && (
                      <button
                        className="h-12 z-20 w-16 cursor-pointer hidden rounded-full lg:flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                      >
                        <IoIosArrowForward className="text-2xl z-20 text-gray-500" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 w-[33%]">
          <RightSidebar
            title={name}
            first_name={first_name}
            second_name={second_name}
            status={status}
            rating={rating}
            technicalSpecifications={technicalSpecifications}
            advantages={advantages}
            paperTypes={paperTypes}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default NewMachine;
