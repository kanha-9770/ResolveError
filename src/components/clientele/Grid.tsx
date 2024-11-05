// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState,useEffect,useRef } from "react";

// const Grid: React.FC = () => {
//   return (
//     <>
//       <div className=" h-[100vh] w-full bg-black p-10">
//         <div className="grid grid-cols-4 gap-3 h-full w-full relative top-7 ">
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg items-center justify-center">
//             <Image
//               src="/assets/clientele/10.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16  "
//             />
//           </div>
//           <div className=" bg-circular-gradient-red border border-[#262626] rounded-lg f">
//             <Image
//               src="/assets/clientele/11.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/12.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/13.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/14.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/15.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/14.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/10.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-11 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/11.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/15.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-blue border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/13.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//           <div className="bg-circular-gradient-red border border-[#262626] rounded-lg">
//             <Image
//               src="/assets/clientele/14.svg"
//               alt="schnierd"
//               width={150}
//               height={150}
//               className=" scale-90 relative top-3 left-16 "
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './client.module.css'; // Import CSS module

// Square data
const squareData = [
  { id: 1, src: "/assets/clientele/10.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 2, src: "/assets/clientele/11.svg", bgClass: "bg-circular-gradient-red" },
  { id: 3, src: "/assets/clientele/12.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 4, src: "/assets/clientele/13.svg", bgClass: "bg-circular-gradient-red" },
  { id: 5, src: "/assets/clientele/14.svg", bgClass: "bg-circular-gradient-red" },
  { id: 6, src: "/assets/clientele/15.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 7, src: "/assets/clientele/10.svg", bgClass: "bg-circular-gradient-red" },
  { id: 8, src: "/assets/clientele/11.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 9, src: "/assets/clientele/12.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 10, src: "/assets/clientele/13.svg", bgClass: "bg-circular-gradient-red" },
  { id: 11, src: "/assets/clientele/14.svg", bgClass: "bg-circular-gradient-blue" },
  { id: 12, src: "/assets/clientele/15.svg", bgClass: "bg-circular-gradient-red" },
];

// Gradient alternatives for dynamic changes
const gradientAlternatives = {
  blue: "bg-[radial-gradient(circle_at_50%_50%,_#414141,_#000000)]",
  red: "bg-[radial-gradient(circle_at_50%_50%,_#ff7f7f,_#ff3333)]",
};

// Utility function to get a sliding animation class
const getSlidingDirectionClass = () => {
  const directions = [
    styles['animation-slide-in-left'],
    styles['animation-slide-in-right'],
    styles['animation-slide-in-top'],
    styles['animation-slide-in-bottom'],
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

// Generate square components
const generateSquares = (data: typeof squareData, shuffleCount: number, isFadingOut: boolean) => {
  return data.map((sq) => {
    const animationClass = getSlidingDirectionClass();

    // Alternate gradient based on shuffleCount
    const bgClass = shuffleCount % 2 === 1 && sq.bgClass === "bg-circular-gradient-blue"
      ? gradientAlternatives.blue
      : sq.bgClass;

    return (
      <div
        key={sq.id}
        className={`relative border border-[#262626] rounded-lg flex items-center justify-center overflow-hidden 
        ${bgClass} 
        ${isFadingOut ? 'opacity-0' : 'opacity-100'} 
        transition-opacity duration-4000 ease-in-out`} // Fading effect
      >
        <div className={`absolute inset-0 flex items-center justify-center lg:p-0 p-3 ${animationClass}`}>
          <Image
            src={sq.src}
            alt={`image-${sq.id}`}
            width={150}
            height={150}
            className="transform transition-transform duration-4000"
          />
        </div>
      </div>
    );
  });
};

// Main ShuffleGrid component
const ShuffleGrid = () => {
  const [squares, setSquares] = useState(generateSquares(squareData, 0, false));
  const [shuffleCount, setShuffleCount] = useState(0); // Count the shuffles
  const [isFadingOut, setIsFadingOut] = useState(false); // Track fading state

  useEffect(() => {
    const shuffleSquares = () => {
      setIsFadingOut(true); // Start fading out

      // After fade-out, change squares and fade in
      setTimeout(() => {
        setShuffleCount((prev) => prev + 1); // Increment shuffle count
        setSquares(generateSquares(squareData, shuffleCount + 1, false)); // Update squares with new colors
        setIsFadingOut(false); // Fade back in
      }, 4000); // Matches the fade-out duration
    };

    const interval = setInterval(shuffleSquares, 4000); // Total cycle: 4s fade-out + 4s fade-in

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [shuffleCount]); // Effect runs every time shuffleCount updates

  return (
    <div className="lg:h-[100vh] lg:w-full w-full h-screen bg-black lg:p-10">
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-3 gap-2 lg:h-full lg:w-full h-full w-full ">
        {squares}
      </div>
    </div>
  );
};

export default ShuffleGrid;



