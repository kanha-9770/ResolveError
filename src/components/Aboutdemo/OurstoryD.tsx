"use client";
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import bg from '../../../public/assets/about/nesscobg.avif'; // Add your background image path here
import { ourStoryContent } from '../Constants/ourCompany/OurcompanyPage.json'; // Import the dynamic content
import styles from './Story.module.css';

const OurStoryD = () => {
  const { title, highlight, paragraphs, image } = ourStoryContent;
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
  
      // Calculate the position and height of the image section
      const imageSectionTop = imageRef.current.getBoundingClientRect().top + window.scrollY;
      const imageSectionHeight = imageRef.current.offsetHeight;
      const windowScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
  
      // Determine the positions for starting and ending the shrink effect
      const startShrinkPosition = imageSectionTop - windowHeight / 2;
      const endShrinkPosition = imageSectionTop + imageSectionHeight;
  
      // Define the minimum scale value
      const minScale = 1.1;
  
      if (windowScrollY >= startShrinkPosition && windowScrollY <= endShrinkPosition) {
        // Calculate the scroll progress within the shrink range
        const progress = (windowScrollY - startShrinkPosition) / (endShrinkPosition - startShrinkPosition);
        
        // Scale down from 1.6 to 1.0 based on progress, and clamp the value to ensure it doesn't go below 1.0
        const scale = Math.max(1.3 - progress * 1.1, minScale);
        
        // Increase border-radius from 0 to 50px based on progress
        const borderRadius = progress * 40;
  
        // Apply the calculated scale and border-radius to the image
        imageRef.current.style.transform = `scale(${scale})`;
        imageRef.current.style.borderRadius = `${borderRadius}px`;
      } 
      // If the scroll position is before the shrink range
      else if (windowScrollY < startShrinkPosition) {
        imageRef.current.style.transform = 'scale(1.3)'; // Initial scale
        imageRef.current.style.borderRadius = '1px'; // Initial border-radius
      } 
      // If the scroll position is after the shrink range
      else if (windowScrollY > endShrinkPosition) {
        imageRef.current.style.transform = `scale(${minScale})`; // Final scale (clamped to minScale)
        imageRef.current.style.borderRadius = '50px'; // Final border-radius
      }
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative min-h-screen text-white px-4 mb-36 lg:mt-20 -mt-24">
      
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-5xl font-poppins font-medium text-white mt-20">
            {title}
            <span> {highlight}</span>
          </h1>
          <div className="mb-10 max-w-4xl mx-auto mt-6 font-poppins text-sm font-regular">
            {paragraphs}
          </div>
          <div className="flex justify-center w-full h-auto mt-14 overflow-x-clip">
            <div
              ref={imageRef}
              className={styles.scaleup}
              style={{
                overflow: 'hidden',
                transition: 'transform 2s ease, border-radius 0.9s ease', // Adjusted transition time
              }}
            >
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStoryD;
