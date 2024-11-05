// components/Gallery.tsx
"use client";
import Image from "next/image";
import { galleryfour } from "../Constants/About/AboutUsPage.json";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

const truncateText = (text: string, maxWords: number) => {
  const wordsArray = text.split(" ");
  if (wordsArray.length > maxWords) {
    return wordsArray.slice(0, maxWords).join(" ") + "...";
  }
  return text; // Return full text if it's within the limit
};

const PinkCity = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size for mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 704); // Adjust breakpoint if needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mx-auto lg:h-[95vh] h-full bg-white w-screen">
      <h1 className="lg:text-5xl text-3xl font-medium text-left relative top-[5vh] font-poppins text-[#312465] lg:ml-10 ml-4">
        {galleryfour.heading}
      </h1>

      <div className="lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 mb-5 lg:p-6 mr-2 mt-[5vh] lg:w-full lg:h-[66vh] p-1">
        {galleryfour.galleryImages.map((item, index) => (
          <div key={index} className="relative lg:h-[58vh] lg:w-[100%]  ">
            {!isMobile ? (
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  className="lg:rounded-2xl  lg:object-cover"
                />

                <div className="lg:visible invisible absolute inset-0 bg-black transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 group-hover:bg-gradient-to-t from-black to-transparent bg-opacity-0"></div>
                <div className=" absolute left-20 lg:left-0 inset-0 flex flex-col items-center justify-center lg:transition-transform lg:duration-300 lg:transform lg:translate-y-full lg:group-hover:translate-y-0">
                  <Image
                    src="/assets/about/flower.svg"
                    alt="Overlay Icon"
                    width={100}
                    height={50}
                    className="w-[16rem] h[5rem] -mt-10"
                  />
                  <p className="text-white -mt-20 lg:text-sm font-regular lg:w-[15rem] text-xs w-35vw] text-center font-poppins">
                    {item.paragraph}
                  </p>
                  <Image
                    src="/assets/about/bottomlayer.svg"
                    alt="Overlay Icon"
                    width={100}
                    height={50}
                    className="lg:w-[16rem] lg:h[5rem] -mt-36"
                  />
                 
                </div>
              </div>
            ) : (
              // mobileview
              <div className="flex flex-col border border-black h-[25vh] rounded-xl overflow-hidden w-full mb-5 mt-2">
                <div className="flex ">
                  <div className="w-2/4 p-1">
                    <Image
                      src={item.src}
                      alt={`Gallery image ${index + 1}`}
                      width={300}
                      height={200}
                      className=" object-cover h-[24vh] w-full rounded-xl "
                    />
                  </div>
                  <div className="w-3/5 flex flex-col justify-text  p-1">
                    <Image
                      src="/assets/about/sustain/upperlayer.svg"
                      alt="Overlay Icon"
                      width={100}
                      height={50}
                      className=" relative -mt-5 ml-[3rem] top-3"
                    />
                    <p className="text-black text-xs font-bold text-center font-poppins p-2 relative -top-5">
                      {truncateText(item.paragraph, 17)}{" "}
                      {/* Adjust maxWords as needed */}
                    </p>

                    <Image
                      src="/assets/about/sustain/bottomlayer.svg"
                      alt="Overlay Icon"
                      width={100}
                      height={50}
                      className="relative -mt-7 -top-8 ml-[3rem] "
                    />
                 
                  </div>
                </div>
              </div>
            )}
            {index >= 0 && index < galleryfour.galleryImages.length - 1 && (
              <div className="absolute right-[-0.700rem] top-3 h-[55vh] w-[2px] bg-[#2d1f66] lg:visible invisible"></div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col items-center mt-12 relative">
        <div className="relative p-2 text-[#312465] text-center  text-base hover:font-medium font-normal font-poppins -top-11">
          <p>Read More</p>
        </div>
        <div className="relative">
          <Image
            src="/assets/about/layers.svg"
            alt="Overlay Icon"
            width={100}
            height={50}
            className="relative w-[12rem] h-auto z-10 -mt-44"
          />
        </div>
      </div> */}

<div className="flex justify-center bg-slate-50">
  <button className=" absolute bottom-8  text-base hover:font-medium font-normal font-poppins w-[8rem] h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10 ">
    Read More
  </button>
</div>
    </div>
  );
};

export default PinkCity;
