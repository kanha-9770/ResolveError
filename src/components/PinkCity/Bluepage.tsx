// components/Bluepage.tsx
"use client";

import { useRef } from 'react';
import Image from 'next/image';
import styles from './secondpage.module.css';
import { bluePageContent } from'../Constants/pinkcity/PinkcityPage.json';

const Bluepage = () => {
  const bgSvgRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full h-screen bg-gray-100 mt-10 p-6 overflow-hidden lg:visible invisible">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={bluePageContent.backgroundSvg}
          alt="Background SVG"
          layout="fill"
          objectFit="cover"
          className={styles.animateBackground}
        />
      </div>

      <div className="relative z-10 lg:w-[100%] lg:top-20 lg:h-[73vh] lg:left-0 h-[50vh] top-52 ">
        <video
          className="w-full object-fill h-full rounded-2xl "
          autoPlay
          loop
          muted
        >
          <source src={bluePageContent.videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Bluepage;
