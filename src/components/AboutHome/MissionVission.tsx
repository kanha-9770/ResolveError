"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GiDjedPillar } from "react-icons/gi";
import styles from "./featureproject.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/about/carousel";
import Image from "next/image";

// Import TypeScript content object
import { missionvissionContent } from "../Constants/About/AboutUsPage.json";

const Missionvission: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [carouselApi, setCarouselApi] = useState<any | null>(null);


  const handleButtonClick = (index: number) => {
    setCurrentSlide(index); // Update the currentSlide state to the selected index
    
  };

  const images = [
    "/assets/about/wave.svg", // Image for the first slide
    "/assets/about/3.svg", // Image for the second slide
    "/assets/about/4.svg", // Image for the third slide
  ];

  const imageClasses = [
    styles["image-slide-0"], // Class for the first slide
    styles["image-slide-1"], // Class for the second slide
    styles["image-slide-2"], // Class for the third slide
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentSlide);
    }
  }, [currentSlide, carouselApi]);

  const renderDots = () => (
    <div className="flex justify-center mt-5 lg:hidden">
      {missionvissionContent.slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-2 h-2 rounded-full mx-2 ${
            currentSlide === index ? "bg-[#3a2a79]" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  );


  return (
    <div className="relative lg:w-full  w-screen p-8 bg-white lg:h-[95vh] h-[80vh] overflow-hidden">
      <h2 className="lg:text-5xl font-medium text-[#3a2a79] lg:mb-8 lg:top-[10] font-poppins text-2xl">
       {missionvissionContent.title}
      </h2>
      <div className=" lg:invisible visible border mt-2"></div>

      <div className=" lg:invisible visible w-full h-[5vh] font-bold font-poppins bg-gray-200 rounded-[2rem] relative top-3 flex flex-row gap-2 p-1">
      {['Mission', 'Vision', 'Culture'].map((label, index) => (
          <button
            key={label}
            onClick={() => handleButtonClick(index)} // Update currentSlide based on button click
            className={`w-[94vw] rounded-full border-2 ${
              currentSlide === index
                ? 'bg-[#3a2a79] text-white' // Change background color when selected
                : 'bg-[rgb(172,162,201)] text-white '
            } border-[#3a2a79]`}
          >
            {label}
          </button>
        ))}
      </div>
      <Carousel
        className="lg:w-full lg:max-w-screen-md"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {missionvissionContent.slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="lg:flex lg:aspect-square items-center justify-center p-6 ">
                    <div className="flex flex-col lg:mb-[20rem]">
                      <h3 className="lg:text-4xl font-poppins font-normal lg:text-left lg:-mt-[5rem] lg:ml-3">
                        {slide.title}
                      </h3>
                      <div className="lg:flex items-center justify-center lg:space-x-20 lg:mr-10 lg:mt-5  ">
                        <div className="flex-shrink-0">
                          <img
                            src={slide.imageSrc}
                            alt={`${slide.title} Icon`}
                            className="w-48 h-48 object-cover lg:mb-2 "
                            style={{ height: "15rem", width: "15rem" }}
                          />
                        </div>
                        <p className="lg:text-sm text-xs font-semi-medium text-center lg:w-[26rem] w-full font-poppins lg:mb-3 lg:right-10 relative ">
                          {slide.description}
                        </p>
                      </div>
                      {slide.points && (
                        <div className="flex flex-row text-sm w-[45rem] -ml-3 font-bold lg:visible invisible text-left">
                          {slide.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex ">
                              <div className="w-6 h-6  rounded-full bg-[#312465] text-white flex items-center justify-center font-bold mr-2 ">
                                {pointIndex + 1}.
                              </div>
                              <p className=" w-[8rem] text-left text-xs text-[#6f6f6f] font-poppins font-medium  relative">{point}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {slide.values && (
                        <div className="flex flex-row text-sm w-[49rem] text-center font-bold  lg:visible invisible">
                          {slide.values.map((value, valueIndex) => (
                            <div key={valueIndex} className="flex  ">
                              <Image
                                src={value.imageSrc}
                                alt={`Value ${valueIndex + 1}`}
                                width={100}
                                height={100}
                                className="w-6 h-7 object-cover -mt-6"
                                style={{ height: "5rem", width: "5rem" }}
                              />
                              <span className="w-[7rem] -ml-6  items-center  text-left text-xs font-poppins text-[#6f6f6f] font-medium">
                                {value.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>

       {/* Dots for mobile view */}
       {renderDots()}

      <div className="absolute -right-0 top-24 overflow-hidden lg:visible invisible">
        <img
          src={images[currentSlide]}
          alt="Graphic"
          className={`${imageClasses[currentSlide]} transition-teall duration-500`}
        />
      </div>

      <div className="flex justify-center bg-slate-50">
  <button className=" absolute lg:bottom-2 bottom-0 w-[8rem] text-base hover:font-medium font-normal font-poppins h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10 ">
    Read More
  </button>
</div>

    </div>
  );
};

export default Missionvission;
