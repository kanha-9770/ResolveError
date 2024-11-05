"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./machine.css";
import { MdOutlineFileDownload } from "react-icons/md";
import BreadcrumbProduct from "@/components/ui/BreadCrumbProduct";
import InfoCard from "@/components/Products/InfoCard";
import PositionAwareButton from "@/components/ui/PositionAwareButton";
import ZigzagLine from "../ZigzagLine";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

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
  types: {
    type: string;
    image: string;
  }[];
}

interface LottieAnimations {
  speed: string;
  size: string;
}

interface ProductDetails {
  speedDescription: string;
  sizeDescription: string;
  rangeDescription: string;
}

interface MachineProps {
  name: string;
  image: string;
  mimage: string;
  description: string;
  specification_image: SpecificationImage[];
  product_heading: string;
  first_name: string;
  second_name: string;
  category: string;
  icon: string;
  introduction: string;
  parameters: string;
  application: string;
  product_description: string;
  status: string;
  rating: Rating;
  technicalSpecifications: TechnicalSpecifications;
  advantages: Advantages;
  paperTypes: PaperTypes;
  optional_add_ons: string;
  faqs: string;
  related_product: string;
  lottieAnimations: LottieAnimations;
  productDetails: ProductDetails;
}

const Machine: React.FC<MachineProps> = ({
  product_heading,
  description,
  name,
  image,
  application,
  introduction,
  mimage,
  first_name,
  specification_image,
  second_name,
  advantages,
}) => {
  // Function to render text with bold part before the colon
  const renderTextWithBoldColon = (text: string) => {
    // Split text by the first colon
    const parts = text.split(/:(.+)/);
    if (parts.length > 1) {
      return (
        <>
          <span className="font-medium  text-black">{parts[0]}:</span>
          <span className="text-gray-500 font-regular">{parts[1]}</span>
        </>
      );
    }
    return text; // If no colon is present, return the text as is
  };
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
  console.log("images", specification_image);

  const images = specification_image.flatMap((img) => Object.values(img)); // Flattening the images array
  const shouldShowArrows = images.length > 4;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: name, current: true },
  ];
  return (
    <div className="mt-16 h-full flex flex-col  justify-start">
      <div className="h-[55vh] mx-10 z-30 flex flex-row">
        <div className="font-poppins   w-[70%]">
          <BreadcrumbProduct items={breadcrumbItems} />
          <div className="flex w-full  h-full">
            <div className="flex flex-row  items-start relative">
              {/* fixed text area */}
              <div className="w-[50%]  h-full flex flex-col">
                <h1 className="text-4xl py-2 font-poppins text-red-500 font-bold">
                  <span className="text-gray-400">{first_name}</span>{" "}
                  {second_name}
                </h1>
                <div className="text-black  text-sm py-4 font-normal">
                  {introduction}
                </div>
                <div className="py-2">
                  <PositionAwareButton icon={true} text={"Book Now"} />
                </div>
                <div className="absolute bottom-10 text-4xl py-2 font-bold text-gray-400">
                  {" "}
                  {name}
                </div>
              </div>
              {/* fixeed image area */}
              <div className="w-[50%] h-full flex relative">
                <ZigzagLine />
                <div className="w-full h-[55vh] flex  relative">
                  <Image
                    src={selectedImage}
                    height={800}
                    width={400}
                    alt="Flexo Printing Machine"
                    className="h-full object-contain w-full"
                  />
                  {/* Small image positioned at the top right corner */}
                  <div className="absolute top-0 right-0 p-2">
                    <Image
                      src={mimage}
                      height={60}
                      width={60}
                      alt="Small Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex justify-end flex-col items-end">
          <div className="text-black mb-4">
            <h3 className="font-bold text-lg mb-4">{advantages.title}</h3>
            <ul className="list-disc text-base font-regular list-inside">
              {advantages.items.map((advantage, index) => (
                <li key={index}>{renderTextWithBoldColon(advantage)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative h-[30vh] border-t-4  border-gray-300">
        <table className="w-full divide-y border-separate border-spacing-0">
          <thead className="border-b border-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r w-[50%]"
              >
                <InfoCard
                  sizeRange="3 oz to 32 oz"
                  speedRoundShapes="up to 180 cups/min."
                  maxCups={180}
                  bmp100Compact="BMP 100 COMPACT"
                  bmp100Super="BMP 100 SUPER"
                />
              </th>
              <th
                scope="col"
                className="px-6  text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 w-[20%]"
              >
                <div className="absolute -top-1 left-[55%]  flex h-full flex-row  items-center justify-center mx-auto ">
                  {/* Left Arrow */}
                  <div className="bg-white mt-4 rounded-2xl w-[40vw] flex flex-row items-center justify-center p-4 px-2">
                    {shouldShowArrows && (
                      <button
                        className="h-12 w-12 z-20 items-center rounded-full cursor-pointer  hidden lg:flex  disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                      >
                        <IoIosArrowBack className="text-2xl text-gray-500" />
                      </button>
                    )}

                    {/* Carousel */}
                    <div
                      className={`hidden lg:flex overflow-x-auto  ${
                        shouldShowArrows ? "scroll-smooth" : ""
                      } [scrollbar-width:none] gap-3`}
                      ref={carouselRef}
                      onScroll={checkScrollability}
                    >
                      {images.map((image, index) => (
                        <div key={index} className="flex flex-col ">
                          <motion.div
                            className={`relative flex-shrink-0 w-[8.4rem] h-24 border-2 rounded-2xl p-1 flex flex-col  ${
                              selectedImage === image ? "border-red-500" : ""
                            }`}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            onClick={() => setSelectedImage(image)} // Set selected image on click
                          >
                            <div className="relative w-full h-full flex ">
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
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
            </tr>
          </thead>
          <tbody className="bg-white"></tbody>
        </table>
      </div>
    </div>
  );
};

export default Machine;
