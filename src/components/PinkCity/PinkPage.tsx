// components/PinkPage.tsx
"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './secondpage.module.css';
import DashedLineWithImage from './Elephant';
import Bird from './Bird';
import { pinkPageContent } from '../Constants/pinkcity/PinkcityPage.json';

const PinkPage = () => {
  const mandalaRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mandala = mandalaRef.current;

    if (mandala) {
      ScrollTrigger.create({
        trigger: mandala,
        start: 'top 80%',
        end: 'top 20%',
        onEnter: () => {
          mandala.classList.add(styles['scales-up']);
        },
        onLeaveBack: () => {
          mandala.classList.remove(styles['scales-up']);
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100  w-screen relative lg:top-[15rem] -top-[10vh]">
      {pinkPageContent.birdComponent && <Bird />}
      
      <div className="relative w-full h-full lg:flex lg:flex-row flex flex-row-reverse items-center justify-center">
        
        {/* Left Section */}
        <div className=" flex flex-col justify-center items-center relative lg:mt-10 lg:h-full lg:z-20 lg:p-4 lg:left-5 lg:w-2/4 w-full h-[30vh] -top-[41rem] lg:-top-14  lg:right-0 right-8  ">
          <div className="absolute inset-0 flex justify-center items-start lg:w-full lg:top-10">
            <Image
              src={pinkPageContent.strokeImg}
              alt="Stroke"
              layout="fill"
            
              className="object-contain opacity-35 " 
            />
          </div>
          <div className="relative z-10 text-justify lg:top-3 left-[3vw] lg:left-0">
            <p className="text-gray-700 lg:text-sm font-regular font-poppins">
              {pinkPageContent.description.split(' ').map((word, index) => (
                word === 'ivory' || word === 'machines' ? (
                  <span key={index} className="text-[#bd6165]">{word} </span>
                ) : (
                  `${word} `
                )
              ))}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center relative lg:h-[90vh] h-[40vh] lg:-mt-44 mx-5 -top-[63rem] lg:left-0  lg:top-0">
          <div className="absolute inset-0 flex justify-center items-center lg:w-[50vw] lg:h-[50vw]   w-[98vw] -ml-6 h-[95vw]  lg:scale-75  overflow-hidden ">
            <Image
              src={pinkPageContent.mandalaImg}
              alt="Mandala Design"
              ref={mandalaRef}
              layout="fill"
              objectFit="cover"
              className="object-contain z-10   "  style={{marginTop:'-1%',marginLeft:'6%'}} 
            />
           <div className="relative lg:w-[27vw] lg:h-[27vw] lg:left-2 lg:top-2 w-[50vw] h-[25vh]  top-1">
            <Image
              src={pinkPageContent.hawamahalImg}
              alt="Jaipur"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          </div>
         
        </div>
      </div>
    </div>
  );
};

export default PinkPage;
