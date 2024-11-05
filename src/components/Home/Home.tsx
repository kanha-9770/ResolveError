import React from "react";
import data from "../Constants/hero.json";
import { Button } from "../ui/button";
import ImageSlider from "../ui/ImageSlider";
import dynamic from "next/dynamic";
const FeatureProjects=dynamic(()=>import("./FeatureProjects"))
const Home: React.FC = () => {
  const homeData = data.find((item) => item.category === "HeroSection")?.data;
  return (
    <>
      <div className="relative  h-full p-0   flex flex-col items-center overflow-hidden  w-screen">
        <div className="relative  px-4 lg:px-10 w-full flex-wrap">
          <div className="w-full flex justify-center items-center h-[calc(100vh-100px)] lg:h-[52vh] rounded-3xl">
           <ImageSlider/>
          </div>
        </div>
        <div className="absolute h-auto w-[80%] lg:w-auto  left-8 top-1/3 lg:top-[38%] lg:left-28 flex-col text-7xl text-white font-alexBrush">
          <h1 className="text-3xl text-center lg:text-start mx-2 md:text-2xl lg:text-5xl font-poppins font-light">
            {homeData?.textOverlay?.headline}
            <div className="text-3xl pt-2 lg:text-6xl text-[#f2f2f2] font-poppins font-semibold ">
              {homeData?.textOverlay?.subheadline}
            </div>
          </h1>
        </div>
        <div className="absolute flex flex-col w-1/2  lg:w-[20rem] lg:h-[5rem] lg:rounded-tl-[2rem] rounded-tl-[1.5rem] right-0 bg-[#f5f5f5] lg:bottom-0 bottom-0 text-3xl font-poppins text-white text-center">
          <div className="-mt-4 lg:-mt-6 flex mr-2 lg:mr-8 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="flex  h-4 w-8 lg:h-6 lg:w-10"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill="#f2f2f2"
                transform="rotate(90 10 10)"
              ></path>
            </svg>
          </div>
          <div className="w-full mt-4 ml-8 hidden lg:flex  justify-start">
            <div className="absolute bottom-4 right-[5.5rem]">
              <Button className="rounded-full flex items-center bg-primary text-primary-foreground hover:bg-white hover:text-black border border-black px-1 py-2 text-base font-regular group">
                <span className="flex-grow ml-2 text-center">View All</span>
                <span className="ml-2 bg-white rounded-full p-1 transition-colors duration-200 group-hover:bg-black">
                </span>
              </Button>
            </div>
          </div>
          <div className=" lg:hidden mt-2 -ml-2 items-center flex justify-center">
            <div className="absolute bottom-4 right-4">
              <Button className="rounded-full flex items-center bg-primary text-primary-foreground hover:bg-white hover:text-black border border-black px-1 py-2 text-base font-regular group">
                <span className="flex-grow ml-2 text-center">View All</span>
                <span className="ml-2 bg-white rounded-full p-1 transition-colors duration-200 group-hover:bg-black">
                </span>
              </Button>
            </div>
          </div>
          <div className=" z-50 mt-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="lg:-ml-[2rem] -ml-6 h-4 w-8  lg:h-6 lg:w-10"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill="#f2f2f2"
                transform="rotate(90 10 10)"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <FeatureProjects />
    </>
  );
};
Home.displayName = "Hero";
export default React.memo(Home);
