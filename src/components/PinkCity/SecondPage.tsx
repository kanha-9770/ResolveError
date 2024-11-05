"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./secondpage.module.css";
import DashedLineWithImage from "./Elephant";
import { secondPageContent } from "../Constants/pinkcity/PinkcityPage.json";

const SecondPage = () => {
  const mandalaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mandala = mandalaRef.current;

    if (mandala) {
      ScrollTrigger.create({
        trigger: mandala,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          mandala.classList.add(styles["scale-up"]);
        },
        onLeaveBack: () => {
          mandala.classList.remove(styles["scale-up"]);
          void mandala.offsetWidth; // Trigger a reflow
          mandala.classList.add(styles["scale-up"]);
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:h-screen h-screen bg-gray-100 p-6 mt-44 w-full  ">
      <DashedLineWithImage />

      <div className="relative w-full  flex items-center  ">

        <div className="relative flex lg:w-2/5 h-full lg:-mt-32 -mt-[60rem] ">
          <div className="absolute inset-0 flex justify-center items-center lg:h-[68vh] lg:top-3  lg:-left-5  lg:w-[40vw] h-[50vh] w-[91vw]  -top-20">
            <Image
              src={secondPageContent.mandalaImg}
              alt="Mandala Design"
              layout="fill"
              objectFit="cover"
              ref={mandalaRef}
              className="object-contain  " style={{left:'-11%'}}
            />


            
          <div className="relative flex justify-center items-center w-[57vw] h-[29vh] lg:-left-7 lg:-top-2 lg:w-[23vw] lg:h-[42vh] -left-4 lg:mt-0 ">
           
              <Image
                src={secondPageContent.topImg}
                alt="Jaipur"
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-xl object-cover "
                style={{ aspectRatio: "2 / 2" }} // Adjust aspect ratio if needed
              />
            
          </div>
          </div>
        </div>

        <div className="flex-1 relative -top-[35vh] lg:top-12 lg:right-16 h-full lg:w-3/4  lg:mt-10  lg:ml-0  items-center justify-center ">
          <div className="absolute inset-0 flex justify-end items-start lg:h-full lg:w-[50rem] h-[55vh] w-[100vw] -left-[6vw] lg:left-0">
            <Image
              src={secondPageContent.strokeImg}
              alt="Stroke"
              layout="fill"
              objectFit="cover"
              className="object-contain opacity-40 "
            />
          </div>

          <div className="relative z-10 lg:top-8 w-full text-justify lg:w-[60vw] lg:p-0 top-36 ">
            <p className="text-gray-700 lg:text-sm font-regular text-sm lg:p-20 text-center  font-poppins lg:ml-0">
              {secondPageContent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
