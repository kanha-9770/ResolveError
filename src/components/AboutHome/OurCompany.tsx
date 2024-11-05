"use client";

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Page4 from './carasoul';
import { companyContent } from '../Constants/About/AboutUsPage.json'; // Adjust path as needed
import MobileCarousel from './Mobilecarasouel';

const OurCompany: FC = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size for mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint if needed
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <div className="relative lg:h-[95vh] h-[80vh] bg-white text-white lg:flex lg:flex-col items-center">
      {/* Background image */}
      <div className="absolute inset-0">
  <Image
    src="/assets/about/ourcompany/12.svg"
    alt="Background Image"
    layout="fill"
    objectFit="fill"
    objectPosition="center"
    quality={100}
    className="h-full w-full opacity-40"
  />
</div>     

<div className="relative inset-0 ml-[85vw] -mt-[60vh] ">
  <Image
    src="/assets/about/ourcompany/13.svg"
    alt="Background Image"
    layout="fill"
    objectFit="fill"
    className="h-[10vh] w-[10vw] "
  />
</div> 

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#171033] to-[#300675] opacity-60 z-[-1]"></div> */}

      <h1 className="lg:text-5xl text-2xl font-medium font-poppins z-10  absolute lg:left-9 left-5 text-[#3a2a79] top-[5vh]">{companyContent.title}</h1>
      <div className=" lg:invisible visible border mt-2 absolute top-0 z-10"></div>
      <div className="lg:flex lg:flex-col items-center w-full absolute lg:top-[15vh] top-20 lg:p-0 p-5 ">

        {/* <div className="bg-gray-200 bg-opacity-45 rounded-2xl p-3 shadow-lg  w-[50%] absolute -left-5 ">
          <Carousel />
       
        </div> */}

          {isMobile ? (
          <MobileCarousel /> // Use a custom mobile carousel component
        ) : (
          <Page4 /> // Existing carousel for desktop view
        )}

        <div className=" lg:p-5 flex-1 font-poppins lg:font-regular lg:text-sm text-xs text-center text-black  lg:w-[45%] h-[95%] lg:items-end lg:justify-end absolute lg:right-14 lg:px-0 lg:top-8 ">
          <p className="mt-5">
            {companyContent.description}
          </p>

         
        </div>
      </div>
      <div className="flex justify-center bg-slate-50">
  <button className=" absolute bottom-5  text-base hover:font-medium font-normal font-poppins w-[8rem] h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10 ">
    Read More
  </button>
</div>
    </div>
  );
};

export default OurCompany;
