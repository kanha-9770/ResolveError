"use client";

import React, { useMemo } from "react";
import { InfiniteMovingCards } from "../ui/marqueeCardAnimation";
import data from "../Constants/hero.json";

export default function MarqueeSection() {
  // Memoize brand section to avoid recomputation
  const brandSection = useMemo(
    () => data.find((item) => item.category === "BrandsSection"),
    []
  );

  // Return early if no brand section is found or data is missing
  if (!brandSection?.data) return null;

  const { trusted = [], partners = [] } = brandSection.data;
  const { heading1, heading2, description } = brandSection;

  return (
    <div className="h-screen px-8 flex flex-col justify-center gap-12 overflow-hidden">
      <div className="relative h-1/3 flex flex-col lg:flex-row">
        {/* Heading Section */}
        <div className="flex w-[10%] lg:w-[15%] flex-col">
          <h1 className="text-sm lg:text-2xl font-regular mt-8 font-poppins whitespace-nowrap">
            {heading1}
          </h1>
          <h2 className="text-sm lg:text-2xl font-regular mt-12 font-poppins whitespace-nowrap">
            {heading2}
          </h2>
        </div>

        {/* Marquee Cards */}
        <div className="w-[90%] lg:w-[85%] ml-32 lg:ml-44 mask-gradient-marquee">
          <div className="bg-white">
            <InfiniteMovingCards
              items={trusted}
              direction="left"
              className="w-full"
            />
          </div>

          <div className="bg-white mt-2">
            <InfiniteMovingCards
              items={partners}
              direction="right"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      {description?.text && (
        <div className="relative flex flex-col h-[20%] items-center text-center">
          <p className="text-sm lg:text-2xl mx-4 w-full lg:w-[62%] font-poppins font-regular leading-8">
            {description.text}
          </p>
        </div>
      )}
    </div>
  );
}
